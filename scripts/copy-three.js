const fs = require('fs');
const path = require('path');
const source = require.resolve('three/build/three.min.js');
const targetDir = path.join(__dirname, '..', 'www', 'vendor');
fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, path.join(targetDir, 'three.min.js'));
console.log('Copied Three.js locally for offline use.');
