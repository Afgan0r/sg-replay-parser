import { Dayjs } from 'dayjs';

import calculateKDRatio from '../../0 - utils/calculateKDRatio';
import calculateScore from '../../0 - utils/calculateScore';
import { defaultWeekStatistics } from '../consts';
import calculateDeaths from './utils/calculateDeaths';

const addPlayerGameResultToWeekStatistics = (
  globalWeekStatistics: GlobalPlayerWeekStatistics[],
  playerGameResult: PlayerGameResult,
  date: Dayjs,
): GlobalPlayerWeekStatistics[] => {
  const currentWeekStatistics = globalWeekStatistics.slice();

  const week = date.format('YYYY-WW') as GlobalPlayerWeekStatistics['week'];

  let currentStatisticsIndex = currentWeekStatistics.findIndex(
    (weekStatistics) => (weekStatistics.week === week),
  );

  if (currentStatisticsIndex === -1) {
    const startDate = date.startOf('isoWeek').toJSON();
    const endDate = date.endOf('isoWeek').toJSON();

    const newArrLength = currentWeekStatistics.push({
      week,
      startDate,
      endDate,
      ...defaultWeekStatistics,
    });

    currentStatisticsIndex = newArrLength - 1;
  }

  const weekStatistics = currentWeekStatistics[currentStatisticsIndex];

  const totalPlayedGames = weekStatistics.totalPlayedGames + 1;
  const kills = weekStatistics.kills + playerGameResult.kills;
  const vehicleKills = weekStatistics.vehicleKills + playerGameResult.vehicleKills;
  const teamkills = weekStatistics.teamkills + playerGameResult.teamkills;
  const currentDeaths: Deaths = {
    total: weekStatistics.deaths.total,
    byTeamkills: weekStatistics.deaths.byTeamkills,
  };

  const deaths = calculateDeaths({
    deaths: currentDeaths,
    isDead: playerGameResult.isDead,
    isDeadByTeamkill: playerGameResult.isDeadByTeamkill,
  });

  currentWeekStatistics[currentStatisticsIndex] = {
    ...currentWeekStatistics[currentStatisticsIndex],
    totalPlayedGames,
    kills,
    vehicleKills,
    teamkills,
    deaths,
    kdRatio: calculateKDRatio(kills, teamkills, deaths),
    score: calculateScore(totalPlayedGames, kills, teamkills, deaths),
  };

  return currentWeekStatistics;
};

export default addPlayerGameResultToWeekStatistics;
