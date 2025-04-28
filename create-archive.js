/**
 * File Archive Creator
 * 
 * This script creates a list of all files and their contents
 * that you can copy and use to recreate the project elsewhere.
 */

import fs from 'fs';
import path from 'path';

// Configuration - directories/files to skip
const SKIP_DIRS = [
  'node_modules',
  '.git',
  '.cache',
  '.config',
  '.upm',
  'dist',
  '.local'
];
const SKIP_FILES = [
  '.DS_Store',
  'package-lock.json'
];

// Output file
const OUTPUT_FILE = 'project-files.txt';

// Function to recursively list files
function listFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip directories in the ignore list
      if (!SKIP_DIRS.includes(file)) {
        listFiles(filePath, fileList);
      }
    } else {
      // Skip files in the ignore list
      if (!SKIP_FILES.includes(file)) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

// Get all files
console.log('Scanning project files...');
const allFiles = listFiles('.');
console.log(`Found ${allFiles.length} files`);

// Create output string
let output = '# PROJECT ARCHIVE\n\n';
output += 'This file contains all the code for your portfolio project.\n';
output += 'You can copy each file section and recreate the project structure locally.\n\n';
output += `Total files: ${allFiles.length}\n\n`;
output += 'Instructions:\n';
output += '1. Create a new folder for your project\n';
output += '2. For each file listed below, create the necessary folders and the file itself\n';
output += '3. Copy the content between the START/END markers into each file\n';
output += '4. Run `npm install` to install dependencies\n\n';
output += '='.repeat(80) + '\n\n';

// Add each file to the output
for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    output += `## FILE: ${file}\n`;
    output += '-'.repeat(80) + '\n';
    output += 'FILE_START\n';
    output += content;
    output += '\nFILE_END\n\n';
    output += '='.repeat(80) + '\n\n';
  } catch (err) {
    output += `## ERROR reading file: ${file}\n`;
    output += `${err.message}\n\n`;
    output += '='.repeat(80) + '\n\n';
  }
}

// Write to file
fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Archive created in ${OUTPUT_FILE}`);
console.log('You can now copy the contents of this file to recreate your project elsewhere.');