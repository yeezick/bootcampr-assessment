# Bootcampr Engineering Assessment

## Purpose

Bootcampr was made for bootcampers by bootcampers.
Our platform will help graduates find more success during their job search by giving our users the practical experience they need to stand out.

This repository will host the code assessment for engineering candidates. It will give us a baseline of your general MERN experience, capacity to deliver within a week, and ability to implement best practice & adhere to instructions.

## Table of Contents:

- [Purpose](#purpose)
- [Tools](#tools)
- [Setup](#setup)
- [Frontend Requirements](#frontend-1)
- [Backend Requirements](#backend-1)

## Tools

We are a classic MERN app, with subtle additions to the frontend.

|  Frontend   | Backend |
| :---------: | :-----: |
|    React    | MongoDB |
| TypeScript  |  Node   |
| Material UI | Express |
|    SCSS     |         |

## Setup

### Frontend

1. Clone down the repo
1. Create your own assessment branch:
   - `git checkout -b assess/nov-22-2023/<firstname>-<lastname>`
1. cd into `frontend`
1. run `npm install`
1. run `npm start`

### Backend

1. cd into `backend`
1. run `npm install`
1. run `npm run dev`
1. [Create a new MongoDB Cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)
   1. Make sure you choose the free option!
   1. Feel free to use your own if you already have one.
1. [Connect to your cluster](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)
   1. Select "drivers" as your connection method
   1. Link your connection string to your application in `backend/db/connection.js`

## Requirements

The repository has the bare minimum to get you set up and ready to develop your own screens.

Your mission, <i>should you choose to accept</i>, is to develop the sign up screen for the application.
[Figma Design Link](https://www.figma.com/file/kUfBFCzy7OjucjD9xOAUaZ/Untitled?type=design&node-id=1%3A17074&mode=design&t=0KhWulFNWTv3p0G6-1)

All your work should be focused around:

- Building the UI, adhering to the provided figma
- Developing the backend integration to make the screen functional
- Writing clean, scalable code.
- Maintaining scalable & informative git history.

However, it is <b>not</b> required to complete the entire checklist below. We've identified all applicable tasks and organized them by difficulty.

Feel free to do as much as you can & are comfortable with.

For example:

- If you struggle with setting up the DB then focus on the frontend.

### Frontend <i>(required)</i>

#### Required

- Develop the sign up flow
  - Sign up screen
  - User submits sign up info & is routed to "congrats" screen
- Match [Figma](https://www.figma.com/file/kUfBFCzy7OjucjD9xOAUaZ/Untitled?type=design&node-id=1%3A17074&mode=design&t=0KhWulFNWTv3p0G6-1) styling

#### Bonus

- Verify email onBlur of email input (check if the email already exists in the DB)
- Use React Testing Library to add test coverage for the Sign Up screen functionality

### Backend <i>(optional)</i>

#### Required

- Create user model
- Create controller to create new users

#### Bonus

- Create controller to verify existing emails
