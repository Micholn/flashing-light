import { BigInt } from '@graphprotocol/graph-ts';
import { YourContract, ExampleEntity } from '../generated/schema';
import { ExampleEvent } from '../generated/YourContract/YourContract';

export function handleExampleEvent(event: ExampleEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  entity.value = event.params.value;
  entity.save();
}
