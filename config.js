const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtCdGNCSmh0WHBxN1BseEFXZXAvSjdiblFCUXYrbVBPVUFxUkxsN05rdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2RxZjNIcmlDK0lHWWlzR2lJNXFkTGVsdTJsSkRSWERNVlhBeHdReU0zTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQXZxdEx4VVk0dWUwSEtDUmhsUXpEWVdsb0k2dG9WeHlOeEZTYWpFMG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRHcrMm1FNnNjMGd6VDJZbU5XT0U3dFVnQm9jbVltQkMyU0pWWERqK2tRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOT2Mwd3RXenJReHAwVkV5RGUxcVpCZVdtdzZtdGFhb05XUmlyZUFEWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJwS1VpOEZTWU1Qakc1V1V1YVMwZU5PNFEreSt1VlNMR2FtU0FIaTZaVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xWMEU5OWFMSElnbkozM1ZrRnRHUlB3YTFDU3NTbXFOc2FKSUdoTkZHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhMQ1o4S2cwK29Scm82RzRRNC9BLzFSL0xTTUtWUm5ibG9aM0ZWNW13WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIzeHJHMVdqbmhtYzNTNlFmZzhuNjF3d3dqc01PajVybWZqNy9OR1REbjl6elIwMHk1YTh0bXo3MVpvdEdjUytNeHM4K2tkUUY3dGNLSmNHNDNzNWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IjNDTmlVd3g3Yy9LMjJyK05EcU5FbDFBVjV4MW1IYWRBdmlrRzMwMXlWdzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNHRFI4eGkzUzFHalZDTi1YSUt4OXciLCJwaG9uZUlkIjoiNjhiMmYwMTAtZDJhNC00MWQ4LTgxMDQtZDZiZjc5NmM2MTZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QS21jOWIvZ1ZPclptaG5adDdGb29keUxsMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSlNIOXlQNDdRckVueE4vWE9uYzN5MkYxZUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVlFN0JZM04iLCJtZSI6eyJpZCI6IjIzNDgwNzE2NDc4NjA6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidW5rbm93biJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnEyMk9NREVKYlFuTDRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieTZPOFJ3UStDYnFJN2c1ZmRoUkRDVVdQMHJQd0M1UllSR2JWL2RBaUpIUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkRqRUl0TFdWVWFxTnRLRlJxTkZzNUQxN0hHdUREYXZ4cE9UblZaemZldTIrYUloMFM1T3JvWlk3YUszcVNGaUg1bFVReitrZmx3M1NDOW5iNVVBQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjZaTFlYbTBrNUVaTGxidmxxT3BpazFmRm5zNndyek9hVmM5YWhwK2tUblk5TUdPM3lmdE52TG1vRkQvR01hWktoTHF5SFVyRzZKWHZ0T2FFd0JXNmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA3MTY0Nzg2MDo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjdWp2RWNFUGdtNmlPNE9YM1lVUXdsRmo5S3o4QXVVV0VSbTFmM1FJaVIwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMTA1MTg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9ZUCJ9",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ CASEYRHODES ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254112192119",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ CASEYRHODES ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ CASEYRHODES ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/PEZ5QL2.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> SILVA SPARK IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING CASEYRHODES XMD FROM CASEYRHODES TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by CASEYRHODES XMD 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
