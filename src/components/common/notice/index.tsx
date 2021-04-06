import React from "react";
import styles from "./index.less";

const Notice = (props: any) => {
  const IMGS: any = {
    unsupport:
      "https://img.alicdn.com/imgextra/i2/O1CN01YaXbLy1FgpQLSrcHy_!!6000000000517-2-tps-309-302.png",
    noData:
      "https://img.alicdn.com/imgextra/i4/O1CN012R8eMj1bwmlnxizFA_!!6000000003530-2-tps-309-303.png",
    noPermission:
      "https://img.alicdn.com/imgextra/i4/O1CN013kmxbo1RXv6sRmZ1Z_!!6000000002122-2-tps-311-304.png"
  };

  const { text, type, style } = props;
  return (
    <div className={styles.wrap} style={style || {}}>
      <img src={IMGS[type]}></img>
      <div className={styles.text}>{text || "功能暂未开放，敬请期待"}</div>
    </div>
  );
};

export default Notice;
