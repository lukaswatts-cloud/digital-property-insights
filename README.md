# Digital Property Insights - How to Update Your Live Website

This is a simplified guide for publishing updates to your website. You only need to follow this process when you want to make your changes live.

---

### **The Goal**

To take the code from your Firebase Studio workspace and publish it to your live website at `digitalpropertyinsights.com.au`.

### **The Three-Part Plan**

Our plan involves three main parts:
1.  **Pushing your code** from the editor to your GitHub repository.
2.  **Connecting App Hosting** to that GitHub repository.
3.  **Deploying your site** from the App Hosting dashboard.

---

### **Step-by-Step Instructions**

#### **Part 1: Push Your Code to GitHub**

This is the most important step. We need to send your code to your empty GitHub repository.

1.  **Find the Source Control Icon:** In the editor window, look at the vertical activity bar on the far left edge of the screen. Click the third icon from the top, which looks like a **branching path (--o--<)**. This will open the Source Control panel.

2.  **Connect to GitHub:** You should see a button or prompt to "Publish to GitHub" or "Connect to GitHub". Click it.

3.  **Authorize and Select:** Follow the prompts that appear. You will need to:
    *   Log in and authorize your GitHub account (`lukaswatts-cloud`).
    *   Select your `digital-property-insights` repository.

4.  **Commit and Push:** Use the source control panel to **commit** all your project files and **push** (or publish) them to GitHub. This will create the `main` branch.

---

#### **Part 2: Configure and Deploy in App Hosting**

Once your code is successfully pushed to GitHub, you can complete the final steps in the Firebase Console.

1.  **Navigate to App Hosting:** Open your Firebase Console and go to the **App Hosting** section.
2.  **Go to Settings:** Go back to the GitHub connection settings page (the one that showed the "branch not found" error).
3.  **Save and Deploy:** The settings should be pre-filled:
    *   Repository: `digital-property-insights`
    *   Live branch: `main`
    *   App root directory: `/`
4.  The error message about the branch not existing should now be gone. Click the **"Save and deploy"** or **"Next"** button. A confirmation popup will appear. Click **"Confirm"**.

5.  **Monitor and Verify:**
    *   A rollout will start automatically. You can watch its progress in the **"Rollouts"** tab.
    *   Once it succeeds, your website at `digitalpropertyinsights.com.au` will be live with all the latest changes.