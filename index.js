const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    try {
        // Tumhari main script file ka path
        const scriptPath = path.join(__dirname, '..', 'shyam.js');
        const scriptContent = fs.readFileSync(scriptPath, 'utf8');

        // Headers set karna taaki code text ke roop mein mile
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(scriptContent);
    } catch (error) {
        res.status(500).send("console.log('❌ Server Error: Script not found')");
    }
};
