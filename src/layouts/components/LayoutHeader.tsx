import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCollapse,
  setIsCollapse,
} from "../../store/slice/collapsMenuSlice";

const { Header } = Layout;
function LayoutHeader() {
  const dispatch = useAppDispatch();
  const isCollapse = useAppSelector(selectCollapse);
  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => dispatch(setIsCollapse(!isCollapse)),
      })}
    </Header>
  );
}

export default LayoutHeader;
