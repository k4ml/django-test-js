const jsdom = require("jsdom");
const { JSDOM } = jsdom;
process.stdin.setEncoding('utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("jsdomError", (error) => { console.log(error); process.exit(1); });

var HTML = '';
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
      HTML += chunk;
  }
});
process.stdin.on('end', () => {
    console.log('BEGIN');
    var dom = new JSDOM(HTML, { runScripts: "dangerously", resources: "usable", virtualConsole });
    console.log('JS Test: OK');
    process.stdout.write("\n");
});
