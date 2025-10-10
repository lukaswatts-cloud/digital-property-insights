# How to Publish Your Website

This guide explains how to publish the code from your Firebase Studio workspace to your live website.

### **The Goal**

To get your website live by pushing your code to GitHub, which automatically deploys it through Firebase App Hosting.

### **The Plan**

1.  **Push Your Code to GitHub:** Send the code from this editor to your GitHub repository.
2.  **Deploy in App Hosting:** The push to GitHub automatically triggers a deployment in App Hosting.

---

### **Step-by-Step Instructions

This process happens right here in the editor.

1.  **Open Source Control:**
    *   On the left side of the screen, click the third icon from the top, which looks like a branching path (`--o--<`). This opens the Source Control panel.

2.  **Stage Your Changes:**
    *   If you see any files listed under "Changes," hover over the word "Changes" and click the **plus icon (+)** that appears. This stages all files.

3.  **Commit Your Changes:**
    *   The files will move to a "Staged Changes" section.
    *   In the "Message" box above, type a short description (e.g., "Final website updates").
    *   Click the **Commit** button.

4.  **Sync to GitHub:**
    *   Click the **"Sync Changes"** button to push your commit to GitHub.

#### **Monitor the Deployment**

Pushing your code to GitHub starts a new deployment in Firebase App Hosting.

1.  **Go to App Hosting:** You can monitor the progress here: [Firebase App Hosting Console](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)
2.  **Check the Status:** A new rollout will appear. Wait for it to show a green checkmark and "Succeeded". Once it does, your website will be live at your custom domain.
