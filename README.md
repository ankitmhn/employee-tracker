This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Running the demo

Make sure to install the dependencies using `yarn install` or `npm install`, then run the app using `yarn start` or `npm run start` command.

This demonstration uses the [Tailwind CSS](https://tailwindcss.com/) framework for styling of HTML elements. So in case the CSS needs to be rebuilt, it can be done using `yarn build:css` or `npm run build:css` command.

#### Viewing the redux events

Since the app uses [Redux Toolkit ](https://redux-toolkit.js.org/), the state changes and dispatched actions can be examined using Redux Dev Tools.

## Architecture

The data is mocked from app/data.json file.

The homepage shows the list of employers with their current total employees (Assumption: the last row in the employeeList is considered as the current employee strength)

## Incomplete/Unimplemented:

The protected routes for logged-in users were supposed to allow the employees for 1. adding their current employer, 2. quitting their current employer 3. Adding work duration for previous employers.
