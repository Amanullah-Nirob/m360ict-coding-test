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
        <div className="filter-box">
          <div className="title">Status</div>
          <div className="filter-radio">
            <FilterBox value={searchParams.get("status")} searchName="status">
              <Space direction="vertical">
                <RadioBox value="failure" title="Failure" />
                <RadioBox value="success" title="Success" />
              </Space>
            </FilterBox>
          </div>
        </div>
        <div className="filter-box">
          <div className="title">Launch Date</div>
          <div className="filter-radio">
            <FilterBox
              value={searchParams.get("launch_date")}
              searchName="launch_date"
            >
              <Space direction="vertical">
                <RadioBox value="last_week" title="Last week" />
                <RadioBox value="last_month" title="Last month" />
                <RadioBox value="last_year" title="Last year" />
              </Space>
            </FilterBox>
          </div>
        </div>
        <div className="filter-box">
          <div className="title">Upcoming Past</div>
          <div className="filter-radio">
            <FilterBox
              value={searchParams.get("upcoming_past")}
              searchName="upcoming_past"
            >
              <Space direction="vertical">
                <RadioBox value="upcoming" title="Upcoming" />
                <RadioBox value="past" title="Past" />
              </Space>
            </FilterBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutSideMenu;
