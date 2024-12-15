#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Get the folder of the script
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
echo "Script directory: $SCRIPT_DIR"

# Move up one level
cd "$SCRIPT_DIR/.."
echo "Moved up one level to: $(pwd)"

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
  echo "Docker does not seem to be running. Please start Docker and try again."
  exit 1
fi

# Check if packages were provided
if [ "$#" -eq 0 ]; then
  echo "No package names provided. Installing all dependencies from package.json."
  INSTALL_COMMAND="npm install"
else
  echo "Installing specific packages: $@"
  INSTALL_COMMAND="npm install $@"
fi

# Run 'npm install' for all dependencies or 'npm install <packages>' inside a Docker container
docker run --rm \
  -v "$(pwd):/project" \
  -w "/project" \
  node:latest \
  bash -c "$INSTALL_COMMAND"

echo "npm installation completed successfully inside the Docker container."
