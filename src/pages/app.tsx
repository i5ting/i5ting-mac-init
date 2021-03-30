import React from "react";
import styles from "./app.less";
import { notification, Tabs, List, Avatar } from "antd";
// import axios from "axios";

const MENU = [
  {
    text: "热门",
    key: "hot"
  },
  {
    text: "推荐",
    key: "recommend"
  },
  {
    text: "常用",
    key: "common"
  }
];

export default function() {
  const appList = [
    {
      img:
        "https://img.alicdn.com/imgextra/i1/O1CN01WpGunQ1YvvBf6GOEC_!!6000000003122-2-tps-512-512.png",
      title: "Item2",
      url: "https://iterm2.com/",
      description:
        "一款功能强大的终端模拟器，支持窗口分割、热键、搜索、自动补齐、无鼠标复制、历史粘贴、即时重播等功能"
    },
    {
      img:
        "https://img.alicdn.com/imgextra/i2/O1CN01N5HaEF1p1uDOgxdFT_!!6000000005301-0-tps-225-225.jpg",
      title: "VSCode",
      url: "https://code.visualstudio.com/",
      description:
        "VSCode 全称 Visual Studio Code，是微软出的一款轻量级代码编辑器，免费、开源而且功能强大"
    }
  ];

  const renderList = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={appList}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.img} />}
              title={<a href={item.url}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  };

  const renderMenu = () => {
    const { TabPane } = Tabs;
    return (
      <Tabs tabPosition={"left"}>
        {MENU.map(item => (
          <TabPane
            key={item.key}
            className={styles.leftMenuItem}
            tab={item.text}
          >
            {renderList()}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  const click = async () => {
    const { data } = {}//await axios("http://localhost:3000");
    notification.warn({
      message: "http content",
      description: JSON.stringify(data)
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.tabsWrapper}>{renderMenu()}</div>
    </div>
  );
}
