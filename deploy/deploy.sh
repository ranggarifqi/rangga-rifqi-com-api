#!/bin/bash

# pull docker image
docker pull ranggarifqi/rangga-rifqi-com-api:latest

# run the docker image with env variables setup on a certain port
docker run -d -p 1337:1337 --env-file ./.env ranggarifqi/rangga-rifqi-com-api:latest