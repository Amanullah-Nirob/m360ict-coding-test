import {
  FileDoneOutlined,
  FireOutlined,
  GlobalOutlined,
  StockOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import LaunchHeader from "../../components/singleLaunch/LaunchHeader";
import MediaLink from "../../components/singleLaunch/MediaLink";
import { useSingleLaunchQuery } from "../../store/apiSlice/spacexApi";
import { formatDate, getDateFormat } from "../../utils/formateDate";

function SingleLaunch() {
  const { id } = useParams();
  const { data: launch, isLoading }: any = useSingleLaunchQuery(id);
  console.log(launch);

  interface IMediaLink {
    title: string;
    url: string | null;
    Icon: any;
  }

  const mediaLinks: IMediaLink[] = [
    {
      url: launch?.links.video_link,
      title: "YouTube livestream",
      Icon: <YoutubeOutlined />,
    },
    {
      url: launch?.links.wikipedia,
      title: "Wikipedia",
      Icon: <GlobalOutlined />,
    },
    {
      url: launch?.links.article_link,
      title: "Spaceflight Now article",
      Icon: <FileDoneOutlined />,
    },
    {
      url: launch?.links.reddit_campaign,
      title: "Reddit campaign",
      Icon: <FireOutlined />,
    },
    {
      url: launch?.links.reddit_launch,
      title: "Reddit launch discussion",
      Icon: <StockOutlined />,
    },
  ];
  // eslint-disable-next-line no-restricted-syntax, no-empty
  for (const mLinks of mediaLinks) {
    if (mLinks.url === null) {
      // puts unavailable links at the end
      mediaLinks.forEach((link: any, i) => {
        if (link.url === null) mediaLinks.push(mediaLinks.splice(i, 1)[0]);
      });
    }
  }

  return (
    <div className="singleLaunchMain">
      {!isLoading ? (
        <div className="all-content">
          <LaunchHeader launch={launch} />
          <div className="description">
            <h3 className="title">Description and overview</h3>
            <p className="details">
              {" "}
              {launch.details || "No details are provided yet."}
            </p>
            <div className="social-button-group">
              {mediaLinks?.map((link: any) => (
                <MediaLink link={link} />
              ))}
            </div>
            <div className="info">
              <h3>Basic information</h3>
              <p>
                <span>Name: </span>
                {launch.mission_name}
              </p>
              <p>
                <span>Rocket: </span>
                {launch.rocket.rocket_name}
              </p>
              <p>
                <span>Date of launch:</span>
                {formatDate(
                  new Date(launch.launch_date_unix * 1000),
                  getDateFormat(launch.tentative_max_precision, {
                    month: "short",
                  }),
                )}
              </p>
              <p>
                <span>Rocket Type: </span>
                {launch.rocket.rocket_type}
              </p>
              <p>
                <span>Launchpad:</span> {launch.launch_site.site_name_long}
              </p>
              <p>
                <span>Outcome: </span>{" "}
                {launch.upcoming ? "Successful" : "Failed"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SingleLaunch;
