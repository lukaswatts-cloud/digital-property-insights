# Firebase Review Checkpoint - 2026-05-11

This note locks in the verified Digital Property Insights Firebase/App Hosting state at the end of work on Monday 11 May 2026 in Melbourne.

## Verified repo state

- Repo: `lukaswatts-cloud/digital-property-insights`
- Local repo path: `/Users/lukaswatts/Documents/New project/repos/digital-property-insights`
- Branch: `main`
- Current pushed commit at checkpoint: `e2c2a131f100924df5e54847c629612184cf727f`
- The repo now uses a supported `apphosting` config in `firebase.json`
- The old invalid classic Hosting rewrite to `apphosting` was removed

## Verified Firebase/App Hosting state

- Firebase project: `digital-property-insights`
- App Hosting backend: `digital-property-insights`
- App Hosting backend URL is serving the new client-facing homepage
- Local-source App Hosting deploy succeeded on 2026-05-11 after Firebase CLI auth
- `firebase.json` now includes:
  - `apphosting.backendId = digital-property-insights`
  - `rootDir = "."`
  - `alwaysDeployFromSource = true`

## Verified domain / DNS state

- Main intended canonical domain: `digitalpropertyinsights.com.au`
- Short domain purchased: `dpinsights.com.au`
- VentraIP DNS change completed:
  - `www.digitalpropertyinsights.com.au` CNAME now points to `digital-property-insights.web.app`
- Firebase classic Hosting status for `www.digitalpropertyinsights.com.au` reached `Minting certificate`

## Important remaining issue

The public apex domain `https://digitalpropertyinsights.com.au` was still serving the old classic Hosting release at this checkpoint, even though the App Hosting backend itself was serving the correct new site.

In plain terms:

- code and backend deployment path were repaired
- `www` DNS was repaired
- apex public cutover to the healthy App Hosting backend was still incomplete

## What was observed live

- Classic Hosting dashboard still showed current release hash `c0fad7`
- `curl -L https://digitalpropertyinsights.com.au` still returned the old homepage with:
  - `Unlock the Future of Real Estate`
- The App Hosting backend served the new homepage with:
  - `Smarter property decisions, supported by practical digital tools.`

## Recommended first checks tomorrow

1. Check whether App Hosting custom-domain setup for `digitalpropertyinsights.com.au` progressed after waiting overnight.
2. Confirm whether `www.digitalpropertyinsights.com.au` finished certificate minting.
3. Re-test:
   - `https://digitalpropertyinsights.com.au`
   - `https://www.digitalpropertyinsights.com.au`
   - App Hosting backend URL
4. Verify whether apex still points at legacy Hosting or has moved to App Hosting.
5. If apex is still on legacy Hosting, finish the custom-domain migration path in Firebase App Hosting.

## Copy-paste prompt for tomorrow

Use this prompt to resume:

```text
It is Tuesday 12 May 2026 in Melbourne, Australia. Continue from the locked DPI Firebase checkpoint in docs/firebase-review-checkpoint-2026-05-11.md and move straight into verification and cutover review mode.

Treat these as already verified from last session:
- Repo: lukaswatts-cloud/digital-property-insights
- Firebase project: digital-property-insights
- App Hosting backend: digital-property-insights
- Local repo path: /Users/lukaswatts/Documents/New project/repos/digital-property-insights
- Current pushed checkpoint commit: e2c2a131f100924df5e54847c629612184cf727f
- App Hosting backend was serving the new client-facing homepage
- Apex domain digitalpropertyinsights.com.au was still serving the old classic Hosting page
- www.digitalpropertyinsights.com.au DNS was changed in VentraIP to CNAME digital-property-insights.web.app
- Firebase showed www.digitalpropertyinsights.com.au as Minting certificate
- firebase.json was updated to supported apphosting config with alwaysDeployFromSource enabled

Work in verification and cutover mode now.

Start by:
1. checking whether the App Hosting custom-domain state changed overnight
2. verifying the live state of:
   - https://digitalpropertyinsights.com.au
   - https://www.digitalpropertyinsights.com.au
   - the App Hosting backend URL
3. identifying exactly what still blocks the apex domain from serving the new site
4. recommending and, if safe, performing the next concrete cutover step

Important:
- do not restart broad source recovery
- do not drift into ValuVista or RenoScope feature work
- optimize for finalizing the DPI public website cutover
```
