import React from "react";
import { Link } from "umi";
import { Layout, Menu } from "antd";
import {
  ReadOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

import styles from "./menu.less";

const MEMU_LIST = [
  {
    key: "home",
    router: "/",
    icon: HomeOutlined,
    text: "主页"
  },
  {
    key: "app",
    router: "/app",
    icon: AppstoreOutlined,
    text: "应用"
  },
  {
    key: "doc",
    router: "/doc",
    icon: ReadOutlined,
    text: "文档"
  },
  {
    key: "setting",
    router: "/setting",
    icon: SettingOutlined,
    text: "设置"
  }
];

export default function() {
  return (
    <Layout.Sider width={70} theme="light" className={styles.wrap}>
      <Menu
        inlineIndent={0}
        mode="inline"
        defaultSelectedKeys={["home"]}
        style={{ height: "100%", paddingTop: 50 }}
      >
        {MEMU_LIST.map((item: any) => (
          <Menu.Item key={item.key} className={styles.menuItem}>
            <Link to={item.router}>
              <div className={styles.icon}>
                <item.icon />
              </div>
              {item.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
}
