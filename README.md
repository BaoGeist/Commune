## Getting Started

### Pre-requisites

The following are required to be installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [ngrok](https://ngrok.com/download)

### Frontend Installation

1. Clone the repository

2. Install dependencies in the overall directory

```
npm install
```

3. Navigate into the frontend/Commune

```
cd frontend/Commune
```

4. Install dependencies specific to the frontend directory (probably bad practice to have two npm's lol)

```
npm install
```

5. Run the expo application

```
npx expo start
```

6. Run the expo application on your device. Download the Expo Go application on your device (should work on both Android and Apple)

### Backend Installation

1. Assuming you've already done Step 1 and 2 of the Frontend Installation

2. Add needed Firebase environment variables to .env in the overall directory.

3. Run npm start from the root directory, and you should have a working backend.

```
npm start
```

4. For the frontend to be able to connect to the backend, you need to expose the localhost:3000 port of the backend on a reverse proxy. This can be done with the below command in root. 

```
ngrok http 3000
```

5. Ngrok should have created a reverse proxy; take the http provided by ngrok and paste it a .env in the frontend/Commune directory

6. Run the expo application on your device. Download the Expo Go application on your device (should work on both Android and Apple)

### Branch and Commit Message Convention

**Branch**

Ensure that all your branches are named according to the following convention:

- `feature/<feature-name>` for new features
- `bugfix/<bug-name>` for bug fixes
- `improvement/<improvement-name>` for improvements

Ensure that the name of your branch is descriptive of the feature/bug/improvement/chore that you are working on, and is written in `kebab-case`.

Examples:

- `feature/add-login-page`
- `bugfix/fix-login-page`
- `improvement/update-login-page`

**Commit Message**

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Ensure that all your commit messages are written according to the following convention:

```
<type>: <description>
```

Where `type` is one of the following:

- `feat` for new features
- `fix` for bug fixes

Examples:

- `feat: add confirm password field`
- `fix: submit button not working`

### Development

#### Folder Structure

The following is the folder structure of the project:

```
.
├── .github
├── .husky
├── node_modules
├── public
├── backend
├── frontend/Commune
│   ├── .expo
│   ├── assets
│   ├── components
│   ├── node_modules
│   ├── pages
│   ├── App.js
```

The most important folders are:

- `node_modules` contains all the dependencies of the project. This folder is automatically generated when you run `npm install`, and should not be manually edited.
- `frontend/Commune/` contains all the source code of the project
  - `.expo` contains the files needed to run expo. Should not be manually edited
  - `assets` contains all the static assets of the project. This includes images, fonts, etc.
  - `components` contains all the components of the project. These include any component that is used more than once in the project.
  - `node_modules`contains all the dependencies of the frontend application.
  - `pages` contains all the pages of the project.
  - `App.js` contains the entry into the app.

## README Credits
Stole this entire template from Willie's MES-Website Repo
