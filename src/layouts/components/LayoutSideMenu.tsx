import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function LayoutSideMenu() {
  return (
    <div className="logo">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </div>
  );
}

export default LayoutSideMenu;