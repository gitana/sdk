#!/bin/bash

# copy the config files to s3
aws s3 rm --recursive s3://gitana-fgt/config
aws s3 sync config s3://gitana-fgt/config
