FROM node:12.18.4

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
CMD ["node", "app.js"]