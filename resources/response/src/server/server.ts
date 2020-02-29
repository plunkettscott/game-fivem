import { event } from './Base/helpers'
import { SomethingHappenedEvent } from './Events/SomethingHappenedEvent'

event(new SomethingHappenedEvent())
