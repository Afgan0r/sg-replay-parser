type Output = {
  parsedReplays: string[];
  replays: Replay[];
  problematicReplays: Replay[];
};

type ConfigIncludeReplay = {
  name: string;
  gameType: GameType;
};

type ConfigExcludeReplays = ReplayLink[];
