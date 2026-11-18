const fs = require('fs').promises;

async function main() {
  try {
    const files = await fs.readdir('.'); //legge i contenuti della cartella
    console.log('Files:', files);

    const content = await fs.readFile('package.json', 'utf-8'); //legge e analizza package.json
    const packageData = JSON.parse(content);

    console.log('Project Name:', packageData.name);
    return packageData.name;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
