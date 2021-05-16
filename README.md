# docker_node_pratice

<b>✔️ 실행방법 정리글</b>
* https://www.notion.so/Aegis-378016ecd0014b89b86ab5bd012d120d


### 1) Docker를 사용한 실행방법

아래 명령어를 입력한 후 실행완료 시 http://localhost:3000/ 에 접속합니다.

```
docker-compose up
``` 

### 2) 로컬에서 node가 설치된 환경에서의 실행방법 

**/config/config.json** 파일에서 **development** 부분을 개인의 DB환경에 맞게 수정 후
```
"development": {
  "username": "", // 계정명
  "password": "", // 비밀번호
  "database": "", // DB명
  "host": "", // 주소 
  "dialect": "mysql"
},
```

아래 명령어를 입력 후 실행완료 시 http://localhost:3000/ 에 접속합니다.

```
node app.js
```
<br>

### 3) 실행화면
<img width="371" alt="스크린샷 2021-04-02 오전 4 34 38" src="https://user-images.githubusercontent.com/31758135/113344976-c709ee80-936c-11eb-9acd-2967c32e4694.png">
