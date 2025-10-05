# Digital Property Insights

This is a Next.js project built with Firebase Studio.

## Publishing to a Custom Domain & Deploying Your Website

Your application is hosted using Firebase App Hosting. For your changes to be visible on your live domain (`digitalpropertyinsights.com.au`), you need to connect your Firebase project to a GitHub repository and deploy your code.

### Step-by-Step Deployment Instructions:

1.  **Create a GitHub Repository:**
    *   Go to [GitHub](https://github.com) and create a new, empty repository for this project. You do not need to initialize it with a README or any other files.

2.  **Connect Firebase to GitHub:**
    *   Open your [Firebase Console](https://console.firebase.google.com/) and navigate to your project.
    *   In the left-hand menu, under **Build**, click on **App Hosting**.
    *   Click the **Manage** button next to your backend (named "backend").
    *   Go to the **Settings** tab.
    *   Under the "Deployment" section, click the **"Connect to GitHub"** button.

3.  **Authorize and Select Repository:**
    *   Follow the on-screen prompts to authorize Firebase to access your GitHub account.
    *   Once authorized, select the new GitHub repository you created in Step 1.
    *   For the **"Live branch (for rollouts)"**, choose your primary branch (e.g., `main`).
    *   Leave the **"App root directory"** as `/`.
    *   Click **"Save and deploy"**.

4.  **Push Your Code from Firebase Studio to GitHub:**
    *   Back in Firebase Studio, you will need to connect your workspace to the newly linked GitHub repository.
    *   Once connected, push the latest version of your code from Studio to the `main` branch of your repository.

5.  **Automatic Deployment:**
    *   Pushing your code to the `main` branch will automatically trigger a new rollout in Firebase App Hosting.
    *   You can monitor the progress in the **"Rollouts"** tab in the App Hosting section of the Firebase console.

6.  **Verify Your Live Site:**
    *   Once the rollout is complete, your changes will be live on your custom domain. You may need to do a "hard refresh" (Ctrl+Shift+R or Cmd+Shift+R) to see the latest updates.

By following these steps, you will establish a continuous deployment pipeline. From now on, every time you push new code to your `main` branch, it will automatically be deployed to your live website.