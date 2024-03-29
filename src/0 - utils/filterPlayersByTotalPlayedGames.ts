type Params = {
  statistics: GlobalPlayerStatistics[];
  gamesCount: number;
  type?: 'remove' | 'not show';
};

const filterPlayersByTotalPlayedGames = ({
  statistics,
  gamesCount,
  type,
}: Params) => {
  const minGamesCount = gamesCount < 125
    ? (15 * gamesCount) / 100 // 15%
    : 20;

  const condition = (count) => count >= minGamesCount;

  if (type === 'not show') {
    return statistics.map((stats) => (
      condition(stats.totalPlayedGames)
        ? { ...stats, isShow: true }
        : { ...stats, isShow: false }
    ));
  }

  return statistics.filter(
    (stats) => condition(stats.totalPlayedGames),
  );
};

export default filterPlayersByTotalPlayedGames;
