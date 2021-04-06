const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const debug = require("debug")("installApp");

module.exports = (app, callback) => {
  const result = {
    id: app.id,
    status: "success",
    msg: "Error: some error"
  };
  const { pack, title } = app;

  if (!pack || !pack.type || !pack.name) {
    const err = new Error(`${JSON.stringify(pack)} is invalid`);
    result.status = "fail";
    result.msg = String(err);
    callback(err, result);
    return;
  }

  const { type, name } = pack;
  const packPath = path.join(__dirname, `../../pack/${name}`);

  if (!fs.existsSync(packPath)) {
    debug(`pack not exists, path is ${packPath}`);
    const err = new Error(`pack not exists, path is ${packPath}`);
    result.status = "fail";
    result.msg = String(err);
    callback(err, result);
    return;
  }

  if (type === "zip") {
    debug(`get pack title is ${title}, name is ${name}, type is ${type}`);
    const unzipFileName = `${path.dirname(packPath)}/unzip/${path.basename(
      packPath,
      ".zip"
    )}`;
    if (fs.existsSync(unzipFileName)) {
      cp.execSync(`rm -rf ${unzipFileName}`);
    }
    const command = `unzip ${packPath} -d ${unzipFileName} && open ${unzipFileName}/${path.basename(
      packPath,
      ".zip"
    )}.app`;
    debug(`command is ${command}`);

    const stdout = cp.spawn(command, { shell: true });
    stdout.stdout.on("data", data => {
      result.msg = data.toString();
      callback(null, result);
      debug(data.toString());
    });

    stdout.stderr.on("data", data => {
      result.msg = data;
      result.status = "fail";
      callback(new Error("stderr"), result);
    });

    stdout.stderr.on("close", code => {
      result.msg = `close with code: ${code}`;
      result.status = "finished";
      callback(null, result);
    });
  } else {
    // TODO 其他文件类型，如 .rar .dmg
  }
};
