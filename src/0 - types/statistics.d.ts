type Kills = number;
type Teamkills = number;
type Deaths = {
  total: number;
  byTeamkills: number;
};
type Score = number;
type Coefficient = number;

type WeekNumber = `${number}${number}${number}${number}-${number}${number}`; // 2022-35
type GlobalPlayerWeekStatistics = {
  week: WeekNumber; // 2022-35
  startDate: string;
  endDate: string;
  totalPlayedGames: number;
  kills: Kills;
  killsFromVehicle: Kills;
  vehicleKills: Kills;
  teamkills: Teamkills;
  deaths: Deaths;
  kdRatio: Score;
  killsFromVehicleCoef: Coefficient;
  score: Score;
};

type GlobalPlayerStatistics = {
  name: PlayerName;
  lastSquadPrefix: PlayerPrefix;
  totalPlayedGames: number;
  kills: Kills;
  killsFromVehicle: Kills;
  vehicleKills: Kills;
  teamkills: Teamkills;
  deaths: Deaths;
  kdRatio: Score;
  killsFromVehicleCoef: Coefficient;
  totalScore: Score;
  lastPlayedGameDate: string;
  byWeeks: GlobalPlayerWeekStatistics[];
  weapons: WeaponStatistic[];
  vehicles: WeaponStatistic[];
};

type GlobalPlayerWeekStatisticsWithoutDates = Omit<GlobalPlayerWeekStatistics, 'week' | 'startDate' | 'endDate'>;
type GlobalPlayerStatisticsWithoutDates = Omit<GlobalPlayerStatistics, 'lastPlayedGameDate' | 'byWeeks'> & {
  byWeeks: GlobalPlayerWeekStatisticsWithoutDates[];
};

type SimplifiedGlobalPlayerStatistics = Omit<GlobalPlayerStatistics, 'byWeeks' | 'weapons' | 'vehicles' | 'lastPlayedGameDate'>;

type PlayerGameResult = Omit<PlayerInfo, 'id' | 'side'>;

type GlobalSquadStatistics = {
  prefix: NonNullable<PlayerPrefix>;
  averagePlayersCount: number;
  kills: Kills;
  averageKills: number;
  teamkills: Teamkills;
  averageTeamkills: number;
  score: Score;
  players: SimplifiedGlobalPlayerStatistics[];
};

type StatisticsByRotation = {
  totalGames: number;
  startDate: string;
  endDate: string | null;
  stats: {
    global: GlobalPlayerStatistics[];
    squad: GlobalSquadStatistics[];
  }
};
