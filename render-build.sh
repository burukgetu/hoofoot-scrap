#!/usr/bin/env bash

# Update and install required dependencies
apt-get update && apt-get install -y \
  libgstreamer-gl1.0-0 \
  libgstreamer-plugins-bad1.0-0 \
  libenchant-2-2 \
  libsecret-1-0 \
  gir1.2-manette-0.2 \
  libgles2-mesa \
  --no-install-recommends

# Clean up to reduce image size
apt-get clean && rm -rf /var/lib/apt/lists/*