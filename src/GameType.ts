export interface GameTypeVisitor<R> {
  onCasualType(): R;
  onRankedType(): R;
  onTournamentType(): R;
}

export interface GameType {
  asString(): string;
  accept<R>(visitor: GameTypeVisitor<R>): R;
}

export class CasualType implements GameType {
  asString() {
    return "Обычная";
  }

  accept<R>(visitor: GameTypeVisitor<R>): R {
    return visitor.onCasualType();
  }
}

export class RankedType implements GameType {
  asString() {
    return "Рейтинговая";
  }

  accept<R>(visitor: GameTypeVisitor<R>): R {
    return visitor.onRankedType();
  }
}

export class TournamentType implements GameType {
  asString() {
    return "Турнир";
  }

  accept<R>(visitor: GameTypeVisitor<R>): R {
    return visitor.onTournamentType();
  }
}
