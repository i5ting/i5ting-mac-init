import React from "react";
import { Input, Tooltip, Avatar } from "antd";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";

import styles from "./index.less";

const Search = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Input
          placeholder="input search text"
          prefix={<SearchOutlined />}
          bordered={false}
          size="large"
        />
      </div>
      <div className={styles.header_right}>
        <Tooltip placement="bottomLeft" title={"text"} color="gray">
          <QuestionCircleOutlined className={styles.icon} />
        </Tooltip>
        <Tooltip placement="bottom" title={"text"}>
          <MessageOutlined className={styles.icon} />
        </Tooltip>
        <Tooltip placement="bottomRight" title={"text"}>
          <SettingOutlined className={styles.icon} />
        </Tooltip>
        <Avatar icon={<UserOutlined />} style={{ margin: "0 20px" }} />
      </div>
    </div>
  );
};

export default Search;
