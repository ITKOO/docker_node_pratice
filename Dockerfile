FROM node:12.18.4

# dockerize 설치
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \  
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# app 폴더 생성
RUN mkdir -p /app

# 이동 
WORKDIR /app

ADD ./ /app

# 패키지 파일들 설치
RUN npm install

# 버전 설정
ENV NODE_ENV=development

# 실행
RUN chmod +x docker-entrypoint.sh  
ENTRYPOINT ./docker-entrypoint.sh