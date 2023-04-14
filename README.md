# Ordering App Base

This project was created watching and following this [video](https://www.youtube.com/watch?v=c_-b_isI4vg)

## To run it:

-   Copy `.env.example` and rename to `.env`
-   Create an atlas account (check instructions [here](https://github.com/engdlee/social-media-app-base))
-   Create a cloudinary account
-   Create an `unsigned` `upload preset` in cloudinary
-   Add the `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` to the `.env` file (inside the double quotes)
-   Add the `MONGODB_URI` to the `.env` file (inside the double quotes)
-   Add the `NEXTAUTH_SECRET` to the `.env` file (inside the double quotes)
-   Add the `GITHUB_ID` to the `.env` file (for github login)
-   Add the `GITHUB_SECRET` to the `.env` file (for github login)
-   Add the `GOOGLE_CLIENT_ID` to the `.env` file (for google login)
-   Add the `GOOGLE_CLIENT_SECRET` to the `.env` file (for google login)
-   Run `npm i`
-   Run `npm run dev`

## How to get the GITHUB_ID and GITHUB_SECRET:

-   Login to your Github Account
-   Go to `https://github.com/settings/applications/new`
-   Fill the form, in Homepage URL and Authorization callback URL you can put (http://localhost:3000/) if you are in your local (when pushing to prod this will be your domain)
-   Click on `Register application`
-   Copy the `Client ID` is the `GITHUB_ID`
-   Click in `Generate a new client secret`
-   Copy the `Client secrets` is the `GITHUB_SECRET`

## How to get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET:

-   Login to your gmail Account
-   Go to `https://console.cloud.google.com/`
-   Create a new Project
-   Wait for the project to be created
-   Select the project in the top bar or using the button in the Notifications dialog
-   Go to `https://console.cloud.google.com/apis/dashboard`
-   In the left side select `OAuth consent screen`
-   In the OAuth consent screen, select `External`
-   Click on `Create`
-   Fill `App name` with the name you want
-   Select you email in `User support email`
-   Fill the Developer contact information with your email
-   Click `Save and continue`
-   In Scopes Click `Save and continue`
-   In Test users Click `Save and continue` (last step)
-   In the left side select `Credentials`
-   In the Credentials screen, select `+ CREATE CREDENTIALS` -> `Create Oauth client ID`
-   In Application type select `Web application`
-   Fill name with whatever you want
-   In `Authorized redirect URIs`, click on `+ ADD URI`
-   Fill with `http://localhost:3000/api/auth/callback/google`, if its for prod change the domain part
-   Click on `CREATE` a modal will show
-   Copy the `Client ID` is the `GOOGLE_CLIENT_ID`
-   Copy the `Client secret` is the `GOOGLE_CLIENT_SECRET`

You can see the project working here: (Airbnb Clone Base)[https://test-project-airbnb-base.vercel.app/]
