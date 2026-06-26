const session = process.env.SESSION || 'Ice~NpF8O1';
const mycode = process.env.CODE || "263775614627";
const botname = process.env.BOTNAME || 'Toxic-MD';
const herokuAppName = process.env.HEROKU_APP_NAME || '';

function getHerokuApiKey() {
    return process.env.HEROKU_API_KEY || '';
}

export { session, mycode, botname, herokuAppName, getHerokuApiKey };
