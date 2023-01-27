import { Input } from "antd";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

function SearchRocket() {
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setSearchParams({ [name]: value });
  };
  return (
    <Search
      placeholder="Search By Rocket Name (e.g. Falcon 9, Falcon 1)"
      allowClear
      enterButton="Search"
      size="large"
      style={{ width: "50%" }}
      name="search"
      value={searchParams.get("search") || ""}
      onChange={handleSearchChange}
    />
  );
}

export default SearchRocket;
