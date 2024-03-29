import { isNull } from 'lodash';

const getPlayerName = (playerName: PlayerName): [PlayerName, PlayerPrefix] => {
  if (!playerName.includes('[')) return [playerName.trim(), null];

  const squadPrefixRegex = /\[.*?\]/;
  const removeBracketsRegex = /\[.*?\]/g;
  const matchResult = playerName.trim().match(squadPrefixRegex);

  const name = playerName
    .trim()
    .replace(removeBracketsRegex, '')
    .replace('[', '')
    .replace(']', '');

  if (isNull(matchResult)) return [name.trim(), null];

  if (matchResult[0] === '[]') return [name.trim(), null];

  const squadPrefix = matchResult[0];

  return [name.trim(), squadPrefix.trim()];
};

export default getPlayerName;
