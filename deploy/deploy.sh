#!/bin/bash

# pull docker image
docker pull ranggarifqi/rangga-rifqi-com-api:latest

docker stop rangga_rifqi_com_api
docker rm rangga_rifqi_com_api

# run the docker image with env variables setup on a certain port
docker run -d -p 1337:1337 --env-file ./.env --name rangga_rifqi_com_api ranggarifqi/rangga-rifqi-com-api:latest