//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,2250565647864";
global.owner = process.env.OWNER_NUMBER || "2250565647864,255745086279";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURaS1NacTJNZnpoVStKcUpBMVZYZHhDVFpNKzJ0TEN4bTh5VlR5WDEwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQktBTUVKUGg3T1dRYXZKaW11V0k0QTh6Uk51QVhMNGN4MG92c2IwQXZYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR3l2ZmNDWFFpSkVGTGRNcjMyakJwMm1CZDJHSHl0L3VXN0EzelZVMkdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNGJoanR0YXlETnp0WmdjMVgzbS95eXkrUXp4c2hpckREd2UzeVNYMlZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCdHZ0K08xelYxaERKdVNRempuaXVCcEJIamtoQ3ZrU2ovUHlvdWxPMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpUcngyeU9ubzRkRzQ2cXZXTllBSk9LNWJSM2kyMkVmd1NMc3lkRU93SGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RIKy9HWUMwU0dYOEplU1RpQ2NocW1VZGh3OThCR2hBNGIyUmpOcm8yWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFEvVjh4ZE1oTjk5aXBOdWlZT3VYeGQxUnZzWnVETFVrVzVIL1ZPL0ZRdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9HbDdwblowdWdhOHppbGdZTUU5czF4NWR6N3Z4ZlgvcEYxWTFBYkh5WG1oajNja1lnMWEwYWJoeEJMOVZ3eGEyTENRUkVLTXE4WkNidnZpeW53dENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJadGNNckZmVmEzL1lqN2hpUWd0SGM1MGZ2cEJJNjczUHBmaGFaTkZvbmVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJSmVJdlFzZlNhQ2lKSU9qTjc3VzJBIiwicGhvbmVJZCI6ImRhNTE0ZjUwLTMxOWEtNDU3MC05Zjc0LTc3Y2VkZDg4NzA3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEb3BqWHR6eDlVUXZxTm90SHFWb2dkVnQzRFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWtKQXp6bDZnMzZrVTUwWDhQOUpEeTZpRmVVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJFRVI5OU5TIiwibWUiOnsiaWQiOiIyMjU2NTY0Nzg2NDoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDiXRlcm5lbCBBcmltYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdueGJjTkVMYXJ5YmdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRE4rVGRrc0J3a2RTY3psZlV1SUIxQ0hCc0EyanIvbys1Q1dSaDVidENIND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY3Fzc1Rwd04zaExVbUFwcEllOEt3cmV0aWx2bndBWTR2eld0UFFmOFh2a3pEVlhFL2tqaC9TemptZTVsZmRBa0JTN2NXakdhc3VONnMxOHdGbWYxamc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNGMy80aXh3Rmh4cmgrbnFmamhNZWxnT1ZkU2NIaFQzL0M1K3NBVXk4eGFOckJ2bFl2WVVicHlTcjRDUllXK1doL0hvOXdkSUJtTnZ4ejNReFJ2bkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NjU2NDc4NjQ6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXpmazNaTEFjSkhVbk01WDFMaUFkUWh3YkFObzYvNlB1UWxrWWVXN1FoKyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI1NDg1MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
