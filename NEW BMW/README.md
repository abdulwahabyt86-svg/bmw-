# BMW Animated Website + Web App Concept

## Included
- Intro page with BMW-inspired dark styling, motion graphics, and a Start Experience button.
- Clicking Start hides the start button and plays your intro video.
- Skip Intro opens the second page; the second page also opens automatically when the video ends.
- Responsive second page with a BMW-inspired car image on the left and a floating admin login panel on the right.
- Express server so the project can run locally or on a Node.js host.

## Important: add your video
Put your existing video at this exact path:

`client/assets/video/animated video.mp4`

The folder is included in the ZIP, but the actual video file is not included because it was not uploaded with the folder screenshot. Keep the filename exactly `animated video.mp4`.

## Run locally
1. Install Node.js (LTS).
2. Open the `server` folder in a terminal.
3. Run `npm install`
4. Run `npm start`
5. Open `http://localhost:3000`

You can also preview `client/index.html` directly, but using the server is recommended.

## Admin login note
The login panel is currently a front-end design demo. It does not authenticate or protect any admin data. Before publishing, connect a real server-side authentication system, store password hashes securely, and use HTTPS. Do not put real passwords in `app.js` or HTML.

## Deployment
Deploy the whole project to a Node.js hosting service with `server/package.json` as the package file and `server/server.js` as the start entry. The host needs access to both the `server` and `client` folders. For static-only hosting, deploy the `client` folder, but the Express server will not run there.
