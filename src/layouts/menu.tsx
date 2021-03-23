import React from 'react';
import { Link, Route, Switch, Redirect } from 'umi'
import { Layout, Menu, Row, Col } from 'antd';
import { ReadOutlined, HomeOutlined, PlayCircleOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const LINE_HEIGHT = '65px';

export default function (props: any) {
  return (
    <Sider width='' style={{
      position: 'fixed', top: '25px', right: 0, left: '0px', bottom: 0, overflow: 'hidden'
      ,'minHeight': '80vh','backgroundColor': '#90f',display: 'flex','flexDirection': 'column'
    }}>
      <Menu
        inlineIndent={0}
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/']}
        style={{ height: '100%',  padding:'0',width: "65px", borderRight: 0, top: '100px' ,background: '#1085F9'}}
      >
        <Menu.Item key="/" style={{ height: LINE_HEIGHT, padding: "20px 20px 20px 20px !important", color:"#FFFDFD"}}>
          <Link to="/" />
          <div className="item">
            <div className="sd" style={{
              width: '100%', display:'block',height:'33px',
              fontSize: 20,
              }}>
              <HomeOutlined style={{margin:'0px', paddingTop:'10px',fontSize: 24, color:'#FFFDFD',display: 'block', verticalAlign: 'middle'  }} />
            </div> 
            <div className="sd" style={{marginTop:'-5px',textAlign:'center',fontSize: 12, width: '100%', display:'block',height:'33px'}}>
              主页
            </div> 
          </div>
        </Menu.Item>
        <Menu.Item key="/user" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px", color:"#FFFDFD"}}>
          <Link to="/user" />
          <div className="item">
            <div className="sd" style={{
              width: '100%', display:'block',height:'33px',
              fontSize: 20,
              }}>
              <AppstoreOutlined style={{margin:'0px', paddingTop:'10px',fontSize: 24, color:'#FFFDFD',display: 'block', verticalAlign: 'middle'  }} />
            </div> 
            <div className="sd" style={{marginTop:'-5px',textAlign:'center',fontSize: 12, width: '100%', display:'block',height:'33px'}}>
              应用
            </div> 
          </div>
        </Menu.Item>
        <Menu.Item key="/31" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px", color:"#FFFDFD"}}>
          <Link to="/3" />
          <div className="item">
            <div className="sd" style={{
              width: '100%', display:'block',height:'33px',
              fontSize: 20,
              }}>
              <ReadOutlined style={{margin:'0px', paddingTop:'10px',fontSize: 24, color:'#FFFDFD',display: 'block', verticalAlign: 'middle'  }} />
            </div> 
            <div className="sd" style={{marginTop:'-5px',textAlign:'center',fontSize: 12, width: '100%', display:'block',height:'33px'}}>
              文档
            </div> 
          </div>
        </Menu.Item>
        <Menu.Item key="/3" style={{ height: LINE_HEIGHT, padding: "15px 20px 20px 20px", color:"#FFFDFD"}}>
          <Link to="/3" />
          <div className="item">
            <div className="sd" style={{
              width: '100%', display:'block',height:'33px',
              fontSize: 20,
              }}>
              <SettingOutlined style={{margin:'0px', paddingTop:'10px',fontSize: 24, color:'#FFFDFD',display: 'block', verticalAlign: 'middle'  }} />
            </div> 
            <div className="sd" style={{marginTop:'-5px',textAlign:'center',fontSize: 12, width: '100%', display:'block',height:'33px'}}>
              设置
            </div> 
          </div>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
