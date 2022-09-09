# Mini Project for Front-end

김태원, 권준석, 박주희, 정상기

## Index

1. [Set up](#how-to-set-up-this-project)
2. [Cautions](#cautions-before-you-start-this-project)
3. [Goals](#goals)
4. [TODO list](#todo-list)

## How to set up this project

vs code extension 에서 eslint 와 prettier 을 설치할것!!

```
npm install
npm start
```

## Cautions before you start this project

- 모든 작업은 src/ 폴더 아래에서 할것: _npm start_ 하면 src/index.ts 를 src/index.html에 알아서 연결해준다
- Script 파일의 root 는 src/index.ts 이므로, script 파일을 사용하기 위해선 반드시 src/index.ts 에 **import** 할것
- CDN link 는 사용하지 말고 반드시 npmjs 사이트에서 찾아 install 할것
- Script 파일은 dist/index.html에 Webpack 이 알아서 넣어주므로 src/index.html 에 script 파일을 넣지 말것
- Fetch API 를 쓸것
- 현재는 Single page 를 기반으로 Webpack을 설정했다: 멀티 페이지를 생각하고 있다면 [여기](https://webpack.kr/concepts/entry-points/#multi-page-application)를 참조해보자

## Goals

- ES6 문법을 준수할것
- Eslint, TypeScript, Bundler 의 장점들을 최대한 살릴것
- 비동기 처리에 대해 학습할것 (async - await)
- Module 단위로 코딩할 것
- Clean Code, Refactoring 에 대해 인지할 것

## TODO list

1. 관통 프로젝트의 코드를 여기로 옮겨보자 (Bootstrap 가능)
2. 공지사항 게시판을 만들어보자 (data/posts.json을 만들것)
