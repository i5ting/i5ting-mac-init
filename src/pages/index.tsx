import React from "react";
import styles from "./index.less";
import {
  Input,
  Tooltip,
  Avatar,
  Button,
  Space,
  Upload,
  Popconfirm,
  Divider,
  Row,
  Col,
  notification
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import axios from "axios";

const text = "sds";

export default function() {
  const click = async () => {
    const { data } = await axios("http://localhost:3000");
    notification.warn({
      message: "http content",
      description: JSON.stringify(data)
    });
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.header}
        style={{ padding: "10px 0px", float: "right" }}
      >
        <div className={styles.header_left}>
          <Input
            placeholder="input search text"
            prefix={<SearchOutlined />}
            bordered={false}
            size="large"
          />
        </div>
        <div className={styles.header_right}>
          <Tooltip placement="bottomLeft" title={text} color="gray">
            <QuestionCircleOutlined
              style={{
                margin: "0 10px",
                fontSize: 24,
                color: "#C0C0C0",
                verticalAlign: "middle"
              }}
            />
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <MessageOutlined
              style={{
                margin: "0 10px",
                fontSize: 24,
                color: "#C0C0C0",
                verticalAlign: "middle"
              }}
            />
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <SettingOutlined
              style={{
                margin: "0 10px",
                fontSize: 24,
                color: "#A9A9A9",
                verticalAlign: "middle"
              }}
            />
          </Tooltip>
          <Avatar icon={<UserOutlined />} style={{ margin: "0 20px" }} />
        </div>
      </div>
      <Divider />
      <div className={styles.normal}>
        <br />
        <Button onClick={click} type="link">
          Link Button
        </Button>
        <div className={styles.welcome} />
      </div>
    </div>
  );
}
