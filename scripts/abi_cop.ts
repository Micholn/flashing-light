import { createClient, ensureStorageExists, createSubgraph, getManifest, createMapping } from '@graphprotocol/graph-cli';
import { network } from 'hardhat';

async function deploySubgraph(): Promise<void> {
  try {
    // Set up connection to The Graph node
    const client = createClient(network.provider);

    // Deploy the subgraph
    const subgraphId = 'your/subgraph/id'; // Replace with the actual Subgraph ID
    await createSubgraph(client, subgraphId);

    // Ensure storage exists
    await ensureStorageExists(client, subgraphId);

    // Get the manifest file
    const manifest = await getManifest(client, subgraphId);

    // Create mappings
    await createMapping(client, subgraphId, manifest);

    console.log('Subgraph deployment completed successfully');
  } catch (error) {
    console.error('Error deploying subgraph:', error);
    process.exit(1);
  }
}

deploySubgraph();
