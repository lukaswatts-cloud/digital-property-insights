
# How to Publish Your Website

This is a guide to take the code from your Firebase Studio workspace and publish it to your live website.

### **The Goal**

To get your website live by pushing your code to GitHub and then deploying it through Firebase App Hosting.

### **The Plan**

This is a two-part process that should only take a few minutes.

1.  **Push Your Code to GitHub:** Send the code from this editor to your GitHub repository.
2.  **Deploy in App Hosting:** The push to GitHub will automatically trigger a deployment in App Hosting.

---

### **Step-by-Step Instructions

#### **1. Push Your Code to GitHub (Right here in the editor)**

This is the most important step. We need to send your code to your GitHub repository.

1.  **Open Source Control:** In the editor window, look at the vertical activity bar on the far left of the screen. Click the third icon from the top, which looks like a **branching path (--o--<)**. This will open the Source Control panel.

2.  **Stage Your Changes:**
    *   You should now see `firebase.json` and `README.md` listed under "Changes".
    *   Hover your mouse over each file and click the **plus icon (+)** that appears. This "stages" the files, preparing them to be saved.

3.  **Commit Your Changes:**
    *   The files will move to a "Staged Changes" section.
    *   In the "Message" box above, type a short description (e.g., "Configure hosting and publish").
    *   Click the **Commit** button.

4.  **Sync to GitHub:**
    *   Click the **"Sync Changes"** button (it has circular arrows) to push your commit to GitHub.

#### **2. Monitor the Deployment**

Pushing your code to the `main` branch on GitHub automatically starts a new deployment in Firebase App Hosting. This deployment will use the new `firebase.json` file to correctly link your domain.

1.  **Go to App Hosting:** You can monitor the progress here: [Firebase App Hosting Console](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)
2.  **Check the Status:** A new rollout will appear and show "In progress". Once it succeeds, your website will be live at your custom domain.

---

# Troubleshooting

### **Problem: Deployment Fails with "Misconfigured secret: GEMINI_API_KEY"**

This error means the website's hosting environment is trying to read the `GEMINI_API_KEY` from Google's Secret Manager, but it's failing. This is almost always caused by one of two issues:

1.  **The Secret's Value is Missing:** The secret `GEMINI_API_KEY` exists, but it has no active "version" containing the actual API key.
2.  **The Permission is Missing:** The service account for App Hosting doesn't have permission to access the secret.

**Solution:** Verify both the secret and the permission.

##### **Step 1: Verify the Secret Exists**

1.  **Get an API Key:**
    *   Go to Google AI Studio: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
    *   Click "Create API key" and select the **`digital-property-insights`** project.
    *   Copy the generated key.

2.  **Check Secret Manager:**
    *   Go to the Secret Manager page for your project: [https://console.cloud.google.com/security/secret-manager?project=digital-property-insights](https://console.cloud.google.com/security/secret-manager?project=digital-property-insights)
    *   Click on the secret named **`GEMINI_API_KEY`**.
    *   On the **"Versions"** tab, ensure there is at least one version listed with a status of **"Enabled"**.
    *   If there are no versions, or none are enabled, click **"+ ADD NEW VERSION"**, paste your API key in the "Secret value" field, and click **"Add new version"**.

##### **Step 2: Verify the Permission**

1.  **Go to the IAM Page:**
    *   Go to the IAM (Permissions) page for your project: [https://console.cloud.google.com/iam-admin/iam?project=digital-property-insights](https://console.cloud.google.com/iam-admin/iam?project=digital-property-insights)

2.  **Find the App Hosting Service Account:**
    *   In the main list of principals, find the one that has the role **"Firebase App Hosting Backend"**. Its email address should be: `firebase-app-hosting-compute@digital-property-insights.iam.gserviceaccount.com`.

3.  **Check its Roles:**
    *   Look at the "Role(s)" column for that principal. It **must** have **two** roles:
        1.  `Firebase App Hosting Backend`
        2.  `Secret Manager Secret Accessor`
    *   If `Secret Manager Secret Accessor` is missing, click the **pencil icon (Edit principal)** on the far right of that row.
    *   Click **"+ ADD ANOTHER ROLE"**, find and select `Secret Manager Secret Accessor`, and click **"Save"**.

##### **Step 3: Redeploy**

*   After verifying both the secret and the permission, come back to the Firebase Studio editor.
*   Make a small change to any file (like adding a space) and **push it to GitHub** again via the Source Control panel. This will trigger a new deployment which should now succeed.
