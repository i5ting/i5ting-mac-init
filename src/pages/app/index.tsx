import React, { useState } from "react";
import {
  Tabs,
  List,
  Avatar,
  Button,
  message,
  Progress,
  Modal,
  Collapse,
  Result
} from "antd";

import appList from "../../mock/apps";
// IPC example
// import Fetcher from '../../fetcher';
import socketClient from "../../fetcher/socket_client";

import styles from "./index.less";

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

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resultInfo, setResultInfo] = useState<any>();
  const [currentApp, setCurrentApp] = useState<any>();

  const install = async (app: any) => {
    if (currentApp) {
      message.info(`${app.title} 安装中`);
      return;
    }
    // IPC example
    // Fetcher.installApp(app)
    console.log("send message to main");
    setCurrentApp(app);
    socketClient.emit("install_app", app, (res: any) => {
      message.success(`app ${app.title} now is installing!`);
    });
    resHandler(app);
  };

  const renderModal = () => {
    if (!resultInfo || !currentApp) return "";
    return (
      <Modal
        title={null}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setCurrentApp(null)}
        width={300}
      >
        <Result
          status="success"
          title={`${currentApp.title} 安装成功`}
          subTitle={currentApp.description}
          extra={[
            <Button
              type="primary"
              onClick={() => {
                setIsModalVisible(false);
                setCurrentApp(null);
              }}
            >
              已阅
            </Button>
          ]}
        />
      </Modal>
    );
  };

  const resHandler = (app: any) => {
    const EVENT = "install_app_result";
    let result = "";
    socketClient.on(EVENT, (content: any) => {
      const { err, res } = content;
      if (err) {
        message.error(`install ${app.title} fail, msg is ${String(err)}`);
      }
      result += res.msg;

      if (res.status === "finished") {
        setResultInfo({ [app.id]: result });
        setIsModalVisible(true);
      }
    });
  };

  const renderList = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={appList}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.img} />}
              title={
                <div className={styles.appTitle}>
                  <a target="__blank" href={item.url}>
                    {item.title}
                  </a>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => install(item)}
                  >
                    安装
                  </Button>
                </div>
              }
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

  return (
    <div className={styles.main}>
      {renderModal()}
      <div className={styles.tabsWrapper}>{renderMenu()}</div>
    </div>
  );
};
