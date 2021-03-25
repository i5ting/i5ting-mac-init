import React from 'react';
import styles from './index.less';
import { Input, Tooltip, Avatar, Button, Space, Upload, Popconfirm, Divider, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { SearchOutlined, QuestionCircleOutlined, MessageOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

// const { remote, ipcRenderer } = window.require('electron')

// var shell = require('shelljs');
// let nodePath = (shell.which('node').toString());
// shell.config.execPath = nodePath;


const text = <span>prompt text</span>;

const buttonWidth = 70;

function oneClick(){
  alert(1)
  // shell.exec('git');
}

export default function () {
  return (
    <div className={styles.main}>
      <div className={styles.header} style={{ padding: '10px 0px', float: 'right' }}>
        <div className={styles.header_left} >
          <Input placeholder="input search text" prefix={<SearchOutlined />} bordered={false} size="large" />
        </div>
        <div className={styles.header_right} >
          <Tooltip placement="bottomLeft" title={text} color='gray'>
            <QuestionCircleOutlined style={{ margin: '0 10px', fontSize: 24, color: '#C0C0C0', verticalAlign: 'middle' }} />
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <MessageOutlined style={{ margin: '0 10px', fontSize: 24, color: '#C0C0C0', verticalAlign: 'middle' }} />
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <SettingOutlined style={{ margin: '0 10px', fontSize: 24, color: '#A9A9A9', verticalAlign: 'middle' }} />
          </Tooltip>
          <Avatar icon={<UserOutlined />} style={{ margin: '0 20px' }} />
        </div>
      </div>
      <Divider />
      <div className={styles.normal}>
        <br />
        <h1>常用Shell命令</h1>
        <div className="demo" style={{ marginLeft:'200px' }}>
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Button onClick={oneClick} >第一个</Button>
            <Button>Top</Button>
            <Button>TR</Button>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Button>TL</Button>
            <Button>Top</Button>
            <Button>TR</Button>
          </div>
          <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
            <Button>TL</Button>
            <Button>Top</Button>
            <Button>TR</Button>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Tooltip placement="bottomLeft" title={text}>
              <Button>BL</Button>
            </Tooltip>
            <Tooltip placement="bottom" title={text}>
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip placement="bottomRight" title={text}>
              <Button>BR</Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.welcome} />
      </div>
    </div>
  );
}
