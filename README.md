# Tiktik - A Next.js TikTok Clone

![A Next.js TikTok Clone](https://user-images.githubusercontent.com/71302066/181027204-1bce32fa-d116-43f8-a601-3c8d4bc97513.png "A Next.js TikTok Clone")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/sanidhyy/tiktok-clone?)](https://github.com/sanidhyy/tiktok-clone/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/tiktok-clone/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/tiktok-clone/)](https://github.com/sanidhyy/tiktok-clone/branches "GitHub branches")
[![GitHub commits](https://badgen.net/github/commits/sanidhyy/tiktok-clone/main/)](https://github.com/sanidhyy/tiktok-clone/commits "GitHub commits")
[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tiktok-clone-react.vercel.app/ "Vercel Deployment")
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/tiktok-clone?)](https://github.com/sanidhyy/tiktok-clone/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sanidhyy/tiktok-clone?)](https://github.com/sanidhyy/tiktok-clone/pulls "GitHub pull requests")

## :warning: Before you start

1. Make sure [Git](https://git-scm.com "Git") and [Node.js](https://nodejs.org "Node.js") are installed.
2. Clone this repository to your local computer.
3. Create a `.env.local` file in the root folder with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXXXXXX
SANITY_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Open a terminal in the root directory. Run `npm install` or `pnpm install`.
5. Workspace packages (including Sanity Studio) install from the repo root, so you do not need a second install in `tiktik-backend`.
6. Now that all required packages are installed, let's set up Sanity.
7. Create an account on [Sanity](https://www.sanity.io/ "Sanity").
8. In the terminal, type `npm run studio` or `pnpm studio` to start Sanity Studio on localhost. The URL will be shown in the terminal.
9. After opening that URL, log in with your account. Your account is now connected to this project.
10. To get `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_TOKEN`, go to [Sanity](https://www.sanity.io/ "Sanity").
11. Copy your **project ID** as shown below:
    ![Copy project ID](https://user-images.githubusercontent.com/71302066/182079379-1e1eec55-c6f3-453c-8000-95983b5da154.png "Copy project ID")

12. Under the API tab, go to the tokens section and create a token. You can name it whatever you want. Just don't forget to copy your project token. You will not be able to copy it later.
    ![Copy project token](https://user-images.githubusercontent.com/71302066/182079373-75153621-58a1-4e77-b3e4-db33f92c0e1e.png "Copy project token")
13. The Sanity backend is now set up. Let's set up Google OAuth.
14. Go to the [Google Cloud Console](https://console.cloud.google.com/projectcreate "Google Cloud Console") and create a project.
15. Once you have created the project, make sure to select it from the header.
16. Go to APIs & Services > Credentials and create an OAuth Client ID. Follow the on-screen instructions.
17. Add both the frontend and Sanity backend to Authorized URLs as shown below:
    ![Change the following settings](https://user-images.githubusercontent.com/71302066/182080398-e940ce1e-8d69-42a8-aa42-3bac86494054.png "Change the following settings")
18. Copy the OAuth **Client ID** into `NEXT_PUBLIC_GOOGLE_CLIENT_ID` in `.env.local`.
    ![Copy Google Client ID](https://user-images.githubusercontent.com/71302066/182080950-9f278d63-c911-45be-b8a0-19dfceae8603.png "Copy Google Client ID")
19. Google OAuth is now set up successfully :fire:

_NOTE_: Make sure you don't share these keys publicly.

## :pushpin: How to use this app

1. Clone this **repository** to your local computer.
2. Open a **terminal** in the root directory.
3. Run `npm install` or `pnpm install`.
4. Once the packages are installed, start the app with `npm run dev` or `pnpm dev`.
5. The app is now fully configured and ready to use :+1:

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/tiktok-clone/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots

![Post Details](https://user-images.githubusercontent.com/71302066/182081631-e3c86b5f-4ec3-426f-bd32-79069ac375f8.png "Post Details")

![Profile Page](https://user-images.githubusercontent.com/71302066/182081843-dfba11ce-0e5f-4bed-b10f-31b3eebeed5c.png "Profile Page")

![Upload New Posts](https://user-images.githubusercontent.com/71302066/182081964-89731c6e-af4a-4879-aa9e-d525bbbcb29d.png "Upload New Posts")

## :gear: Built with

[<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="150" height="40" />](https://www.typescriptlang.org/ "TypeScript")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://reactjs.org/ "React")

[<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" width="150" />](https://tailwindcss.com/ "Tailwind CSS")

[<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" width="150" />](https://nextjs.org/)

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/sanidhyy "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/182082679-e25a4785-4194-456e-8c21-49b41cfe23ef.svg "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via a pull request and I will review them before merging. Make sure you follow the community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Ftiktok-clone "Tweet")

## :star: Give A Star

You can also star this repository to help more people discover it.

## :books: Available Scripts

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

API route handlers live under `app/api/` and map to `/api/*`. For example, `app/api/post/route.ts` is served at `/api/post`.

## :page_with_curl: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
