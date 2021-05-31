# 갬성카페

## 로컬 셋업 방법

### 네아로

* 네이버 개발자 센터에서 네아로 앱 가입 

### 데이터베이스

* MongoDB 4.0+ 버전

### .env

```text
# JWT 비밀값
JWT_SECRET="{비밀값}"
# 네아로 설정값
CLIENT_ID="{네아로 클라이언트 id}"
CALLBACK_URL="{네아로 콜백 url}"
SERVICE_URL="{네아로 서비스 url}"
# MongoDB 연결
MONGODB_HOST="{MongoDB 호스트 e.g. MONGODB_HOST="mongodb://test:test@localhost:27017"
```

### react-front/.env.development.local
```
# Flask Host
FLASK_HOST = {flask url e.g. FLASK_HOST='http://localhost:port/'}
```

### 파이썬 가상 환경

* python 가상 환경(3.8 버전+)

* 외부 패키지 설치

#### poetry

```shell
$ poetry install
```

#### pip

```shell
$ pip install -r requirements.txt
```

#### npm
```shell
$ npm install
```

## react 실행

```shell
$ npm start
```