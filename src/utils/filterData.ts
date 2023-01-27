const filterLaunchData = (
  launches: any,
  searchquery: string | null,
  filterStatusQuery: string | null,
  launchDateQuery: string | null,
  upcomingPastQuery: string | null,
) => {
  let filteredData = launches;
  if (searchquery) {
    filteredData = launches?.filter((rocketData: any) =>
      rocketData.rocket.rocket_name
        .toLowerCase()
        .includes(searchquery.toLowerCase()),
    );
  }

  if (filterStatusQuery) {
    filteredData = launches?.filter(
      (rocketData: any) =>
        rocketData.launch_success === (filterStatusQuery === "success"),
    );
  }
  if (launchDateQuery) {
    const currentTimestamp = Date.now();
    if (launchDateQuery === "last_week") {
      const oneWeekAgo = currentTimestamp - 1095 * 24 * 60 * 60 * 1000;
      filteredData = launches?.filter(
        (launch: any) =>
          launch.launch_date_unix * 1000 >= oneWeekAgo &&
          launch.launch_date_unix * 1000 <= currentTimestamp,
      );
    } else if (launchDateQuery === "last_month") {
      const oneMonthAgo = currentTimestamp - 1460 * 24 * 60 * 60 * 1000;
      filteredData = launches?.filter(
        (launch: any) =>
          launch.launch_date_unix * 1000 >= oneMonthAgo &&
          launch.launch_date_unix * 1000 <= currentTimestamp,
      );
    } else if (launchDateQuery === "last_year") {
      const oneYearAgo = currentTimestamp - 1825 * 24 * 60 * 60 * 1000;
      filteredData = launches?.filter(
        (launch: any) =>
          launch.launch_date_unix * 1000 >= oneYearAgo &&
          launch.launch_date_unix * 1000 <= currentTimestamp,
      );
    }
  }

  if (upcomingPastQuery) {
    if (upcomingPastQuery === "upcoming") {
      console.log(upcomingPastQuery);
      filteredData = launches?.filter(
        (rocketData: any) => rocketData.upcoming === true,
      );
    } else {
      filteredData = launches?.filter(
        (rocketData: any) => rocketData.upcoming === false,
      );
    }
  }
  return filteredData;
};

export default filterLaunchData;
