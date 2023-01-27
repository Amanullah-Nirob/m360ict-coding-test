import {
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Avatar, Image, Layout } from "antd";
import React from "react";
import SearchRocket from "../../components/search/SearchRocket";
import { useAppSelector } from "../../store/hooks";
import { selectCollapse } from "../../store/slice/collapsMenuSlice";

const { Header } = Layout;
function LayoutHeader() {
  const isCollapse = useAppSelector(selectCollapse);
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
      })}
      <SearchRocket />
      <div className="header-other">
        <div className="translate">
          <TranslationOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="full-screen">
          <FullscreenOutlined />
        </div>
        <div className="avater">
          <p>Amanullah</p>
          <Avatar
            size={45}
            src={<Image src="/img/aman.png" style={{ width: 45 }} />}
          />
        </div>
      </div>
    </Header>
  );
}

export default LayoutHeader;
