import { SubgraphDeploymentID, Provider } from '@graphprotocol/common-ts';
import { createClient, query, ensureStorageExists, createSubgraph, getManifest, createMapping } from '@graphprotocol/graph-cli';
import { expect } from 'chai';
import { describe, it, before } from 'mocha';

describe('Subgraph Tests', () => {
  let client: Provider;

  before(async () => {
    // Set up connection to The Graph node
    client = createClient(network.provider);
    
    // Deploy the subgraph
    const subgraphId = SubgraphDeploymentID.from('/subgraph/id');
    await createSubgraph(client, subgraphId);
    
    // Ensure storage exists
    await ensureStorageExists(client, subgraphId);
    
    // Get the manifest file
    const manifest = await getManifest(client, subgraphId);
    
    // Create mappings
    await createMapping(client, subgraphId, manifest);
  });

  it('should query the subgraph for greetings and return expected results', async () => {
    // Execute a query against the subgraph
    const result = await query(client, `
      {
        greetings {
          id
          message
        }
      }
    `);

    // Assert the expected results
    expect(result).to.deep.equal({
      data: {
        greetings: [
          {
            id: '1',
            message: 'Hello World!'
          },
          // Add more expected results as needed
        ]
      }
    });
  });

  it('should query the subgraph for specific greeting by ID and return expected result', async () => {
    // Execute a query against the subgraph with a specific ID
    const result = await query(client, `
      {
        greeting(id: "1") {
          id
          message
        }
      }
    `);

    // Assert the expected result
    expect(result).to.deep.equal({
      data: {
        greeting: {
          id: '1',
          message: 'Hello World!'
        }
      }
    });
  });

});
