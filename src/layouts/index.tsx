import React from 'react';
import styles from './index.less';
import LeftSider from './menu';
import { Link, Route, Switch, Redirect } from 'umi'
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const MyHeader = () => {
  return (
    <div className={styles.header}></div>
    // <Header className={styles.header}>
    //   header
    // </Header>
  );
}
const MyFooter = () => {
  return (
    <Footer className={styles.footer}>
      footer
    </Footer>
  );
}

const BasicLayout: React.FC = props => {
  return (
    // <div className={styles.normal}>
    //   <h1 className={styles.title}>Yay! Welcome to umi!</h1>
    //   {props.children}
    // </div>
    <div>
      <Layout className='main-layout'>
        <MyHeader />
        <Layout>
          <LeftSider />
          <div className={styles.rightcolumn}>
            {props.children}
          </div>
        </Layout>
        {/* <MyFooter /> */}
      </Layout>
    </div>
  );
};

export default BasicLayout;
