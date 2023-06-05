# Secondhand

## A buy nothing social network

![screenshot of project](/public/imgs/screenshot.png)

This is a network for sharing goods for free, a concept spearheaded by [The Buy Nothing Project](https://buynothingproject.org/).

## Roadmap

- General
  - ~~Convert all views to React~~
  - ~~Stylize everything with Tailwind. Correct routes.~~
  - Host web app with guest user
  - Write classes for repeated class sets like transitions, inputs
- Feed.jsx
  - Specific board for trading services (no money exchanged)
  - Add available, pending, and closed status
  - Lazy load infinite scroll
  - Add giving and ISO filters
- Implement better user account experience
  - ~~Separate create post from profile~~
  - User avatars with defaults available
  - Settings page where user can change password and email
  - Email verification for settings changes?
- Profile.jsx
  - ~~Full gallery of items for trade with titles~~
  - Have services offered section if relevant to user
  - Add ability to view profiles of other users
- Createpost.jsx
  - Add image preview to createpost
  - Add multiple images to one post
- Post.jsx
  - Add next and previous post buttons to individual post pages
  - Add ability to edit posts that belong to the user

### Install

`npm install`

---

### Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

### Run

`npm start`
