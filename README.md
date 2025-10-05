# Digital Property Insights

This is a Next.js project built with Firebase Studio.

## Publishing to a Custom Domain

Your application is hosted using Firebase App Hosting. To connect your custom domain (e.g., `digitalpropertyinsights.com.au`), you need to follow these steps in your Firebase project console.

### Step-by-Step Instructions:

1.  **Open your Firebase Project:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Select the project that is associated with this application.

2.  **Navigate to App Hosting:**
    *   In the left-hand navigation menu, under the **Build** section, click on **App Hosting**.

3.  **Go to Domain Management:**
    *   You will see your App Hosting backend listed. Click the **Manage** button next to it.
    *   In the dashboard that appears, click on the **"Custom domains"** tab.

4.  **Add Your Domain:**
    *   Click the **"Add custom domain"** button.
    *   Enter your domain name: `digitalpropertyinsights.com.au`.
    *   It's recommended to also add a redirect for the `www` version (`www.digitalpropertyinsights.com.au`) to your primary domain. You can do this in the same flow.

5.  **Verify Domain Ownership:**
    *   Firebase will provide you with a **TXT record** (or sometimes other methods like CNAME).
    *   You need to copy this record and add it to the DNS settings of your domain registrar (the service where you bought `digitalpropertyinsights.com.au`).
    *   This step is crucial as it proves to Firebase that you own the domain.

6.  **Point Your Domain to Firebase:**
    *   After verification is complete (which can take some time), Firebase will provide you with **A records** (and possibly AAAA records).
    *   Go back to your domain registrar's DNS settings and add these A records. These records point your domain name to the Firebase servers that host your application.

7.  **Wait for Propagation:**
    *   DNS changes can take anywhere from a few minutes to 48 hours to propagate across the internet. Once propagated, your website will be live at `digitalpropertyinsights.com.au`.

### A Note on Deployments

Firebase App Hosting automatically deploys the latest version of your code. If you visit your live domain and don't see the latest changes, it might be due to a short delay in the deployment process or web caching. You can check the "Rollouts" tab in the App Hosting section of the Firebase console to see the status of your deployments.

By following these steps, you will successfully connect your custom domain and publish your website.
