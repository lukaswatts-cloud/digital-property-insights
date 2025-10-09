# How to Publish Your Website

This is a guide to take the code from your Firebase Studio workspace and publish it to your live website.

---

### **The Goal**

To get your website live by pushing your code to GitHub and then deploying it through Firebase App Hosting.

### **The Plan**

This is a two-part process that should only take a few minutes.

1.  **Push Your Code to GitHub:** Send the code from this editor to your GitHub repository.
2.  **Deploy in App Hosting:** The push to GitHub will automatically trigger a deployment in App Hosting.

---

### **Step-by-Step Instructions**

#### **1. Push Your Code to GitHub (Right here in the editor)**

This is the most important step. We need to send your code to your GitHub repository.

1.  **Open Source Control:** In the editor window, look at the vertical activity bar on the far left of the screen. Click the third icon from the top, which looks like a **branching path (--o--<)**. This will open the Source Control panel.

2.  **Publish the Branch:** You should see a blue button that says **"Publish Branch"** or **"Sync Changes"**. Click it.

3.  **Connect and Authorize:** The first time you do this, you will need to follow the prompts to log in to your GitHub account and authorize the connection to your `digital-property-insights` repository.

4.  **Wait for it to Finish:** The editor will upload all the files. This might take a minute. Once it's done, your code is on GitHub.

#### **2. Monitor the Deployment**

Pushing your code to the `main` branch on GitHub automatically starts a new deployment in Firebase App Hosting.

1.  **Go to App Hosting:** You can monitor the progress here: [Firebase App Hosting Console](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)
2.  **Check the Status:** A rollout will be "In progress". Once it succeeds, your website will be live with all the latest changes. You can click the link on that page to view your live site.

---

### **Troubleshooting**

#### **Problem: Deployment Fails with "Misconfigured secret: GEMINI_API_KEY"**

This is the most common first-time setup issue. It means the AI features in your app need a secure API key, but it hasn't been provided to the hosting environment.

**Solution:** You need to create the secret and grant permission one time.

1.  **Get an API Key:**
    *   Go to Google AI Studio: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
    *   Click "Create API key" and select the `digital-property-insights` project.
    *   Copy the generated key.

2.  **Create the Secret:**
    *   Go to Secret Manager for your project: [https://console.cloud.google.com/security/secret-manager?project=digital-property-insights](https://console.cloud.google.com/security/secret-manager?project=digital-property-insights)
    *   Click **"+ CREATE SECRET"**. Name it `GEMINI_API_KEY` and paste your key in the "Secret value" field.
    *   If it already exists, click on its name, then **"+ ADD NEW VERSION"** to add your key.

3.  **Find Your Service Account:**
    *   Go to the App Hosting page for your project: [https://console.firebase.google.com/project/digital-property-insights/hosting/backends](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)
    *   Click on your backend (e.g., `digital-property-insights` or `studio`).
    *   Click on the **"Settings"** tab.
    *   Copy the **Service account** email address.

4.  **Grant Permission:**
    *   Go to the IAM page for your project: [https://console.cloud.google.com/iam-admin/iam?project=digital-property-insights](https://console.cloud.google.com/iam-admin/iam?project=digital-property-insights)
    *   Click **"+ GRANT ACCESS"**.
    *   In **"New principals"**, paste the **Service account** email you copied in the previous step.
    *   For the **"Role"**, select `Secret Manager Secret Accessor`.
    *   Click **"Save"**.

5.  **Redeploy:**
    *   Come back to the Firebase Studio editor, make a small change to any file (like adding a space), and push it to GitHub again via the Source Control panel. This will trigger a new deployment which should now succeed.
