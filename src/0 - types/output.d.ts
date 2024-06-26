type Statistics = {
  global: GlobalPlayerStatistics[];
  squad: GlobalSquadStatistics[];
  squadFull: GlobalSquadStatistics[];
  byRotations: StatisticsByRotation[] | null;
};

type FolderName = GameType;

type StatisticsForOutput = Record<FolderName, Statistics>;

type GeneralRotationInfo = Omit<StatisticsByRotation, 'stats'>;

type OutputGlobalStatistics = Omit<GlobalPlayerStatistics, 'byWeeks' | 'weapons' | 'vehicles'>;
