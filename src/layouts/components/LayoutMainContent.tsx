import { Row } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LaunchSkeleton from "../../components/common/Skeleton/LaunchSkeleton";
import LaunchDataCard from "../../components/launchDataCard/LaunchDataCard";
import { useLaunchesQuery } from "../../store/apiSlice/spacexApi";

import filterLaunchData from "../../utils/filterData";

function LayoutMainContent() {
  const { data: launches, isLoading } = useLaunchesQuery();
  const [launchesData, setLaunchesData] = useState([]);
  const [searchParams] = useSearchParams();
  const searchquery = searchParams.get("search");
  const filterStatusQuery = searchParams.get("status");
  const launchDateQuery = searchParams.get("launch_date");
  const upcomingPastQuery = searchParams.get("upcoming_past");

  useEffect(() => {
    if (searchParams) {
      const filteredData = filterLaunchData(
        launches,
        searchquery,
        filterStatusQuery,
        launchDateQuery,
        upcomingPastQuery,
      );
      setLaunchesData(filteredData);
    } else {
      setLaunchesData(launches);
    }
  }, [searchParams, launches]);

  return (
    <div className="main-content-box">
      {!isLoading ? (
        <div>
          <p
            style={{ margin: "0", marginBottom: "10px" }}
          >{`Filter (${launchesData?.length})`}</p>
          {launchesData?.length > 0 ? (
            <Row gutter={[16, 16]}>
              {launchesData?.map((launch: any) => (
                <LaunchDataCard key={launch.mission_name} launch={launch} />
              ))}
            </Row>
          ) : (
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              No data found
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
