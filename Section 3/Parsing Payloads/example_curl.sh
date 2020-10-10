#!/bin/bash -x


curl -X POST -H "Content-Type: text/plain" --data "this is raw data" http://vroutersystem.com:3000
# curl -D- -d "value1=working" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://vroutersystem.com:3000
