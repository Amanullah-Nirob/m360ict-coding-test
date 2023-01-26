import { Layout, theme } from "antd";
import "../index.css";
import { useAppSelector } from "../store/hooks";
import { selectCollapse } from "../store/slice/collapsMenuSlice";
import LayoutFooter from "./components/LayoutFooter";
import LayoutHeader from "./components/LayoutHeader";
import LayoutMainContent from "./components/LayoutMainContent";
import LayoutSideMenu from "./components/LayoutSideMenu";

const { Sider, Content } = Layout;

function LayoutIndex() {
  const isCollapse = useAppSelector(selectCollapse);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={isCollapse} width={220}>
        <LayoutSideMenu />
      </Sider>
      <Layout className="site-layout">
        <LayoutHeader />
        <Content
          style={{
            margin: "15px 13px",
            padding: 24,
            boxShadow: "0 0 12px #0000000d",
            border: "1px solid #e4e7ed",
            borderRadius: "4px",
            height: "100%",
            background: colorBgContainer,
          }}
        >
          <LayoutMainContent />
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}

export default LayoutIndex;
