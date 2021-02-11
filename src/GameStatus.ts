export interface GameStatusVisitor<R> {
  onWaitingForPlayers(): R;
  onGameInProgress(): R;
}

export interface GameStatus {
  asString(): string;
  accept<R>(visitor: GameStatusVisitor<R>): R;
}

export class WaitingForPlayers implements GameStatus {
  asString() {
    return "Набор стола";
  }

  accept<R>(visitor: GameStatusVisitor<R>): R {
    return visitor.onWaitingForPlayers();
  }
}

export class GameInProgress implements GameStatus {
  asString() {
    return "Идет игра";
  }

  accept<R>(visitor: GameStatusVisitor<R>): R {
    return visitor.onGameInProgress();
  }
}
