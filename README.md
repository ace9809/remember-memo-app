# Remember Memo App

> Redux를 사용하여 개발한 라벨 기능이 있는 메모 앱 (에버노트 디자인 참조)

## Features

- 메모 추가 및 삭제
- 메모 자동 저장
- 메모에 라벨 지정
- 메모에 내용을 볼 수 있다.
- 라벨에 속한 메모를 볼 수 있다.
- 라벨 추가 및 삭제
- 라벨 이름 변경


## Library
  - react: react를 쓰기 위해 사용
  - react-dom: dom에 react를 보여주기 위해 사용
  - react-router-dom: 라우팅을 하기 위해 사용
  - react-app-polyfill: ie지원을 위해 사용
  - react-icons: 다양한 icon을 쓰기 위해 사용
  - react-modal: 모달을 쓰기 위해 사용
  - react-moment: 날짜 format을 위해 사용
  - redux: 많은 상태를 관리하기 위해 사용
  - react-redux: react에서 redux를 쉽게 쓰기 위해 위해 사용
  - redux-thunk: 비동기 처리를 위해 사용
  - axios: HTTP 요청을 하기 위해 사용
  - styled-components: 전반적인 스타일링을 하기 위해 사용
  - prop-types: props의 타입을 체크하기 위해 사용
  - lodash: debounce, clone, reverse를 쓰기 위해 사용

## 프로젝트 구조

- [구조](./STRUCTURE.md)

## Getting started(MongoDB가 설치되어 있어야 함)

#### API Setting

```bash
$ git clone https://github.com/dramancompany/memoapp-api.git <project-name>

$ cd <project-name>

$ npm install # package install

$ PORT=3000 npm start # server start
```

### Web project Setting

```bash
$ git clone https://github.com/ace9809/remember-memo-app.git <project-name>

$ cd <project-name>

$ npm install # package install

$ npm start # start app
```

## TODO (개선 사항)

- [ ] 테스트코드 작성
- [ ] 리듀서 리팩토링(리듀서를 좀 더 작게 분리)
- [ ] 메모 검색 기능
- [ ] 예외처리 강화
- [ ] 유연한 예외처리
- [ ] 반응형 웹, 디자인 수정
- [ ] 버그 수정(지속적)
- [ ] 환경 별로 host file 만들기
- [ ] NotFound 페이지 만들기
- [ ] ie 완벽 대응

