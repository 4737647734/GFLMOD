let Canvas;
try {
    Canvas = require('canvas');
} catch (err) {
    console.error("[Color Command] The 'canvas' module is not installed.");
    console.error("Install it with: npm install canvas");
    Canvas = null;
}

module.exports = {
    name: "color",
    description: "Generate a color image",
    async execute(message, args) {
        if (!Canvas) {
            return message.reply("❌ This command requires the 'canvas' module. Please install it using:\n```npm install canvas```");
        }

        // Your existing color.js logic goes here
    }
};
