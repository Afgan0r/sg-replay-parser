/* eslint-disable object-curly-newline */
import { Dayjs } from 'dayjs';

import generateDefaultWeapons from '../../../utils/generators/generateDefaultWeapons';
import generatePlayerInfo from '../../../utils/generators/generatePlayerInfo';

export const getReplays = (startDate: Dayjs): PlayersGameResult[] => ([
  {
    date: startDate.startOf('isoWeek').toISOString(),
    missionName: '',
    result: [
      generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', kills: 2 }),
      generatePlayerInfo({ id: 1, name: '[FNX]Flashback' }),
      generatePlayerInfo({ id: 2, name: '[FNX]Skywalker', kills: 3, teamkills: 1 }),
      generatePlayerInfo({ id: 4, name: '[FNX]Mecheniy' }),
      generatePlayerInfo({ id: 8, name: 'cursed', kills: 3 }),
    ],
  },
  {
    date: startDate.startOf('isoWeek').add(1, 'h').toISOString(),
    missionName: '',
    result: [
      generatePlayerInfo({ id: 0, name: '[FNX]Afgan0r', kills: 1 }),
      generatePlayerInfo({ id: 1, name: '[FNX]Flashback', kills: 2, teamkills: 1 }),
      generatePlayerInfo({ id: 2, name: '[FNX]Skywalker', teamkills: 1 }),
      generatePlayerInfo({ id: 4, name: '[FNX]Mecheniy', kills: 2 }),
      generatePlayerInfo({ id: 7, name: '[FNX]Puma', kills: 4, killsFromVehicle: 1 }),
    ],
  },
]);

export const shortGlobalStatistics: GlobalPlayerStatisticsWithoutDates[] = [
  {
    name: 'Puma',
    isShow: true,
    lastSquadPrefix: '[FNX]',
    totalPlayedGames: 1,
    kills: 4,
    killsFromVehicle: 1,
    vehicleKills: 0,
    teamkills: 0,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 4,
    killsFromVehicleCoef: 0.25,
    totalScore: 4,
    byWeeks: [
      {
        totalPlayedGames: 1,
        kills: 4,
        killsFromVehicle: 1,
        vehicleKills: 0,
        teamkills: 0,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 4,
        killsFromVehicleCoef: 0.25,
        score: 4,
      },
    ],
    weapons: generateDefaultWeapons(3),
    vehicles: generateDefaultWeapons(1, 'vehicle'),
  },
  {
    name: 'cursed',
    isShow: true,
    lastSquadPrefix: null,
    totalPlayedGames: 1,
    kills: 3,
    killsFromVehicle: 0,
    vehicleKills: 0,
    teamkills: 0,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 3,
    killsFromVehicleCoef: 0,
    totalScore: 3,
    byWeeks: [
      {
        totalPlayedGames: 1,
        kills: 3,
        killsFromVehicle: 0,
        vehicleKills: 0,
        teamkills: 0,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 3,
        killsFromVehicleCoef: 0,
        score: 3,
      },
    ],
    weapons: generateDefaultWeapons(3),
    vehicles: [],
  },
  {
    name: 'Afgan0r',
    isShow: true,
    lastSquadPrefix: '[FNX]',
    totalPlayedGames: 2,
    kills: 3,
    killsFromVehicle: 0,
    vehicleKills: 0,
    teamkills: 0,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 3,
    killsFromVehicleCoef: 0,
    totalScore: 1.5,
    byWeeks: [
      {
        totalPlayedGames: 2,
        kills: 3,
        killsFromVehicle: 0,
        vehicleKills: 0,
        teamkills: 0,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 3,
        killsFromVehicleCoef: 0,
        score: 1.5,
      },
    ],
    weapons: generateDefaultWeapons(3),
    vehicles: [],
  },
  {
    name: 'Mecheniy',
    isShow: true,
    lastSquadPrefix: '[FNX]',
    totalPlayedGames: 2,
    kills: 2,
    killsFromVehicle: 0,
    vehicleKills: 0,
    teamkills: 0,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 2,
    killsFromVehicleCoef: 0,
    totalScore: 1,
    byWeeks: [
      {
        totalPlayedGames: 2,
        kills: 2,
        killsFromVehicle: 0,
        vehicleKills: 0,
        teamkills: 0,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 2,
        killsFromVehicleCoef: 0,
        score: 1,
      },
    ],
    weapons: generateDefaultWeapons(2),
    vehicles: [],
  },
  {
    name: 'Skywalker',
    isShow: true,
    lastSquadPrefix: '[FNX]',
    totalPlayedGames: 2,
    kills: 3,
    killsFromVehicle: 0,
    vehicleKills: 0,
    teamkills: 2,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 1,
    killsFromVehicleCoef: 0,
    totalScore: 0.5,
    byWeeks: [
      {
        totalPlayedGames: 2,
        kills: 3,
        killsFromVehicle: 0,
        vehicleKills: 0,
        teamkills: 2,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 1,
        killsFromVehicleCoef: 0,
        score: 0.5,
      },
    ],
    weapons: generateDefaultWeapons(3),
    vehicles: [],
  },
  {
    name: 'Flashback',
    isShow: true,
    lastSquadPrefix: '[FNX]',
    totalPlayedGames: 2,
    kills: 2,
    killsFromVehicle: 0,
    vehicleKills: 0,
    teamkills: 1,
    deaths: { total: 0, byTeamkills: 0 },
    kdRatio: 1,
    killsFromVehicleCoef: 0,
    totalScore: 0.5,
    byWeeks: [
      {
        totalPlayedGames: 2,
        kills: 2,
        killsFromVehicle: 0,
        vehicleKills: 0,
        teamkills: 1,
        deaths: { total: 0, byTeamkills: 0 },
        kdRatio: 1,
        killsFromVehicleCoef: 0,
        score: 0.5,
      },
    ],
    weapons: generateDefaultWeapons(2),
    vehicles: [],
  },
];

export const shortSquadStatistics: GlobalSquadStatistics[] = [{
  prefix: '[FNX]',
  averagePlayersCount: 4.5,
  kills: 14,
  averageKills: 7,
  teamkills: 3,
  averageTeamkills: 0.21,
  score: 1.56,
  players: [
    {
      deaths: {
        byTeamkills: 0,
        total: 0,
      },
      kdRatio: 4,
      kills: 4,
      lastSquadPrefix: '[FNX]',
      name: 'Puma',
      teamkills: 0,
      totalPlayedGames: 1,
      totalScore: 4,
      vehicleKills: 0,
      killsFromVehicle: 1,
      killsFromVehicleCoef: 0.25,
    },
    {
      deaths: {
        byTeamkills: 0,
        total: 0,
      },
      kdRatio: 3,
      kills: 3,
      lastSquadPrefix: '[FNX]',
      name: 'Afgan0r',
      teamkills: 0,
      totalPlayedGames: 2,
      totalScore: 1.5,
      vehicleKills: 0,
      killsFromVehicle: 0,
      killsFromVehicleCoef: 0,
    },
    {
      deaths: {
        byTeamkills: 0,
        total: 0,
      },
      kdRatio: 2,
      kills: 2,
      lastSquadPrefix: '[FNX]',
      name: 'Mecheniy',
      teamkills: 0,
      totalPlayedGames: 2,
      totalScore: 1,
      vehicleKills: 0,
      killsFromVehicle: 0,
      killsFromVehicleCoef: 0,
    },
    {
      deaths: {
        byTeamkills: 0,
        total: 0,
      },
      kdRatio: 1,
      kills: 3,
      lastSquadPrefix: '[FNX]',
      name: 'Skywalker',
      teamkills: 2,
      totalPlayedGames: 2,
      totalScore: 0.5,
      vehicleKills: 0,
      killsFromVehicle: 0,
      killsFromVehicleCoef: 0,
    },
    {
      deaths: {
        byTeamkills: 0,
        total: 0,
      },
      kdRatio: 1,
      kills: 2,
      lastSquadPrefix: '[FNX]',
      name: 'Flashback',
      teamkills: 1,
      totalPlayedGames: 2,
      totalScore: 0.5,
      vehicleKills: 0,
      killsFromVehicle: 0,
      killsFromVehicleCoef: 0,
    },
  ],
}];