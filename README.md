# Digital Property Insights

This is a Next.js project built with Firebase Studio.

## Publishing to a Custom Domain & Deploying Your Website

Your application is hosted using Firebase App Hosting. For your changes to be visible on your live domain (`digitalpropertyinsights.com.au`), you need to connect your Firebase project to a GitHub repository and deploy your code.

### Step-by-Step Deployment Instructions:

1.  **Create a GitHub Repository:**
    *   Go to [GitHub](https://github.com) and create a new, **empty** repository. You can name it `digital-property-insights`.
    *   Do **not** initialize it with a README, license, or any other files.

2.  **Push Your Code from Firebase Studio to GitHub:**
    *   In your Firebase Studio workspace, use the source control features to connect to the new GitHub repository you just created.
    *   Commit all your project files.
    *   Push the committed files to a new branch named `main`. This action will create the `main` branch in your GitHub repository and upload your project code.

3.  **Connect Firebase to GitHub:**
    *   Open your [Firebase Console](https://console.firebase.google.com/) and navigate to your project.
    *   In the left-hand menu, under **Build**, click on **App Hosting**.
    *   Click the **Manage** button next to your backend (named "backend").
    *   Go to the **Settings** tab.
    *   Under the "Deployment" section, click the **"Connect to GitHub"** button.

4.  **Authorize and Select Repository:**
    *   Follow the on-screen prompts to authorize Firebase to access your GitHub account.
    *   Once authorized, select your `digital-property-insights` repository from the dropdown.
    *   For the **"Live branch (for rollouts)"**, choose your `main` branch. The error message should now be gone because the branch exists.
    *   Leave the **"App root directory"** as `/`.
    *   Click **"Save and deploy"**.

5.  **Automatic Deployment:**
    *   By completing this setup, you establish a continuous deployment pipeline. From now on, every time you push new code from Firebase Studio to your `main` branch on GitHub, it will automatically trigger a new rollout and be deployed to your live website.

6.  **Verify Your Live Site:**
    *   You can monitor the progress in the **"Rollouts"** tab in the App Hosting section of the Firebase console.
    *   Once the rollout is complete, your changes will be live on your custom domain. You may need to do a "hard refresh" (Ctrl+Shift+R or Cmd+Shift+R) to see the latest updates.
