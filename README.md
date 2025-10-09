# How to Publish Your Website

This is a guide to take the code from your Firebase Studio workspace and publish it to your live website.

---

### **The Goal**

To get your website live by pushing your code to GitHub and then deploying it through Firebase App Hosting.

### **The Plan**

This is a two-part process.

1.  **Push Your Code to GitHub:** Send the code from this editor to your empty GitHub repository.
2.  **Deploy in App Hosting:** Go back to the App Hosting setup page and complete the deployment.

---

### **Step-by-Step Instructions**

#### **Part 1: Push Your Code to GitHub (Right here in the editor)**

This is the most important step. We need to send your code to your empty GitHub repository.

1.  **Find the Source Control Icon:** In the editor window, look at the vertical activity bar on the far left edge of the screen. Click the third icon from the top, which looks like a **branching path (--o--<)**. This will open the Source Control panel.

2.  **Publish the Branch:** You should see a blue button that says **"Publish Branch"**. Click it.

3.  **Connect and Authorize:** Follow the prompts that appear. You will need to:
    *   Log in to your GitHub account (`lukaswatts-cloud`).
    *   Select your `digital-property-insights` repository.

4.  **Wait for it to Finish:** The editor will upload all the files. This might take a minute. Once it's done, your code is on GitHub and the `main` branch is created.

---

#### **Part 2: Deploy in App Hosting**

Once your code is successfully pushed to GitHub, you can complete the final steps in the Firebase Console.

1.  **Return to the App Hosting Setup Page:** Go back to the browser tab where you saw the "branch not found" error. If you closed it, navigate back to the **App Hosting** section in your Firebase project.

2.  **The Error Will Be Gone:** The page should now be able to find the `main` branch in your repository. The error message will disappear.

3.  **Save and Deploy:** Click the **"Save and deploy"** button (or "Next" and then "Confirm").

4.  **Monitor and Verify:** A rollout will start automatically. You can watch its progress in the **"Rollouts"** tab. Once it succeeds, your website will be live with all the latest changes.