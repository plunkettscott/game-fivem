import { Event } from './Event'
import { Player } from 'fivem-js'

export abstract class ClientEvent extends Event {
  /**
   * The Client that should receive the event.
   */
  private player?: Player

  constructor(player?: Player) {
    super()

    this.player = player
  }

  /**
   * Returns the Player or -1 for all.
   */
  public getPlayer(): Player | null {
    return this.player
  }

  /**
   * Emits the event.
   */
  fire(): void {
    emitNet(
      this.getName(),
      this.getPlayer() ? this.getPlayer().Handle : -1,
      this.getData()
    )
  }
}
