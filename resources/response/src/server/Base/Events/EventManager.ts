import { Event } from './Event'

export class EventManager {
  constructor() {}

  public fire(event: Event) {
    event.fire()
  }
}
