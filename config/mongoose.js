const mongoose = require('mongoose');
const dotenv = require('dotenv');
console.log('This is [mongoose.js].');

const envConfig = dotenv.config({ path: './config/config.env' });
if (envConfig.error) {
  throw envConfig.error;
}
const { DB_URL, DB_USERNAME, DB_PASSWORD, DB_COLLECTIONS } = envConfig.parsed;
/* end of dotenv.config */

const regexDB = /<user>:<password>/giu;
const replaceDB = `${DB_USERNAME}:${DB_PASSWORD}`;

const DB = DB_URL.replace(regexDB, replaceDB);
/**
 * #NOTE: remove these after you've confirmed it working
 */
// console.log(process.env);
// console.log('envConfig:::', envConfig.parsed);
// console.log(DB);
/* end of replace() */

mongoose
  .connect(DB)
  .then(() => {
    console.log(':::資料庫連線成功');
  })
  .catch((error) => {
    console.log('Connecting-ERROR:::', error);
  });
