import { ClockCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { formatDate, getDateFormat } from "../../utils/formateDate";

function LaunchHeader({ launch }: any) {
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
              <p>
                {formatDate(
                  new Date(launch.launch_date_unix * 1000),
                  getDateFormat(launch.tentative_max_precision, {
                    month: "short",
                  }),
                )}
              </p>
            </p>
          </div>
          <div className="launch-date-status status">
            <span>
              <CloseOutlined />
            </span>
            <p>
              <p>
                {formatDate(
                  new Date(launch.launch_date_unix * 1000),
                  getDateFormat(launch.tentative_max_precision, {
                    month: "short",
                  }),
                )}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchHeader;
