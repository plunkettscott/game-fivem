import { Event } from './Events/Event/Event'
import { Events } from '../Services'

export function event(event: Event): void {
  Events.fire(event)
}
