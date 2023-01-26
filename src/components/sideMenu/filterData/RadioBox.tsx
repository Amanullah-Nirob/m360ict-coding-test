import { Radio } from "antd";

interface Props {
  value: string;
  title: string;
}
function RadioBox({ value, title }: Props) {
  return (
    <Radio value={value}>
      <span style={{ color: "green" }}>{title}</span>
    </Radio>
  );
}

export default RadioBox;
