# node-w3-draft

## issues

- `Terminal`

   ```sh
   - install dependencies:
     > npm install

   - run the app:
     > SET DEBUG=<project-name>:* & npm start
   ```

2-2. change to short-name?

   ```markdown
      .
      ├─ <public>       
      │  ├── <scripts>
      │  └── <styles>
   ```

---

## #Step0-init

1. `GitHub`

   ```markdown
    - Create new repo
      - <public>
      - <gitignore> / <node>
   ```

   ```markdown
    - clone to local
      - <root-folder> / <repo-project-name>
   ```

2. `npm`

   ```sh
    npm init -y
   ```

   ```sh
    express
   ```

   ```sh
    Y
   ```

   ```sh
    npm i
   ```

   ```markdown
    
    > - #doc:
    >   - <https://expressjs.com/zh-tw/starter/generator.html>
    
   ```

3. START

   ```sh
    npm start
   ```

   ```sh
    http://localhost:3000
   ```

- browser

   ```sh
    `Welcome to Express`
   ```

---

## #Step1-install

### 1. `npm`

   ```sh
    npm i --save-dev nodemon
   ```

   ```sh
    npm i cors --save
   ```

   ```sh
    npm i mongoose --save
   ```

   ```sh
    npm i dotenv --save
   ```

### 2. files

2-1. new `<folder>`

   ```markdown
      .
      ├─ <controllers>
      ├─ <config>            
      │  ├── mongoose.js
      │  ├── example.env
      │  └── config.env
   ```

### 3. `package.json`

   ```json
    "scripts": {
      "start": "node ./bin/www",
      "dev": "nodemon ./bin/www"
      ...
   ```

### 4. run

- `Terminal`

   ```sh
    npm run dev
   ```

---

## #Step2-`dotenv`

1. Create a `.env` file in the root of your project.

   ```sh
    PORT=3005
    DB_URL=
    DB_USERNAME=
    DB_PASSWORD=
   ```

2. require

   ```JS
    // #XXX: where? `app.js`
    require('dotenv').config()
    // remove this after you've confirmed it working
    // console.log('env:::', process.env) 
   ```

3. custom path

   ```JS
    require('dotenv').config({ path: '/custom/path/to/.env' })
    // dotenv.config({ path: './.env' });
   ```

4. if more setting with custom file name `config.env`

   ```JS
    const dotenv = require('dotenv');
    // console.log('dotenv:::', dotenv);
    dotenv.config({ path: './config.env' });    
    // console.log('PORT:::', process.env.PORT);
   ```

   ```markdown
    - <https://github.com/motdotla/dotenv#path>
   ```

5. #MUST: `.gitignore`

   ```sh
    config.env
   ```

6. check the changed files before commit

- Do NOT include `config.env`

---

## #Step3-`mongoose.js`

1. `dotenv.config`

2. `replace`

3. `connect`

4. check DB

   ```sh
    npm run dev
   ```

---
