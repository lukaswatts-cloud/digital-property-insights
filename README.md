# Digital Property Insights - Deployment Guide

This guide provides the steps to publish your website to your custom domain (`digitalpropertyinsights.com.au`) by connecting Firebase App Hosting to a GitHub repository.

---

### **Step 1: Open Your Firebase Studio Workspace**

1.  Navigate to your [Firebase Console](https://console.firebase.google.com/).
2.  On the main dashboard, you will see your projects. Click on the project card labeled **"Firebase app"** with the description **"Digital Property Insights"** underneath it.
3.  This will open your Firebase Studio workspace, where you can see all your project files (like this `README.md` file).

---

### **Step 2: Create a New, Empty GitHub Repository**

1.  Go to [GitHub](https://github.com) and create a new repository.
2.  You can name it `digital-property-insights`.
3.  **Crucially, do NOT initialize it with a README, license, or any other files.** It must be completely empty.

---

### **Step 3: Push Your Code from Firebase Studio to GitHub**

1.  Inside your Firebase Studio workspace (from Step 1), find the **Source Control** features. This is often represented by a **branching icon (`Y`)** in a toolbar on the left side of the screen.
2.  Use the Source Control options to connect to the new, empty GitHub repository you created in Step 2.
3.  Once connected, **commit** all your project files with a message like "Initial commit."
4.  Finally, **push** the committed files to a new branch named `main`. This action will create the `main` branch in your GitHub repository and upload all your project code.

---

### **Step 4: Connect Firebase App Hosting to GitHub**

1.  Open your [Firebase Console](https://console.firebase.google.com/) and navigate to your project.
2.  In the left-hand menu, under **Build**, click on **App Hosting**.
3.  Click the **Manage** button next to your backend (named "backend").
4.  Go to the **Settings** tab.
5.  Under the "Deployment" section, click the **"Connect to GitHub"** button.
6.  Authorize Firebase to access your GitHub account and select your `digital-property-insights` repository.
7.  For the **"Live branch (for rollouts)"**, choose your `main` branch. Because you just pushed your code in Step 3, the `main` branch now exists, and the error message you saw before should be gone.
8.  Leave the **"App root directory"** as `/`.
9.  Click **"Save and deploy"**.

---

### **Step 5: Automatic Deployment**

By completing this setup, you establish a continuous deployment pipeline. From now on, every time you push new code from Firebase Studio to your `main` branch on GitHub, it will automatically trigger a new rollout and be deployed to your live website.

You can monitor the progress in the **"Rollouts"** tab in the App Hosting section of the Firebase console. Once complete, your changes will be live on your custom domain. You may need to do a "hard refresh" (Ctrl+Shift+R or Cmd+Shift+R) to see the latest updates.