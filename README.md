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
    *   You should now see `README.md` listed under "Changes".
    *   Hover your mouse over `README.md` and click the **plus icon (+)** that appears. This "stages" the file, preparing it to be saved.

3.  **Commit Your Changes:**
    *   The file will move to a "Staged Changes" section.
    *   In the "Message" box above, type a short description (e.g., "Publish website").
    *   Click the **Commit** button.

4.  **Sync to GitHub:**
    *   Click the **"Sync Changes"** button (it has circular arrows) to push your commit to GitHub.
    *   The first time you do this, you may need to follow prompts to log in to and authorize GitHub.

#### **2. Monitor the Deployment**

Pushing your code to the `main` branch on GitHub automatically starts a new deployment in Firebase App Hosting.

1.  **Go to App Hosting:** You can monitor the progress here: [Firebase App Hosting Console](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)
2.  **Check the Status:** A rollout will be "In progress". Once it succeeds, your website will be live with all the latest changes. You can click the link on that page to view your live site.

---

# How to View Your Live Website

Your website is live and running on Firebase App Hosting.

1.  **Go to the App Hosting Console:**
    *   [https://console.firebase.google.com/project/digital-property-insights/hosting/backends](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)

2.  **Find Your Site's URL:**
    *   On that page, you will see your backend listed.
    *   Look for the URL under the **"Domains"** column. It will be a clickable link that looks something like `digital-property-insights-....apphosting.dev`.

3.  **Click the Link:**
    *   Clicking that link will take you to your live website.

---

# How to Connect Your Custom Domain (e.g., your-domain.com)

To make your custom domain (`digitalpropertyinsights.com.au`) show your new website, you must connect **Firebase Hosting** (the frontend service) to your **Firebase App Hosting** backend.

### **The Plan**

1.  **Set up Firebase Hosting:** Create a new Hosting site.
2.  **Link to App Hosting:** Configure the Hosting site to get its content from your App Hosting backend.
3.  **Add Custom Domain:** Add your custom domain to the Hosting site and update your DNS records.

### **Step-by-Step Instructions**

1.  **Go to the Firebase Hosting Console:**
    *   Use this link: [https://console.firebase.google.com/project/digital-property-insights/hosting](https://console.firebase.google.com/project/digital-property-insights/hosting)

2.  **Get Started with Hosting:**
    *   Click the **"Get Started"** button.

3.  **Follow the Setup Wizard:**
    *   **Step 1 (Install CLI):** The wizard will ask you to install the Firebase CLI. You can **ignore this** and just click **"Next"**.
    *   **Step 2 (Initialize):** The wizard will ask you to run `firebase init`. You can also **ignore this** and just click **"Next"**.
    *   **Step 3 (Deploy):** The wizard will ask you to run `firebase deploy`. Click **"Continue to console"** instead.

4.  **Connect Your App Hosting Backend:**
    *   You should now be on the Hosting dashboard for a new site (it might have a default name).
    *   Click **"Add custom domain"**.
    *   The setup process will first ask you to connect to a backend. Choose the option to connect to an **App Hosting** backend.
    *   Select your existing `digital-property-insights` backend from the list.

5.  **Add and Verify Your Custom Domain:**
    *   Once the backend is linked, proceed to add your custom domain (`digitalpropertyinsights.com.au`).
    *   Firebase will provide a step-by-step guide. It will give you specific DNS records (like `A` records or `TXT` records) that you need to add to your domain settings where you purchased your domain.

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
