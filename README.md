# Digital Property Insights - Deployment Guide

This guide provides the steps to publish updates from your Firebase Studio workspace to your live website.

**IMPORTANT:** The deployment process requires connecting your workspace to a GitHub repository.

---

### **Part 1: Access Your Firebase Studio Workspace**

1.  **Go to the Firebase Console:** Navigate to your [Firebase Console](https://console.firebase.google.com/).
2.  **Open Your Project:** On the main dashboard, click on your project card labeled **"Firebase app"** with the description **"Digital Property Insights"**. This will take you into the Firebase Studio editor where your code is.

---

### **Part 2: Push Your Code to a New GitHub Repository**

Your code currently exists only in your Firebase Studio workspace. To deploy it, you must first push it to a GitHub repository.

1.  **Create an Empty GitHub Repository:**
    *   Go to [github.com](https://github.com) and create a **new, empty repository**. Name it `digital-property-insights`.
    *   **Do not** initialize it with a README or any other files.

2.  **Connect Studio to GitHub:**
    *   In your open Firebase Studio workspace (from Part 1), find the top menu bar.
    *   Click **View -> Source Control**. This will open the source control panel.
    *   Follow the prompts to connect and authorize your GitHub account.

3.  **Push Your Code:**
    *   Once connected, use the source control panel to **commit** all your project files and **push** them to the `digital-property-insights` repository. This will create the `main` branch in GitHub.

---

### **Part 3: Configure App Hosting and Deploy**

Now you will link Firebase App Hosting to the repository you just pushed your code to.

1.  **Open App Hosting:**
    *   Navigate back to your [Firebase Console](https://console.firebase.google.com/).
    *   Select your project again.
    *   In the left-hand menu, under the **Build** category, click on **App Hosting**.

2.  **Connect to GitHub (Final Step):**
    *   You may see a prompt to connect to GitHub. If so, click through and select your `digital-property-insights` repository.
    *   If you see the "Overview" page, click the **"Create rollout"** button. A tooltip will appear with a blue **"settings"** link. Click it.
    *   On the settings page, select the `digital-property-insights` repository.
    *   For the **"Live branch"**, enter `main`. The error message you saw before should now be gone because the branch exists.
    *   Click **"Save and deploy"**.

3.  **Monitor and Verify:**
    *   The "Save and deploy" action will trigger your first rollout from GitHub.
    *   You can monitor its progress in the **"Rollouts"** tab.
    *   Once it succeeds, your website at `digitalpropertyinsights.com.au` will be live with all the latest changes.
