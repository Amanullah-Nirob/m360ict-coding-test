import { Space } from "antd";
import { useSearchParams } from "react-router-dom";
import FilterBox from "../../components/sideMenu/filterData/FilterBox";
import RadioBox from "../../components/sideMenu/filterData/RadioBox";

function LayoutSideMenu() {
  const [searchParams] = useSearchParams();
  return (
    <div className="sideBar">
      <div className="logo" />
      <div className="menu-content" style={{ color: "#fff" }}>
        <div className="status_filter">
          <div className="title" style={{ marginBottom: "10px" }}>
            Status filter
          </div>
          <FilterBox value={searchParams.get("status")} searchName="status">
            <Space direction="vertical">
              <RadioBox value="Failure" title="Failure" />
              <RadioBox value="success" title="success" />
            </Space>
          </FilterBox>
        </div>
      </div>
    </div>
  );
}

export default LayoutSideMenu;
