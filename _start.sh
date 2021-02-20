#!/usr/bin/bash

NODE_ENV=production pm2 start process.yml && tail -f /dev/null