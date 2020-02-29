export abstract class Event {
  protected name: string

  constructor() {}

  public getName(): string {
    return this.name
  }

  public abstract getData(): any
  abstract fire(): void
}
