import {
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { formatDate, getDateFormat } from "../../utils/formateDate";

function LaunchHeader({ launch }: any) {
  console.log(launch.upcoming);

  return (
    <div className="launchHeader">
      <div className="header-content">
        <div className="mission_name">
          <h1>{launch.mission_name}</h1>
        </div>

        <div className="launch-date-status-main">
          <div className="launch-date-status">
            <span>
              <ClockCircleOutlined />
            </span>

            <p>
              {formatDate(
                new Date(launch.launch_date_unix * 1000),
                getDateFormat(launch.tentative_max_precision, {
                  month: "short",
                }),
              )}
            </p>
          </div>
          <div
            className="launch-date-status"
            style={{ background: launch.launch_success ? "green" : "#486e2b" }}
          >
            <span>
              {launch.launch_success ? <CheckOutlined /> : <CloseOutlined />}
            </span>
            <p>
              {/* eslint-disable-next-line no-nested-ternary */}
              {launch.upcoming
                ? "N/A (Upcoming)"
                : launch.launch_success
                ? "Successful"
                : "Failed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchHeader;
