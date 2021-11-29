<h1><b style="font-weight: bold;">node_n_react 디렉터리 구조</h1> 

```
D:.
|   .gitignore 
|   package-lock.json
|   package.json
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