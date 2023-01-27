import { Col, Row, Skeleton } from "antd";

function LaunchSkeleton() {
  const roomsSkeletonArray = Array(50);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {roomsSkeletonArray.map((number) => (
          <Col lg={4} key={number}>
            <Skeleton.Button active size="default" shape="default" block />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaunchSkeleton;
