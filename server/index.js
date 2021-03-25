const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const middleware = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "applaction/json");
  // 文件读写
  const content = fs
    .readFileSync(path.join(__dirname, "../package.json"))
    .toString("utf-8");
  // shell
  const shellContent = cp.execSync("ls").toString("utf-8");

  res.write(JSON.stringify({ content, shellContent }));
  res.end();
};

module.exports = middleware;
