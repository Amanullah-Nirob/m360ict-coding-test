import { Col, Row, Skeleton } from "antd";

function LaunchSkeleton() {
  const roomsSkeletonArray = Array(50).fill("");
  return (
    <div>
      <Row gutter={[16, 16]}>
        {roomsSkeletonArray.map(() => (
          <Col lg={4}>
            <Skeleton.Button active size="default" shape="default" block />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaunchSkeleton;
