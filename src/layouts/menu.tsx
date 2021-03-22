import React from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { Link, Route, Switch, Redirect } from 'umi'
import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, PlayCircleOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const LINE_HEIGHT = '84px';

export default function (props: any) {
  return (
    <Sider width='' style={{
      position: 'fixed', top: '30px', right: 0, left: '0px', bottom: 0, overflow: 'scroll'
      
    }}>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/']}
        style={{ height: '100%', borderRight: 0, top: '100px' ,background: '#1085F9'}}
      >
        <Menu.Item key="/" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px !important", color:"#FFFDFD"}}>
          <Link to="/" />
          <Row type="flex">
            <HomeOutlined style={{ fontSize: 24, color:'#FFFDFD',display: 'inline-block', verticalAlign: 'middle'  }} />
            {/* <Icon type="play-circle-o" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> */}
          </Row>
          <Row type="flex">
            主页      
          </Row>
        </Menu.Item>
        <Menu.Item key="/user" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px", color:"#FFFDFD"}}>
          <Link to="/user" />
          <Row type="flex">
            <AppstoreOutlined style={{ fontSize: 24, color:'#FFFDFD'  }} />
          </Row>
          <Row type="flex" >
            网络      
          </Row>
        </Menu.Item>
        <Menu.Item key="/3" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px", color:"#FFFDFD"}}>
          <Link to="/3" />
          <Row type="flex">
            <SettingOutlined style={{ fontSize: 24, color:'#FFFDFD'  }} />
          </Row>
          <Row type="flex">
            管家      
          </Row>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
