import { Button, Input, Space } from "antd";
const { Search } = Input;
export default function Filter({
  onSearch,
  onRefresh,
  showDrawer,
  selectItem,
  hide
}) {
  
  return (
    <>
      <div className="search">
       {hide ? <Search
          placeholder="Search user"
          allowClear
          enterButton="Search"
          size="large"
          style={{ width: 400 }}
          onSearch={onSearch}
        />:<div></div>}
      </div>
      <div className="action">
        <Space>{selectItem}</Space>
        <Button className="create" type="primary" onClick={showDrawer}>
          Create
        </Button>
        <Button onClick={onRefresh} className="refresh" type="primary">
          Refresh
        </Button>
      </div>
    </>
  );
}