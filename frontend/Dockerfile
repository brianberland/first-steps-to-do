FROM node:11

RUN mkdir /code
WORKDIR /code
ADD package.json /code/
RUN yarn install

CMD npm start