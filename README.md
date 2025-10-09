# Digital Property Insights - Deployment Guide

This guide provides the steps to publish updates from your Firebase Studio workspace to your live website.

---

### **How to Deploy Your Website**

Your project is set up to deploy directly from Firebase Studio using Firebase App Hosting. You do not need to use GitHub.

### **Step 1: Open Firebase App Hosting**

1.  Navigate to your [Firebase Console](https://console.firebase.google.com/).
2.  On the main dashboard, click on your project card labeled **"Firebase app"** with the description **"Digital Property Insights"**.
3.  In the left-hand menu, under the **Build** category, click on **App Hosting**. This will take you to the dashboard for your website backend.

---

### **Step 2: Create a New Rollout**

1.  On the App Hosting "Overview" tab, you will see a summary of your web app.
2.  Find and click the **"Create rollout"** button. This is typically located in the "Summary" card.
3.  This action takes all the latest code and changes from your Firebase Studio workspace and begins a new deployment.

---

### **Step 3: Monitor and Verify**

1.  After clicking "Create rollout," you can go to the **"Rollouts"** tab to monitor the progress of your deployment.
2.  Once the rollout is complete and has a "success" status, your changes will be live on your custom domain (`digitalpropertyinsights.com.au`).
3.  You may need to do a "hard refresh" in your browser (Ctrl+Shift+R or Cmd+Shift+R) to clear the local cache and see the latest updates.

That's it! Every time you want to update your live website with changes you've made in Firebase Studio, you will follow this simple "Create rollout" process.
