# Digital Property Insights - How to Update Your Live Website

This is a simplified guide for publishing updates to your website. You only need to follow this process when you want to make your changes live.

---

### **The Goal**

To take the code from your Firebase Studio workspace and publish it to your live website at `digitalpropertyinsights.com.au`.

### **The Three-Part Plan**

Our plan involves three main parts:
1.  **Opening the correct editor** for your project.
2.  **Pushing your code** from that editor to your GitHub repository.
3.  **Deploying that code** from GitHub using Firebase App Hosting.

---

### **Step-by-Step Instructions**

#### **Part 1: Find and Open Your Workspace Editor**

If you are looking at the main Firebase console dashboard (the screen with "Project Overview"), you first need to open your project's code editor.

1.  **Find "Related development tools"**: On the main Firebase console page, look at the menu on the left-hand side.
2.  **Click "Firebase Studio"**: At the bottom of this menu, click on the **Firebase Studio** link. This will open the Firebase Studio welcome page.
3.  **Open Your Workspace**: On the welcome page, under "My workspaces", find and click on the card named **"Digital Property Insights"**. This will open the code editor where all your project files are stored.

---

#### **Part 2: Push Your Code to GitHub**

Now that you are in the editor, you need to send your code to the empty GitHub repository you created. This will create the `main` branch that Firebase needs.

1.  **Find the Source Control Icon:** In the top-right corner of the editor window, look for a set of icons. Click the **Source Control icon**, which looks like this: **`</>`**.
2.  **Connect to GitHub:** Follow the prompts that appear. You will need to:
    *   Log in and authorize your GitHub account (`lukaswatts-cloud`).
    *   Select your `digital-property-insights` repository.
3.  **Commit and Push:** Use the source control panel to **commit** all your project files and **push** them to GitHub. This will create the `main` branch.

---

#### **Part 3: Configure App Hosting and Deploy**

Once your code is successfully pushed to GitHub, you can complete the final step in the Firebase Console.

1.  **Open App Hosting:**
    *   Navigate back to your [Firebase Console](https://console.firebase.google.com/).
    *   Select your project again.
    *   In the left-hand menu, under the **Build** category, click on **App Hosting**.

2.  **Go to Settings:**
    *   In the App Hosting section, click on the **"Settings"** tab.
    *   You will see the configuration page for your GitHub connection.

3.  **Save and Deploy:**
    *   The settings should be pre-filled:
        *   Repository: `digital-property-insights`
        *   Live branch: `main`
    *   Because you have now pushed your code, the error message about the branch not existing should be gone.
    *   Click the **"Save and deploy"** button. A confirmation popup will appear. Click **"Confirm"**.

4.  **Monitor and Verify:**
    *   A rollout will start automatically. You can watch its progress in the **"Rollouts"** tab.
    *   Once it succeeds, your website at `digitalpropertyinsights.com.au` will be live with all the latest changes.