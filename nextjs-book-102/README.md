# React, NextJS 를 이용한 Naver openAPI 연결

- `React` 기본적으로 Front-End 개발도구
- `Server` 와 연동되는 애플리케이션을 만드는데 많은 제약
- DB 서버와 연동하여 프로젝트를 수행하는데 있어서 반드시 `Back-end` 서버가 중간에 있어야만 수행을 할 수 있다.
- `React v18` 에서 실험적으로 자체 `Back-end` 을 만들고 있다.
- 일반 개발자가 React 에서 Back-end 기능을 사용하기에는 많은 어려움이 있다.
- `NextJS`를 포함한 프로젝트에서는 개발자가 `Back-End` 기능을 어느정도 수행할 수 있도록 안정화 단계에 접어들었다.
- `NextJS v13` 에서 본격적으로 `Back-End` 기능이 도입되었고, `NextJS v14`버전에서는 약간의 버그가 있기는 하지만 안정화 단계에 접어 들고 있다.
- 현재 google 등을 통하여 접하게 되는 대부분의 코드는 v13의 코드이다.
- v14에서는 상당부분 v13 코드를 버리고 새롭게 작성된 코드가 사용된다.

## NextJS 를 이용한 Front-End Back-End 겸용 프로젝트

- `NextJS` 에서는 비교적 쉽게, 다른 프로그램을 구현할 수 있음
- `컴포넌트`, `layout.js`, `page.js` 등에서 API를 fetch 하는 함수를 자유롭게 작성하고 컴포넌트 main 코드에서 fetch 한 데이터(배열 등)을 component 로 변환하여 화면에 그려줄 수 있다.
- `기본 React` 에서는 `useEffect()` , `useState()` 등을 사용하여 데이터를 fetch 하고, state에 값을 등록하여 화면을 그리는 코드를 사용했지만 `nextJS` 에서는 직접 서버에 데이터를 요청(fetch) 하고 응답받은 데이터를 바로 component로 변환하여 사용할 수 있게 되었다.

## `.env` 환경설정 파일 사용하기

- 프로젝트 폴더에 `.env` 파일을 생성한다.
- 윈도우 운영체제에서는 `점(dot)` 으로 시작되는 파일을 공식적으로 만들 수 없다. 단 최근 운영체제와 최신 vsCODE 에선 가능
- 가장 쉽게 만드는 방법은 `git bash shell` 에서 `touch .env` 명령으로 작성
- 여기에는 DB연결 비밀번호 등이 포함될 수 있으므로 `.gitignore` 에 등록하여 `github` 등 공식 public 사이트에 올리지 않도록 주의

## naver 연동 Key 등록

- `.env` 환경설정 파일에 저장한 후 프로젝트 진행

```.env
NAVER_CLIENT_ID = ""
NAVER_CLIENT_SECRET= ""
```
