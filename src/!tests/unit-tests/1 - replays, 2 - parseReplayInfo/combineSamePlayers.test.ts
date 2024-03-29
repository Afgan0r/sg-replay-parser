import combineSamePlayersInfo from '../../../2 - parseReplayInfo/combineSamePlayersInfo';
import {
  defaultDistance,
  defaultKilledName,
  defaultKillerName,
  defaultTeamkilledName,
  defaultTeamkillerName,
  defaultWeapon,
} from '../../utils/consts';
import generatePlayerInfo from '../../utils/generators/generatePlayerInfo';
import getDefaultTestDescription from '../../utils/getDefaultTestDescription';

const playersInfo: PlayerInfo[] = [
  generatePlayerInfo({
    id: 0,
    name: '[FNX]Afgan0r',
    kills: 2,
    killsFromVehicle: 1,
    teamkills: 1,
    vehicles: [{ kills: 1, name: 'BTR-80', maxDistance: 100 }],
  }),
  generatePlayerInfo({
    id: 1, name: '[FNX]Afgan0r', teamkills: 1, isDead: true,
  }),
  generatePlayerInfo({
    id: 2,
    name: '[FNX]Afgan0r',
    killsFromVehicle: 2,
    isDead: true,
    isDeadByTeamkill: true,
    vehicles: [{ kills: 2, name: 'BTR-80A', maxDistance: 200 }],
  }),
  generatePlayerInfo({ id: 3, name: '[FNX]LOXDOR', kills: 2 }),
];

const expectedResult: PlayerInfo[] = [
  generatePlayerInfo({
    id: 2,
    name: '[FNX]Afgan0r',
    kills: 4,
    killsFromVehicle: 3,
    teamkills: 2,
    isDead: true,
    isDeadByTeamkill: true,
    weapons: [{ kills: 1, name: defaultWeapon, maxDistance: defaultDistance }],
    vehicles: [
      { kills: 1, name: 'BTR-80', maxDistance: 100 },
      { kills: 2, name: 'BTR-80A', maxDistance: 200 },
    ],
    killed: [{ id: defaultKilledName, name: defaultKilledName, count: 4 }],
    killers: [{ id: defaultKillerName, name: defaultKillerName, count: 1 }],
    teamkilled: [{ id: defaultTeamkilledName, name: defaultTeamkilledName, count: 2 }],
    teamkillers: [{ id: defaultTeamkillerName, name: defaultTeamkillerName, count: 1 }],
  }),
  playersInfo[3],
];

test(getDefaultTestDescription('combineSamePlayersInfo'), () => {
  expect(combineSamePlayersInfo(playersInfo)).toMatchObject(expectedResult);
});
