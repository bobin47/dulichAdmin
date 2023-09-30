import React, { useState } from "react";
import { Divider, Layout } from "antd";
import "./index.css";
import SiderCustom from "./components/SiderCustom/SiderCustom";
import HeaderCustom from "./components/HeaderCustom/HeaderCustom";

const { Header, Sider, Content } = Layout;

export default function LayoutAdmin({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="header"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <SiderCustom />
      </Sider>
      <Layout>
        <Header className="header" style={{backgroundColor:"white"}}>
          <HeaderCustom />
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}