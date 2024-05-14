// Import the missing type or module here
import { log } from '@graphprotocol/graph-ts';
import { GreetingChange } from './generated/YourContract/YourContract';
import { GreetingEntity } from './generated/schema';

export function handleGreetingChange(event: GreetingChange): void {
  // Create a new entity for the greeting change event
  let entity = new GreetingEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString());

  // Set the properties of the entity based on the event parameters
  entity.setter = event.params.greetingSetter;
  entity.newGreeting = event.params.newGreeting;
  entity.premium = event.params.premium;
  entity.value = event.params.value;

  // Save the entity to the store
  entity.save();

  // Optionally, log the entity for debugging purposes
  log.info('GreetingEntity saved: {}', [entity.id]);
}
