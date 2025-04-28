/**
 * GitHub Upload Helper Script
 * 
 * This script helps you push your portfolio website to GitHub.
 * Run this on your local machine after downloading the files from Replit.
 * 
 * Prerequisites:
 * - Node.js installed
 * - Git installed
 * - GitHub CLI (optional)
 */

const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== GitHub Portfolio Uploader ===');
console.log('This script will help you push your portfolio to GitHub.');
console.log('Make sure you have Git installed and are in the project directory.\n');

// Ask for GitHub information
rl.question('Enter your GitHub username: ', (username) => {
  rl.question('Enter your repository name (e.g., Portfolio): ', (repoName) => {
    console.log(`\nPreparing to upload to github.com/${username}/${repoName}...\n`);
    
    // Series of Git commands to execute
    const commands = [
      'git init',
      'git add .',
      'git commit -m "Initial commit of portfolio website"',
      'git branch -M main',
      `git remote add origin https://github.com/${username}/${repoName}.git`,
      'git push -u origin main'
    ];
    
    console.log('Executing the following commands:');
    commands.forEach(cmd => console.log(`> ${cmd}`));
    
    // Ask for confirmation before proceeding
    rl.question('\nContinue? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        executeCommands(commands, 0);
      } else {
        console.log('Upload canceled.');
        rl.close();
      }
    });
  });
});

// Execute commands in sequence
function executeCommands(commands, index) {
  if (index >= commands.length) {
    console.log('\n✅ Successfully pushed to GitHub!');
    console.log(`Your portfolio is now available at: https://github.com/batrapulkit/Portfolio`);
    console.log('\nNext steps:');
    console.log('1. Set up GitHub Pages in your repository settings');
    console.log('2. Your site will be available at https://batrapulkit.github.io/Portfolio/');
    rl.close();
    return;
  }
  
  const command = commands[index];
  console.log(`\nExecuting: ${command}`);
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`⚠️ Error: ${error.message}`);
      console.log('\nTroubleshooting tips:');
      
      if (error.message.includes('already exists')) {
        console.log('- The repository might already be initialized. Try the next command.');
        executeCommands(commands, index + 1);
      } else if (error.message.includes('remote origin already exists')) {
        console.log('- Remote already exists. Skipping this step.');
        executeCommands(commands, index + 1);
      } else if (error.message.includes('Authentication failed')) {
        console.log('- GitHub authentication failed. Check your credentials.');
        console.log('- Consider using a personal access token or SSH key.');
        rl.close();
      } else {
        console.log('- Check your internet connection');
        console.log('- Verify you have the correct permissions for the repository');
        console.log('- Make sure Git is installed and properly configured');
        rl.close();
      }
      return;
    }
    
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    
    // Continue with next command
    executeCommands(commands, index + 1);
  });
}