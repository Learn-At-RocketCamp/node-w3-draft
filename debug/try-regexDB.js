/**
 * #HACK: no urgent
 */

const DB_URL = `mongodb+srv://<user>:<password>@clusterw0.ox68q.mongodb.net/<name>`;
const DB_USERNAME = 'aaa';
const DB_PASSWORD = 'bb';

// const DB = DB_URL.replace('<password>', DB_PASSWORD);
// console.log(DB);

const regexDB = /<user>:<password>/giu;
const replaceDB = `${DB_USERNAME}:${DB_PASSWORD}`;

// #NOTE: dotenv parse do trim already
// const envDB = DB_URL.toString().trim();

const DB = DB_URL.replace(regexDB, replaceDB);
console.log(DB);

// const result = DB.replace(regex, (match, index, originalString) => {
//   console.log(match, index, originalString);
//   return `${DB_USERNAME}:${DB_PASSWORD}`;
// });
// console.log(result);

// TestScript
'JavaScript'.replace(/Java/, (match, index, originalString) => {
  console.log(match, index, originalString);
  return 'Test';
});

//Test
console.log(
  '2015-01-02'.replace(
    /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/,
    (match, year, month, day, index, originalString) => {
      console.log(match, year, month, day, index, originalString);
      return 'Test';
    }
  )
);
