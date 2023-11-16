<div align="center">
    <a href="https://junior-prep.vercel.app/" style="display:flex;padding:20px;background-color:black; justify-content:center">
    <img src="public/images/logo.png" width="300px"/>
    </a>
    <h1>Ace Your Interviews with Junior-Prep.</h1>
    
    
  **Live App Demo** : [https://junior-prep.vercel.app/](https://junior-prep.vercel.app/)
    <img src="./public/images/jp-dashboard.png" width="700px" />

</div>

# about

junior-prep is a website for junior web developers to practice interview questions, record your progress and find teams to collaborate with

## Features

- practice interview questions

  - anki like system to study
  - relevant and updated questions
  - track your daily progress

- Find Teams working on portfolio worthy projects
  - learn how to collaborate with a team
  - find the role that suits you best:
    - designer (not only design but also track the progress of the project and asure the best user experience)
    - frontend
    - backend
    - senior (learn how to lead a team and make the first step towards becoming a lead develoepr)

## How can I contribute?

- you can report issues in our website here [issues](https://github.com/polymahh/junior-prep/issues)
- you can suggest new questions/answers as an [issue](https://github.com/polymahh/junior-prep/issues/new)
  start your issue's title with (card suggestion)

(below are the steps to run this website locally)

## Getting started

###Prerequisites
Before you begin, keep in mind I am using:

- Node v18.16.0
- npm v9.5.1

you need to create a .env file with these variables :

```bash
# nextAuth variables
GOOGLE_CLIENT_ID = ""
GOOGLE_CLIENT_SECRET= ""
NEXTAUTH_URL= "http://localhost:3000"
NEXTAUTH_SECRET= ""

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
```

#### Step 1: Clone the repository

```bash
git clone https://github.com/polymahh/junior-prep.git
```

In your terminal, navigate to the project and run the following command to install all dependencies:

```bash
npm install
```

#### Step 1: Setup Prisma

```bash
npx prisma db push
npx prisma generate
```

- to test prisma

```bash
npx prisma studio
```

#### Step 1: run the Nextjs Project

```bash
npm run dev
```

and you'll be able to access the website on localhost:3000 in your browser.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
