import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  value: string | null;
  searchName: string;
  children: ReactElement[] | ReactElement;
}
function FilterBox({ value, children, searchName }: Props) {
  const [, setSearchParams] = useSearchParams();
  const handleChangeFilter = (e: RadioChangeEvent) => {
    setSearchParams({ [searchName]: e.target.value });
  };
  return (
    <div>
      <Radio.Group onChange={handleChangeFilter} value={value}>
        {children}
      </Radio.Group>
    </div>
  );
}

export default FilterBox;
