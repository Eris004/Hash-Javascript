const crypto = require('crypto');

function generateHash(text, algorithm = 'sha256') {
    return crypto.createHash(algorithm).update(text, 'utf8').digest('hex');
}

const text = prompt("Enter text to hash:");
const algorithm = prompt("Enter hash algorithm (default sha256):") || 'sha256';
console.log(`Hash: ${generateHash(text, algorithm)}`);
