import React from "react";
import { Layout } from "antd";

import LeftSider from "./menu";
import Search from "../components/common/search";

const AppLayout = (props: any) => {
  return (
    <Layout style={{ height: "100%" }}>
      <LeftSider />
      <Layout>
        <Search />
        <Layout.Content>{props.children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
