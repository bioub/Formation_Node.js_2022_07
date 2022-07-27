const fs = require('fs/promises');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const horlogeBuffer = await fs.readFile(horlogeJsPath);
  const indexBuffer = await fs.readFile(indexJsPath);

  await fs.appendFile(appJsDistPath, horlogeBuffer);
  await fs.appendFile(appJsDistPath, indexBuffer);
}

async function buildHtml() {
  const indexHtmlBuffer = await fs.readFile(indexHtmlPath);

  let contentStr = indexHtmlBuffer.toString('utf-8');

  contentStr = contentStr
    .replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
    .replace('<script src="./js/index.js"></script>', '');

  await fs.writeFile(indexHtmlDistPath, contentStr);
}

async function build() {
  await rmAndMkdir(distPath);
  await buildJs();
  await buildHtml();
}

build();
