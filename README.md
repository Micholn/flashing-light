# Subgraph Deployment Script Documentation

## Introduction

This documentation provides an overview and usage guide for the Subgraph Deployment Script. The script automates the deployment process of a subgraph to The Graph network.

## Prerequisites

Before using the script, ensure the following prerequisites are met:

1. **Node.js and npm/yarn**: Make sure Node.js and either npm or yarn are installed on your machine.

2. **Hardhat Setup**: Ensure you have set up Hardhat and initialized your project for Ethereum development.

3. **Graph CLI**: Install the Graph CLI globally using npm or yarn:

   ```bash
   npm install -g @graphprotocol/graph-cli
   ```

   or

   ```bash
   yarn global add @graphprotocol/graph-cli
   ```

## Usage

1. **Subgraph ID**: Replace the placeholder `'your/subgraph/id'` in the script with the actual Subgraph ID of your project.

2. **Deployment**: Run the script using the following command:

   ```bash
   node deploy-subgraph.js
   ```

   The script will deploy the subgraph, ensure storage exists, retrieve the manifest file, create mappings, and log a success message upon completion.

## Script Overview

The deployment script performs the following steps:

1. **Connection Setup**: Establishes a connection to The Graph node using the Hardhat network provider.

2. **Subgraph Deployment**: Deploys the subgraph to The Graph network.

3. **Storage Check**: Ensures that storage exists for the deployed subgraph.

4. **Manifest Retrieval**: Retrieves the manifest file of the deployed subgraph.

5. **Mapping Creation**: Generates mappings for the subgraph based on the retrieved manifest.

6. **Logging**: Logs a success message upon successful completion of the deployment process.

## Error Handling

The script includes error handling to catch and log any errors that occur during the deployment process. If an error is encountered, the script exits with a non-zero status code.

## Conclusion

The Subgraph Deployment Script simplifies the process of deploying a subgraph to The Graph network. By automating deployment steps, it streamlines the development workflow and facilitates efficient interaction with The Graph ecosystem.