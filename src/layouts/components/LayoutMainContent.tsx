import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LaunchSkeleton from "../../components/common/Skeleton/LaunchSkeleton";
import { useLaunchesQuery } from "../../store/apiSlice/spacexApi";
import { formatDate, getDateFormat } from "../../utils/formateDate";

const { Meta } = Card;
function LayoutMainContent() {
  const { data: launches, isLoading } = useLaunchesQuery();
  const [launchesData, setLaunchesData] = useState([]);
  const [searchParams] = useSearchParams();
  const searchquery = searchParams.get("search");
  const filterStatus = searchParams.get("status");

  // if search By Rocket Name
  useEffect(() => {
    if (searchquery) {
      const filterData = launches?.filter((rocketData: any) =>
        rocketData.rocket.rocket_name
          .toLowerCase()
          .includes(searchquery.toLowerCase()),
      );
      setLaunchesData(filterData);
    }
    if (filterStatus) {
      const filterData = launches?.filter(
        (rocketData: any) =>
          rocketData.launch_success === (filterStatus === "success"),
      );
      setLaunchesData(filterData);
    } else {
      setLaunchesData(launches);
    }
  }, [searchParams, launches]);

  return (
    <div className="main-content-box">
      {!isLoading ? (
        <div>
          {launchesData?.length > 0 ? (
            <Row gutter={[16, 16]}>
              {launchesData?.map((launch: any) => (
                <Col key={launch.mission_name} lg={4}>
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
                    <div>
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
                </Col>
              ))}
            </Row>
          ) : (
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              Your search{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                {searchquery}
              </span>{" "}
              did not match any Rocket Name
            </div>
          )}
        </div>
      ) : (
        <LaunchSkeleton />
      )}
    </div>
  );
}

export default LayoutMainContent;
