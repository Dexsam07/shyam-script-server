// Ye code remote fetch hokar user ke bot par chalega
const { default: makeWASocket } = require("@whiskeysockets/baileys");

console.log("🚀 SHYAM-MD V2: Remote Script Loaded Successfully!");

async function startRemoteBot(sock, msg, config) {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const from = msg.key.remoteJid;
    const prefix = config.PREFIX || '.';

    // 1. Auto React Logic
    if (config.AUTO_REACT === "true") {
        await sock.sendMessage(from, { react: { text: "💖", key: msg.key } });
    }

    // 2. Simple Command Example
    if (text === prefix + 'ping') {
        await sock.sendMessage(from, { text: 'SHYAM-MD is Speed! ⚡' });
    }

    // 3. Anti-Link Logic
    if (config.ANTI_LINK === "true" && text.includes("chat.whatsapp.com")) {
        console.log("🚫 Link Detected! Action taken by SHYAM-MD.");
        // Yahan delete logic dalo
    }
}

// Bot ko export karna taaki index.js ise use kar sake
module.exports = { startRemoteBot };
