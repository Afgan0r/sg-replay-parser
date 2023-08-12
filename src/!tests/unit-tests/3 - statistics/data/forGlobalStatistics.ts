/* eslint-disable object-curly-newline */
import { defaultKilledName, defaultKillerName, defaultTeamkilledName, defaultTeamkillerName } from '../../../utils/consts';
import generateDefaultWeapons from '../../../utils/generators/generateDefaultWeapons';
import generatePlayerInfo from '../../../utils/generators/generatePlayerInfo';

type TestData = {
  playersGameResult: PlayersGameResult[];
  globalStatistics: GlobalPlayerStatistics[];
};

const data: TestData = {
  playersGameResult: [
    {
      date: '2022-08-05T18:00:00.000Z',
      missionName: '',
      result: [
        generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', side: 'GUER', killsFromVehicle: 2, isDead: true, killers: [{ id: 'something', name: 'Something', count: 1 }] }),
        generatePlayerInfo({ id: 1, name: '[FNX]Skywalker', side: 'EAST', killsFromVehicle: 3, teamkills: 1 }),
        generatePlayerInfo({ id: 2, name: '[FNX]Loxdor', side: 'EAST', kills: 4, vehicleKills: 1, isDead: true }),
        generatePlayerInfo({ id: 3, name: 'Something', side: 'EAST', kills: 1, isDead: true, killed: [{ id: 'afgan0r', name: 'Afgan0r', count: 1 }] }),
      ],
    },
    {
      date: '2022-08-05T20:00:00.000Z',
      missionName: '',
      result: [
        generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', side: 'EAST' }),
        generatePlayerInfo({ id: 1, name: '[FNX]Loxdor', side: 'EAST', kills: 7, vehicleKills: 2 }),
      ],
    },
    {
      date: '2022-08-12T18:00:00.000Z',
      missionName: '',
      result: [
        generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', side: 'EAST', kills: 3, teamkills: 1, isDead: true }),
        generatePlayerInfo({ id: 1, name: '[FNX]Skywalker', side: 'EAST', kills: 1, isDead: true }),
        generatePlayerInfo({ id: 3, name: 'Something', side: 'EAST', isDead: true, isDeadByTeamkill: true }),
      ],
    },
    {
      date: '2022-08-12T20:00:00.000Z',
      missionName: '',
      result: [
        generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', side: 'EAST', isDead: true, isDeadByTeamkill: true }),
        generatePlayerInfo({ id: 1, name: '[FNX]Skywalker', side: 'EAST', teamkills: 2 }),
        generatePlayerInfo({ id: 3, name: 'Something', side: 'EAST', kills: 5, teamkills: 1, isDead: true }),
      ],
    },
  ],
  globalStatistics: [
    {
      id: 'loxdor',
      name: 'Loxdor',
      isShow: true,
      lastSquadPrefix: '[FNX]',
      totalPlayedGames: 2,
      kills: 11,
      killsFromVehicle: 0,
      vehicleKills: 3,
      teamkills: 0,
      deaths: { total: 1, byTeamkills: 0 },
      kdRatio: 11,
      killsFromVehicleCoef: 0,
      totalScore: 5.5,
      lastPlayedGameDate: '2022-08-05T20:00:00.000Z',
      byWeeks: [
        {
          week: '2022-31',
          startDate: '2022-08-01T00:00:00.000Z',
          endDate: '2022-08-07T23:59:59.999Z',
          totalPlayedGames: 2,
          kills: 11,
          killsFromVehicle: 0,
          vehicleKills: 3,
          teamkills: 0,
          deaths: { total: 1, byTeamkills: 0 },
          kdRatio: 11,
          killsFromVehicleCoef: 0,
          score: 5.5,
        },
      ],
      weapons: generateDefaultWeapons(11),
      vehicles: [],
      killed: [{ id: defaultKilledName, name: defaultKilledName, count: 11 }],
      killers: [{ id: defaultKillerName, name: defaultKillerName, count: 1 }],
      teamkilled: [],
      teamkillers: [],
    },
    {
      id: 'something',
      name: 'Something',
      isShow: true,
      lastSquadPrefix: null,
      totalPlayedGames: 3,
      kills: 6,
      killsFromVehicle: 0,
      vehicleKills: 0,
      teamkills: 1,
      deaths: { total: 3, byTeamkills: 1 },
      kdRatio: 2.5,
      killsFromVehicleCoef: 0,
      totalScore: 2.5,
      lastPlayedGameDate: '2022-08-12T20:00:00.000Z',
      byWeeks: [
        {
          week: '2022-32',
          startDate: '2022-08-08T00:00:00.000Z',
          endDate: '2022-08-14T23:59:59.999Z',
          totalPlayedGames: 2,
          kills: 5,
          killsFromVehicle: 0,
          vehicleKills: 0,
          teamkills: 1,
          deaths: { total: 2, byTeamkills: 1 },
          kdRatio: 4,
          killsFromVehicleCoef: 0,
          score: 4,
        },
        {
          week: '2022-31',
          startDate: '2022-08-01T00:00:00.000Z',
          endDate: '2022-08-07T23:59:59.999Z',
          totalPlayedGames: 1,
          kills: 1,
          killsFromVehicle: 0,
          vehicleKills: 0,
          teamkills: 0,
          deaths: { total: 1, byTeamkills: 0 },
          kdRatio: 1,
          killsFromVehicleCoef: 0,
          score: 1,
        },
      ],
      weapons: generateDefaultWeapons(6),
      vehicles: [],
      killed: [
        { id: defaultKilledName, name: defaultKilledName, count: 5 },
        { id: 'afgan0r', name: '[FNX]Afgan0r', count: 1 },
      ],
      killers: [{ id: defaultKillerName, name: defaultKillerName, count: 2 }],
      teamkilled: [{ id: defaultTeamkilledName, name: defaultTeamkilledName, count: 1 }],
      teamkillers: [{ id: defaultTeamkillerName, name: defaultTeamkillerName, count: 1 }],
    },
    {
      id: 'afgan0r',
      name: 'Afgan0r',
      isShow: true,
      lastSquadPrefix: '[FNX]',
      totalPlayedGames: 4,
      kills: 5,
      killsFromVehicle: 2,
      vehicleKills: 0,
      teamkills: 1,
      deaths: { total: 3, byTeamkills: 1 },
      kdRatio: 2,
      killsFromVehicleCoef: 0.4,
      totalScore: 1.33,
      lastPlayedGameDate: '2022-08-12T20:00:00.000Z',
      byWeeks: [
        {
          week: '2022-32',
          startDate: '2022-08-08T00:00:00.000Z',
          endDate: '2022-08-14T23:59:59.999Z',
          totalPlayedGames: 2,
          killsFromVehicle: 0,
          kills: 3,
          vehicleKills: 0,
          teamkills: 1,
          deaths: { total: 2, byTeamkills: 1 },
          kdRatio: 2,
          killsFromVehicleCoef: 0,
          score: 2,
        },
        {
          week: '2022-31',
          startDate: '2022-08-01T00:00:00.000Z',
          endDate: '2022-08-07T23:59:59.999Z',
          totalPlayedGames: 2,
          kills: 2,
          killsFromVehicle: 2,
          vehicleKills: 0,
          teamkills: 0,
          deaths: { total: 1, byTeamkills: 0 },
          kdRatio: 2,
          killsFromVehicleCoef: 1,
          score: 1,
        },
      ],
      weapons: generateDefaultWeapons(3),
      vehicles: generateDefaultWeapons(2, 'vehicle'),
      killed: [{ id: defaultKilledName, name: defaultKilledName, count: 5 }],
      killers: [
        { id: 'something', name: 'Something', count: 1 },
        { id: defaultKillerName, name: defaultKillerName, count: 1 },
      ],
      teamkilled: [{ id: defaultTeamkilledName, name: defaultTeamkilledName, count: 1 }],
      teamkillers: [{ id: defaultTeamkillerName, name: defaultTeamkillerName, count: 1 }],
    },
    {
      id: 'skywalker',
      name: 'Skywalker',
      isShow: true,
      lastSquadPrefix: '[FNX]',
      totalPlayedGames: 3,
      kills: 4,
      killsFromVehicle: 3,
      vehicleKills: 0,
      teamkills: 3,
      deaths: { total: 1, byTeamkills: 0 },
      kdRatio: 1,
      killsFromVehicleCoef: 0.75,
      totalScore: 0.33,
      lastPlayedGameDate: '2022-08-12T20:00:00.000Z',
      byWeeks: [
        {
          week: '2022-32',
          startDate: '2022-08-08T00:00:00.000Z',
          endDate: '2022-08-14T23:59:59.999Z',
          totalPlayedGames: 2,
          kills: 1,
          killsFromVehicle: 0,
          vehicleKills: 0,
          teamkills: 2,
          deaths: { total: 1, byTeamkills: 0 },
          kdRatio: -1,
          killsFromVehicleCoef: 0,
          score: -0.5,
        },
        {
          week: '2022-31',
          startDate: '2022-08-01T00:00:00.000Z',
          endDate: '2022-08-07T23:59:59.999Z',
          totalPlayedGames: 1,
          kills: 3,
          killsFromVehicle: 3,
          vehicleKills: 0,
          teamkills: 1,
          deaths: { total: 0, byTeamkills: 0 },
          kdRatio: 2,
          killsFromVehicleCoef: 1,
          score: 2,
        },
      ],
      weapons: generateDefaultWeapons(1),
      vehicles: generateDefaultWeapons(3, 'vehicle'),
      killed: [{ id: defaultKilledName, name: defaultKilledName, count: 4 }],
      killers: [{ id: defaultKillerName, name: defaultKillerName, count: 1 }],
      teamkilled: [{ id: defaultTeamkilledName, name: defaultTeamkilledName, count: 3 }],
      teamkillers: [],
    },
  ],
};

export default data;
