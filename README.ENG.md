The Water-Tracker-APP project is a web application that allows users to track their daily water intake. The application has the following functional components: Home page, Water Journal, and Settings. The application is adapted for desktop, tablet, and mobile. The logic of private and public routes has been implemented.

[image](https://github.com/AndriiPolishchuk28/water-tracker-frontend/assets/136389095/00b6bf30-1cb7-4bb8-823c-a0673d3fc192)

Installation and Project Launch
To deploy this project locally, follow these steps:

Cloning the Repository
First, clone the repository to your local computer:

git clone https://github.com/AndriiPolishchuk28/water-tracker-frontend.git

Installing Dependencies
Go to the project directory and install the necessary dependencies:

cd water-tracker-frontend
npm install

Project Launch
Launch the project in developer mode:

npm start

This command will start a local development server and open the project in your browser.

Building for Production
If you want to build the project for production, use the command:

npm run build

This will create an optimized version of the project in the build folder.

Deployment
To deploy the project on GitHub Pages, you can use the command:

npm run deploy

Make sure that your package.json file specifies the correct homepage.

Additional Information
For more detailed information and other commands, please refer to the "scripts" section in the package.json file.


 ## Dependencies

Requires the following dependencies:

- `@emotion/react`: ^11.11.4
- `@emotion/styled`: ^11.11.5
- `@mui/material`: ^5.15.15
- `@reduxjs/toolkit`: ^2.2.3
- `@testing-library/jest-dom`: ^5.16.3
- `@testing-library/react`: ^12.1.4
- `@testing-library/user-event`: ^13.5.0
- `axios`: ^1.6.8
- `formik`: ^2.4.5
- `react`: ^18.1.0
- `react-dom`: ^18.2.0
- `react-helmet`: ^6.1.0
- `react-modal`: ^3.16.1
- `react-redux`: ^9.1.0
- `react-router-dom`: ^6.22.3
- `react-scripts`: 5.0.1
- `react-toastify`: ^10.0.5
- `reactjs-popup`: ^2.0.6
- `redux`: ^5.0.1
- `redux-persist`: ^6.0.0
- `styled-components`: ^6.1.8
- `styled-react-modal`: ^3.1.1
- `web-vitals`: ^2.1.3
- `yup`: ^1.4.0

To install these dependencies, run the following command in your project directory:

```sh
npm install


Scripts
The project defines the following scripts:

start: Launches the project in developer mode.
build: Creates an optimized version of the project for production.
test: Runs tests.
eject: Removes one-time configuration and scripts.
ESLint Configuration
The project uses ESLint to ensure code quality:

JSON

"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}

Browserslist
Defines supported browsers for development and production:

JSON

"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
Homepage
The project has a homepage available at:

https://AndriiPolishchuk28.github.io/water-tracker-frontend/


## Project Creators

This project was created thanks to the efforts of a talented team of developers. Each team member made a unique contribution to the development and design of the project.

- **AndriiPolishchuk28** - 
- **SerhiiOberemchuk** - 
- **IrynaYrrr** - 
- **acrcane** - 
- **OksanaDrobakha** -
- **andea13** -  
- **KoshJR ** - 
- **Ninylka ** - 
- **Krislv4nk** -


We would also like to thank the developer community for their advice and support in creating this project.