import { Layout, theme } from "antd";
import "../index.css";
import { useLaunchesQuery } from "../store/apiSlice/spacexApi";
import { useAppSelector } from "../store/hooks";
import { selectCollapse } from "../store/slice/collapsMenuSlice";
import LayoutHeader from "./components/LayoutHeader";
import LayoutMainContent from "./components/LayoutMainContent";
import LayoutSideMenu from "./components/LayoutSideMenu";

const { Sider, Content } = Layout;

function LayoutIndex() {
  // isLoading, isFetching, error, isSuccess
  const { data } = useLaunchesQuery();
  console.log(data);
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
            margin: "24px 16px",
            padding: 24,
            minHeight: "88.3vh",
            background: colorBgContainer,
          }}
        >
          <LayoutMainContent />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutIndex;
