# How to Publish Your Website

This is a guide to take the code from your Firebase Studio workspace and publish it to your live website.

---

### **The Goal**

To get your website live by pushing your code to GitHub and then deploying it through Firebase App Hosting.

### **The Plan**

This is a two-part process that should only take a few minutes.

1.  **Push Your Code to GitHub:** Send the code from this editor to your empty GitHub repository.
2.  **Deploy in App Hosting:** Go back to the App Hosting setup page and complete the deployment.

---

### **Step-by-Step Instructions**

#### **Part 1: Push Your Code to GitHub (Right here in the editor)**

This is the most important step. We need to send your code to your empty GitHub repository.

1.  **Open Source Control:** In the editor window, look at the vertical activity bar on the far left edge of the screen. Click the third icon from the top, which looks like a **branching path (--o--<)**. This will open the Source Control panel.

2.  **Publish the Branch:** You should see a blue button that says **"Publish Branch"**. Click it.

3.  **Connect and Authorize:** Follow the prompts that appear. You will need to:
    *   Log in to your GitHub account (`lukaswatts-cloud`).
    *   Select your `digital-property-insights` repository when prompted.

4.  **Wait for it to Finish:** The editor will upload all the files. This might take a minute. Once it's done, your code is on GitHub and the `main` branch is created.

---

#### **Part 2: Deploy in App Hosting**

Once your code is successfully pushed to GitHub, you can complete the final steps in the Firebase Console.

1.  **Return to the App Hosting Setup Page:** Go back to the browser tab where you saw the "branch not found" error.
2.  **Refresh the Page:** The page might not update automatically. Refresh the browser tab. The error message should now disappear.
3.  **Save and Deploy:** Click the **"Save and deploy"** button (or "Next" and then "Confirm").
4.  **Monitor and Verify:** A rollout will start automatically. You can watch its progress in the **"Rollouts"** tab. Once it succeeds, your website will be live with all the latest changes.

---

### **Troubleshooting**

**Problem: I pushed the code to the wrong repository! (e.g., to `studio` instead of `digital-property-insights`)**

This is a common mistake and easy to fix. We just need to tell the editor where to send the code.

1.  **Open Source Control:** Click the source control icon (`--o--<`) on the left activity bar.
2.  **Open the Menu:** At the top of the Source Control panel, click the **"..." (three dots)** menu to see more actions.
3.  **Find Remote Options:** In the dropdown menu, look for an option named **"Remote"**. Click it.
4.  **Remove the Old Remote:** From the next submenu, choose **"Remove Remote"** and select `origin`.
5.  **Add the Correct Remote:** Go back to the same menu (**... > Remote**) and choose **"Add Remote..."**.
    *   When asked for the **URL**, enter: `https://github.com/lukaswatts-cloud/digital-property-insights.git`
    *   When asked for the **Remote name**, enter: `origin`
6.  **Push Again:** After adding the new remote, the **"Publish Branch"** button should reappear. Click it to send your code to the correct repository. Once this is done, go back to the App Hosting page and refresh it.
