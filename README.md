# githunt

Developed a web application using React that allows users to input a GitHub username. Upon user input, the app display the avatar of the user fetched from the GitHub API. And allows to display the user info like Username, Followers, Following, Public_Repositories, and Join date. It also have three extra tabs to display Public_Repositories, Activity and Followers list with their avatar and username.

## Features

- List of first 20 ids.
- Input a GitHub username.
- User's avatar and username.
- User's followers
- User's joined date
- User's public_repositories
- User's activity
- Fully responsive

## Using React Feature

- React Router
- useEffect()
- useState()
- Fetch API
- Custom Hook
- Debounce

## API

GitHub is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code. It is commonly used to host open source software development projects.

- For the list of first 20 users
  <br> GET request: `https://api.github.com/users` <br>

- To get the details of single user
  <br> GET request: `https://api.github.com/users/{id or username}`

The response is in JSON format.

## Usage

### Install

- `npm create vite@latest`
- Select React framework and Javascript

### Run

- `cd githunt`
- `npm install`
- `npm run dev`

### Install Tailwind

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Configure your template paths <br>
  Add the paths to all of your template files in your tailwind.config.js file.

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

- Add the Tailwind directives to your CSS <br>
  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Start your build process <br>
  Run your build process with npm run dev.

```
npm run dev
```

## Development

Want to contribute? Great! Make the changes and reach out to me over rajanarahul93@gmail.com
