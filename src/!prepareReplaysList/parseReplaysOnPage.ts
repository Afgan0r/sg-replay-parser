import { parse } from 'date-fns';
import compact from 'lodash/compact';
import pLimit from 'p-limit';

import { dateFnsOptionsWithFirstWeekDate } from '../0 - consts';
import dateToUTC from '../0 - utils/utc';
import parseReplay from './parseReplay';

// mission game type protected by CloudFlare email obfuscation because contains '@' sign
// this is bug and should be fixed
// untill there is no fix, we use this decode function
// got this from here: https://usamaejaz.com/cloudflare-email-decoding/
const decodeMissionGameType = (encodedMissionGameType: string) => {
  let result = '';
  const r = parseInt(encodedMissionGameType.substr(0, 2), 16);

  for (let i = 2; encodedMissionGameType.length - i; i += 2) {
    // eslint-disable-next-line no-bitwise
    const charCode = parseInt(encodedMissionGameType.substr(i, 2), 16) ^ r;

    result += String.fromCharCode(charCode);
  }

  return result;
};

const parseTableRowInfo = async (el: Element): Promise<ReplayRaw | null> => {
  const tableCells = el.getElementsByTagName('td');
  const linkElement = el.querySelector('a');
  const replayLink = linkElement?.getAttribute('href');

  if (!(linkElement && linkElement.textContent) || !replayLink) return null;

  const encodedMissionsGameType = linkElement.querySelector('span')?.getAttribute('data-cfemail');

  if (!encodedMissionsGameType) return null;

  const missionGameType = decodeMissionGameType(encodedMissionsGameType);
  const filename = await parseReplay(replayLink);

  // date example: '17.07.2022 04:05'
  const date = dateToUTC(parse(
    tableCells[3].textContent || '',
    'dd.MM.yyyy HH:mm',
    new Date(),
    dateFnsOptionsWithFirstWeekDate,
  )).toJSON();

  return {
    // regexp removes [email protected] from string
    mission_name: missionGameType + linkElement.textContent.replace(/\[[^\]]*\]*/g, ''),
    filename,
    date,
    serverId: parseInt(tableCells[2].textContent || '', 10) || 0,
    world_name: tableCells[1].textContent || 'unknown',
  };
};

const parseReplaysOnPage = async (dom: Document): Promise<ReplayRaw[]> => {
  const replaysList = Array.from(dom.querySelectorAll('.common-table > tbody > tr'));

  const limit = pLimit(10);
  const result: Array<ReplayRaw | null> = await Promise.all(
    replaysList.map((replay) => limit(() => parseTableRowInfo(replay))),
  );

  return compact(result);
};

export default parseReplaysOnPage;