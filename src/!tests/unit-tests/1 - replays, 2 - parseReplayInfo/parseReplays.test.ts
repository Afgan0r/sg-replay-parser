/* eslint-disable no-console */
import { disableBarsProgress } from '../../../0 - utils/progressHandler';
import parseReplays from '../../../1 - replays/parseReplays';
import * as parse from '../../../2 - parseReplayInfo';
import testData from './data/parseReplays';
import { generatePlayerEntity, generateReplay, generateReplayInfo } from './utils';

jest.mock('console');

beforeEach(() => {
  disableBarsProgress();
  fetchMock.resetMocks();
});

test('SG replays should be parsed correctly', async () => {
  const { replays, replayInfo, result } = testData;

  replays.forEach(({ filename }) => (
    fetchMock.mockOnce(JSON.stringify(replayInfo[filename]))
  ));

  expect(await parseReplays(replays, 'sg')).toMatchObject(result);
});

test('Errors during fetching should be ignored', async () => {
  fetchMock.mockRejectOnce(new Error('invalid json response'));

  expect(await parseReplays([generateReplay('sg', 'test_1')], 'sg')).toMatchObject([]);
});

test("Errors during parsing shouldn't be ignored", async () => {
  const testErrorMessage = 'test error message';

  jest.spyOn(parse, 'default').mockImplementationOnce(() => {
    throw new Error(testErrorMessage);
  });

  console.error = jest.fn();

  fetchMock.mockOnce(JSON.stringify(testData.replayInfo.file_1));

  expect(await parseReplays([generateReplay('sg', 'test_2')], 'sg')).toMatchObject([]);
  expect(console.error).toBeCalledWith(testErrorMessage);
});

const getReplayInfoForMace = (playersCount: number): ReplayInfo => {
  const entities: ReplayInfo['entities'] = [];

  for (let index = 0; index < playersCount; index += 1) {
    entities.push(generatePlayerEntity({
      id: index,
      side: 'EAST',
    }));
  }

  return generateReplayInfo([], entities);
};

test('Mace replays with less than 10 players should be skipped', async () => {
  const replays: Replay[] = [generateReplay('mace', 'mace_1')];
  const replayInfo = getReplayInfoForMace(5);

  fetchMock.mockOnce(JSON.stringify(replayInfo));

  expect(await parseReplays(replays, 'mace')).toHaveLength(0);
});

test("Mace replays with 10 or more players shouldn't be skipped", async () => {
  const replays: Replay[] = [generateReplay('mace', 'mace_2')];
  const replayInfo = getReplayInfoForMace(20);

  fetchMock.mockOnce(JSON.stringify(replayInfo));

  expect(await parseReplays(replays, 'mace')).toHaveLength(1);
});