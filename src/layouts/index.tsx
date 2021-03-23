import React, { useEffect } from "react"
import styles from './index.less';
import LeftSider from './menu';
import { Link, Route, Switch, Redirect, useLocation } from 'umi'
import { withRouter, IRouteComponentProps } from 'umi';
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

const BasicLayout: React.FC = ({ children, location, route, history, match }: any) => {
  // const location = useLocation()

  useEffect(() => {
    console.log("*", location.pathname)
    console.log("*", route)
    console.log("*", history)
    console.log("*", match) 
    console.log("*--------------")

    var currentNode = document.getElementsByClassName("ant-menu-item-selected")[0] 
    if (currentNode) {
      var nodes = Array.prototype.slice.call( currentNode?.parentNode?.children );
      if (location.pathname!='/' && nodes.indexOf( currentNode ) === 0){
        console.log('redirect /')
        window.location.href='/'
      } 
    }
  }, [])

  return (
    <div>
      <Layout className='main-layout'>
        <MyHeader />
        <Layout>
          <LeftSider />
          <div className={styles.rightcolumn}>
            {children}
          </div>
        </Layout>
        {/* <MyFooter /> */}
      </Layout>
    </div>
  );
};

export default withRouter(BasicLayout);
