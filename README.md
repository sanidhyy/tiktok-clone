# Tiktik - A React JS TikTok Clone

![A React JS TikTok Clone](https://user-images.githubusercontent.com/71302066/181027204-1bce32fa-d116-43f8-a601-3c8d4bc97513.png "A Fitness Exercise App using React JS")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/Technical-Shubham-tech "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/Technical-Shubham-tech/tiktok-clone?)](https://github.com/Technical-Shubham-tech/tiktok-clone/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Technical-Shubham-tech/tiktok-clone/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/Technical-Shubham-tech/tiktok-clone/)](https://github.com/Technical-Shubham-tech/tiktok-clone/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/Technical-Shubham-tech/tiktok-clone/main/)](https://github.com/Technical-Shubham-tech/tiktok-clone/commits "Github commits")
[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tiktok-clone-react.vercel.app/ "Vercel Deployment")
[![GitHub issues](https://img.shields.io/github/issues/Technical-Shubham-tech/tiktok-clone?)](https://github.com/Technical-Shubham-tech/tiktok-clone/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Technical-Shubham-tech/tiktok-clone?)](https://github.com/Technical-Shubham-tech/tiktok-clone/pulls "GitHub pull requests")

## :warning: Before you start

1. Make sure [Git](https://git-scm.com "Git") and [NodeJS](https://nodejs.org "NodeJS") are installed
2. **Yarn** is faster than Npm. So use [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/ "Yarn").
3. Create `.env.development` file in root folder.
4. Contents of `.env.development`

```
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXXXXXX
NEXT_PUBLIC_SANITY_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_API_TOKEN=XXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Clone this repository to your local computer.
6. Open terminal in root directory. Run `npm install` or `yarn install`.
7. Now, cd `tiktik-backend`. Run `npm install` or `yarn install` again.
8. Now all required packages are installed, let's setup sanity.
9. Create an account in [Sanity](https://www.sanity.io/ "Sanity").
10. In terminal, type `sanity init` to initialize our sanity project.
11. Once sanity project is initialized, Type `sanity start` to start sanity studio on localhost. URL will be shown in terminal.
12. After going to localhost, login in with your account. Now, your account is connected with this project.
13. To get `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_TOKEN`, go to [Sanity](https://www.sanity.io/ "Sanity").
14. Copy your **project id** as shown below:
    ![Copy project id](https://user-images.githubusercontent.com/71302066/182079379-1e1eec55-c6f3-453c-8000-95983b5da154.png "Copy project id")

15. Under API Tab, go to tokens section and create a token. You can name it whatever you want. Just Don't fotget to copy your project token. You will not be able to copy later.
    ![Copy project token](https://user-images.githubusercontent.com/71302066/182079373-75153621-58a1-4e77-b3e4-db33f92c0e1e.png "Copy project token")
16. Now, Sanity backend is setup. Let's setup Google OAuth.
17. Go, to [Google Cloud Developers Console](https://console.cloud.google.com/projectcreate "Google Cloud Developers Console") and create a project.
18. Once you created the project, make sure to select it from Header section.
19. Go to APIs & Services > Credentials and create OAuth Client ID. Follow on-screen instructions.
20. Add Both front end and sanity backend to Authorized URLs as shown below:
    ![Change the following settings](https://user-images.githubusercontent.com/71302066/182080398-e940ce1e-8d69-42a8-aa42-3bac86494054.png "Change the following settings")
21. Copy `NEXT_PUBLIC_GOOGLE_API_TOKEN` and paste it in `.env` file.
    ![Copy Google API Token](https://user-images.githubusercontent.com/71302066/182080950-9f278d63-c911-45be-b8a0-19dfceae8603.png "Copy Google API Token")
22. Now Google OAuth is setup successfully :fire:

_NOTE_: Make sure you don't share these keys publicaly.

## :pushpin: How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `npm install` or `yarn install`.
4. Once packages are installed, you can start this app using `npm start` or `yarn start`
5. Now app is fully configured and you can start using this app :+1:

## :camera: Screenshots:

![Post Details](https://user-images.githubusercontent.com/71302066/182081631-e3c86b5f-4ec3-426f-bd32-79069ac375f8.png "Post Details")

![Profile Page](https://user-images.githubusercontent.com/71302066/182081843-dfba11ce-0e5f-4bed-b10f-31b3eebeed5c.png "Profile Page")

![Upload New Posts](https://user-images.githubusercontent.com/71302066/182081964-89731c6e-af4a-4879-aa9e-d525bbbcb29d.png "Upload New Posts")

## :gear: Built with

[<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="150" height="40" />](https://www.javascript.com/ "JavaScript")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://reactjs.org/ "React JS")

[<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" width="150" />](https://tailwindcss.com/ "Tailwind CSS")

[<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" width="150" />](https://nextjs.org/)

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/Technical-Shubham-tech "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/182082679-e25a4785-4194-456e-8c21-49b41cfe23ef.svg "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/Technical-Shubham-tech?style=social&label=Follow&maxAge=2592000)](https://github.com/Technical-Shubham-tech "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTechnical-Shubham-tech%2Fmedical-chat-app "Tweet")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw "Subscribe my Channel")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## :page_with_curl: Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
