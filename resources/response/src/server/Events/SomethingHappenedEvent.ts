import { ClientEvent } from '../Base/Events/Event/ClientEvent'

export class SomethingHappenedEvent extends ClientEvent {
  protected name: string = 'something_happened'

  public getData() {
    return { this: true }
  }
}
