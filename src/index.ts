import { gameTypes } from './0 - consts';
import filterPlayersByTotalPlayedGames from './0 - utils/filterPlayersByTotalPlayedGames';
import formatGameType from './0 - utils/formatGameType';
import { stopAllBarsProgress } from './0 - utils/progressHandler';
import getReplays from './1 - replays/getReplays';
import parseReplays from './1 - replays/parseReplays';
import calculateGlobalStatistics from './3 - statistics/global';
import getStatsByRotations from './3 - statistics/rotations';
import calculateSquadStatistics from './3 - statistics/squads';
import generateOutput from './4 - output';

const getParsedReplays = async (gameType: GameType): Promise<PlayersGameResult[]> => {
  const replays = await getReplays(gameType);
  const parsedReplays = await parseReplays(replays, gameType);

  // used only in development
  // const parsedReplays = await parseReplays(
  //   gameType === 'sg' ? replays.slice(0, 50) : [],
  //   gameType,
  // );

  return parsedReplays;
};

const countStatistics = (
  parsedReplays: PlayersGameResult[],
  gameType: GameType,
): Statistics => {
  const global = calculateGlobalStatistics(parsedReplays);
  const squad = calculateSquadStatistics(global, parsedReplays);
  const byRotations = gameType === 'sg' ? getStatsByRotations(parsedReplays) : null;

  // eslint-disable-next-line no-console
  console.log(`- ${formatGameType(gameType)} statistics collected.`);

  return {
    global: filterPlayersByTotalPlayedGames(global),
    squad,
    byRotations,
  };
};

(async () => {
  const [sgParsedReplays, maceParsedReplays] = await Promise.all(
    gameTypes.map((gameType) => getParsedReplays(gameType)),
  );

  stopAllBarsProgress();

  // eslint-disable-next-line no-console
  console.log('\nAll replays parsed, start collecting statistics:');

  const parsedReplays: Record<GameType, PlayersGameResult[]> = {
    sg: sgParsedReplays,
    mace: maceParsedReplays,
  };
  const [sgStats, maceStats] = await Promise.all(
    gameTypes.map((gameType) => countStatistics(parsedReplays[gameType], gameType)),
  );

  // eslint-disable-next-line no-console
  console.log('\nAll statistics collected, start generating output files.');

  generateOutput({
    sg: { ...sgStats },
    mace: { ...maceStats },
  });

  // eslint-disable-next-line no-console
  console.log('\nCompleted.');
})();
