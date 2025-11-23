# 🚀 How to Publish Your Website

Since you want to host this elsewhere, here is the easiest way to do it.

## Step 1: Get the "Ready-to-Publish" Files
I have already run the build command for you. The "finished" version of your website (HTML, CSS, JS) is now inside the `dist/public` folder.

**To download:**
1. In the file explorer on the left, look for the `dist` folder.
2. Inside it, you will see a `public` folder. **This folder contains your entire website.**
3. You cannot "right-click download" a folder easily in some views, so the easiest way is to:
   - Click the project name at the top left.
   - Select **"Download as Zip"**.
   - Extract the zip file on your computer.
   - Open the folder and find `dist/public`. **These are the only files you need to upload.**

## Step 2: Upload to a Host (Free & Easy)

### Option A: Netlify (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the **`dist/public`** folder (from your computer) onto the page.
3. Your site will be live instantly! You can change the site name in "Site Settings".

### Option B: Vercel
1. Install Vercel CLI or go to [Vercel.com](https://vercel.com).
2. Import the project or drag and drop the folder if supported.
3. Ensure it serves the `dist/public` directory.

## 📝 How to Edit Content Later (On Your Computer)

If you downloaded the code and want to edit it on your laptop:
1. Install [Node.js](https://nodejs.org/).
2. Open the project folder in VS Code.
3. Run `npm install` to get the tools.
4. Run `npm run dev` to start the preview.
5. Make your changes (see `GUIDE.md` for what files to edit).
6. Run `npm run build` to create a new version of the `dist/public` folder.
7. Upload the new `dist/public` folder to your host.

## 🎥 Changing Videos/Photos
Refer to `GUIDE.md` for exactly which files to replace in the `client/src` folder. Remember, after replacing images/videos, you MUST run `npm run build` again to update the final site!
