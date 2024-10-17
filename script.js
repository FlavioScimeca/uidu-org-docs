const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const dirPath = 'content/docs/';
const outputZip = fs.createWriteStream('extracted_docs.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }, // Sets the compression level.
});

// Listen for archive completion
outputZip.on('close', function () {
  console.log(
    `Archive created successfully. Total size: ${archive.pointer()} bytes`
  );
});

// Handle errors
archive.on('error', function (err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(outputZip);

// Function to read and add files to the archive
function addFilesToArchive(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      addFilesToArchive(fullPath); // Recursively add subdirectories
    } else if (path.extname(fullPath) === '.mdx') {
      // Add file to archive
      const fileStream = fs.createReadStream(fullPath);
      const archivePath = path.relative(dirPath, fullPath); // Preserve folder structure
      archive.append(fileStream, { name: archivePath });
    }
  });
}

// Start adding files
addFilesToArchive(dirPath);

// Finalize the archive (this is important)
archive.finalize();
