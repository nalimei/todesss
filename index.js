// 读取文件内容并输出到控制台
function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return;
      }
      console.log('File content:', data);
  });
}

// 写入内容到文件
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          return;
      }
      console.log('File written successfully.');
  });
}