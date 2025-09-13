# 도커 이미지에서 node 환경 설정
FROM node:alpine

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 파일 복사
COPY . .

# 의존성 설치
RUN npm install

# 빌드
RUN npm run build

# 포트 노출
EXPOSE 3000

# 앱 실행
CMD [ "npm", "start" ]