# Secondhand

## A buy nothing social network

![screenshot of project](/public/imgs/screenshot.png)

This is a network for sharing goods for free, a concept spearheaded by [The Buy Nothing Project](https://buynothingproject.org/).

## Roadmap

- Reactify
  - ~~Convert all views to React~~
  - Stylize everything with Tailwind. Correct routes.
- Barter board
  - Specific board for trading services (no money exchanged)
- Implement better user account experience
  - ~~Separate create post from profile~~
  - Profile to have services offered section if relevant to user
  - Full gallery of items for trade with titles
  - User avatars with defaults available
  - Settings page where user can change password and email
  - Email verification for settings changes?
- Host web app with guest user
- Add available, pending, and closed status

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
