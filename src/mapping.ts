import { BigInt, Address } from '@graphprotocol/graph-ts';
import { GreetingChange } from './generated/YourContract/YourContract';
import { GreetingEntity } from './generated/schema';

export function handleGreetingChange(event: GreetingChange): void {
  let entity = new GreetingEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.setter = event.params.greetingSetter;
  entity.newGreeting = event.params.newGreeting;
  entity.premium = event.params.premium;
  entity.value = event.params.value;
  entity.save();
}
