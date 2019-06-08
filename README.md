## STEPS

First of all i've initialize this project with [Create React App].

## LAUNCH PROJECT

I use yarn to start, build and intall my project, you can also use npm.
Here is the commands:

### `yarn install` OR `npm install` - install project dependancies

### `yarn build` OR `npm run build` - build the project

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start` OR `npm start` - start the project

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## PROJECT ORGANISATION

In `src/` folder:

-   `component/`
    For this project, i've used 4 components: Button, Loader, MainBar and TileList.
    Button and loader components are from another project i work on whereas i've created MainBar and TileList components for the project.
    For each one of those components, there is 3 files : one for the js code `*.jsx`, one for the style `*.scss` and the last one is for making easier component import `*.js`

-   `data/`
    Data folder contain the data files given for this project `*.json`

-   `router/`
    Router folder contain the Router component and the component that provide an async loading of the scenes (will see those later)

-   `scene/`
    Scene folder contain the Home page which is the main page.
    It's on this page `*.jsx` that all the components are used, there is as well a style page `*.sccs` and an HOC `enhance*.js`
    On this folder, there is also a Loading page which is used async on the AsyncPageLoading page in case of there is Time Out or Error issues.

-   `services/`
    Services folder contain 2 services:
    -   `history` : Used to navigate on the pages and manage sessions. (More details: https://www.npmjs.com/package/history )
    -   `logger`: Used to all the logs in the project

For this project, i've used React and his ecosystem. (like Redux: https://www.npmjs.com/package/react-redux )

-   Material-ui components : https://www.npmjs.com/package/@material-ui/core

-   The clock widget : `react-clock` : https://www.npmjs.com/package/react-clock
    and i've make it draggable with `react-draggable` : https://www.npmjs.com/package/react-draggable

-   For the graphs, after a lot of research, i've chosen a single package `react-chartkick` : https://www.npmjs.com/package/react-chartkick
