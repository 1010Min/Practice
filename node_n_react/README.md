<h1 style="font-weight: bold">node_n_react</h1> 

<h2>프로젝트 소개</h2>
간단한 로그인, 로그아웃, 회원가입 화면 구현

---
**Node.js**
* Mongoose란 Object Modeling Tool를 사용해 MongoDB 연동 및 사용
* POST MAN을 사용해 Client-Server 통신 확인
* Node Mon이란 툴을 사용해 소스 변경사항을 감지해 자동으로 서버 새로고침
* Bcrypt를 사용해 비밀번호를 암호화하여 DB에 저장
* jsonwebtoken 라이브러리를 사용해 토큰을 생성해 로그인 관리

---
**React.js**
* concurrently 툴을 사용해 ```npm run dev``` 명령어를 작성 -> 프론트, 백 서버 한번에 실행
* Redux를 통해 상태 관리

<br>
  
<h2>디렉터리 구조</h2> 

```
D:.
|   .gitignore 
|   package-lock.json
|   package.json
|   README.md
|   
+---client
|   |   .gitignore
|   |   package-lock.json
|   |   package.json
|   |   
|   +---node_modules
|   +---public
|   |       favicon.ico
|   |       index.html
|   |       logo192.png
|   |       logo512.png
|   |       manifest.json
|   |       robots.txt
|   |       
|   \---src
|       |   App.css
|       |   App.js
|       |   Config.js
|       |   index.css
|       |   index.js
|       |   README.md
|       |   reportWebVitals.js
|       |   setupProxy.js
|       |   setupTests.js
|       |   
|       +---components
|       |   \---views
|       |       +---Footer
|       |       |       Footer.js
|       |       |       
|       |       +---LandingPage
|       |       |       LandingPage.js
|       |       |       
|       |       +---LoginPage
|       |       |       LoginPage.js
|       |       |       
|       |       +---NavBar
|       |       |       NavBar.js
|       |       |       
|       |       \---RegisterPage
|       |               RegisterPage.js
|       |               
|       +---hoc
|       |       auth.js
|       |       
|       +---utils
|       +---_actions
|       |       types.js
|       |       user_actions.js
|       |       
|       \---_reducers
|               index.js
|               user_reducer.js
| 
+---node_modules
\---server
    |   index.js
    |   
    +---config
    |       dev.js
    |       key.js
    |       prod.js
    |       
    +---middleware
    |       auth.js
    |       
    \---models
            User.js
```

<br>

* ~~현재 Auth 기능이 제대로 실행되지 X -> App.js에서 Auth() 적용 X~~  