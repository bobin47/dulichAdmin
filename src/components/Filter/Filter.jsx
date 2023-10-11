import { Button, Input, Space } from "antd";
const { Search } = Input;
export default function Filter({
  onSearch,
  onRefresh,
  showDrawer,
  selectItem,
  hide,
  onCreate = true
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
        {onCreate ? <Button className="create" type="primary" onClick={showDrawer}>
          Create
        </Button> : <div></div>}
        <Button onClick={onRefresh} className="refresh" type="primary">
          Refresh
        </Button>
      </div>
    </>
  );
}