# 🎂 Birthday Website Customization Guide

This guide will help you customize the website for Harshita. Since this is a code project, you'll need to make small edits to the files to change content.

## ⏱️ How to Change the Timer

1. Open the file: `client/src/pages/BirthdayPage.tsx`
2. Look for this line near the top:
   ```javascript
   const birthdayDate = new Date('2025-11-25T00:00:00');
   ```
3. Change the date inside the quotes to whatever date and time you want the site to unlock.
   - Format: `YYYY-MM-DDTHH:MM:SS` (Year-Month-Day T Hour:Minute:Second)

## 🖼️ How to Change Photos in Gallery

1. **Upload your new photo** to the `attached_assets` folder (drag and drop it into the file list on the left).
2. Open the file: `client/src/components/birthday/Gallery.tsx`
3. At the top of the file, you'll see imports like this:
   ```javascript
   import photo1 from "@assets/YOUR_PHOTO_NAME.jpeg";
   ```
4. Change the filename in the import to match your new photo's name.
5. Scroll down to the `photos` list to change captions:
   ```javascript
   { src: photo1, alt: "My favorite", caption: "Your New Caption Here", rotation: -2 },
   ```

## 🎥 How to Change Videos

1. **Upload your new video** to the `attached_assets` folder.
2. Open the file: `client/src/components/birthday/BhaukalBeauty.tsx`
3. Update the imports at the top, just like with photos:
   ```javascript
   import video1 from "@assets/YOUR_NEW_VIDEO.mp4";
   ```
4. You can also change the captions in the `videos` list:
   ```javascript
   { src: video1, caption: "New Video Caption" },
   ```

## 💌 How to Edit the Letter & Text

1. **Love Letter**: Open `client/src/components/birthday/Letter.tsx`. You can simply type your new text inside the `<p>` tags.
2. **Hero Title**: Open `client/src/components/birthday/Hero.tsx` to change "Happy Birthday Harshita".
3. **Shayari**: Open `client/src/components/birthday/BhaukalBeauty.tsx` and scroll to the bottom to find the Shayari text.

## 🚀 How to Publish (Make it Live)

1. When you are ready, click the **"Publish"** button in the top right corner of Replit.
2. This will give you a public link (URL) that you can send to her!
