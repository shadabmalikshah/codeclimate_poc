#!/bin/bash
# qlty.sh - Run static code analysis and code coverage
npx nyc --check-coverage --lines 80 --branches 80 --functions 80 --statements 80 mocha
