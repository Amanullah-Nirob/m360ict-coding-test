import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { formatDate, getDateFormat } from "../../utils/formateDate";

const { Meta } = Card;
function LaunchDataCard({ launch }: any) {
  return (
    <Col xxl={4} lg={6}>
      <Link to={`/singleLaunch/${launch.flight_number}`}>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={
            <img
              alt={launch.mission_name}
              src={launch.links.mission_patch_small}
            />
          }
        >
          <Meta
            title={`${launch.mission_name} - ${launch.rocket.rocket_name}`}
          />
          <div className="launchDate">
            {`Date of launch: ${formatDate(
              new Date(launch.launch_date_unix * 1000),
              getDateFormat(launch.tentative_max_precision, {
                month: "short",
              }),
            )}`}
          </div>
          <div>
            {`Status: ${
              // eslint-disable-next-line no-nested-ternary
              launch.upcoming
                ? "N/A (Upcoming)"
                : launch.launch_success
                ? "Successful"
                : "Failed"
            }`}
          </div>
        </Card>
      </Link>
    </Col>
  );
}

export default LaunchDataCard;
