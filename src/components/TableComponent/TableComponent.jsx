import { Table } from "antd";
export default function TableComponent({
  columns,
  dataSource,
  page,
  total,
  pageSize,
  handlePagination,
  x = 0,
}) {
  return (
    <Table
      scroll={{ x: x }}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        total,
        current: page,
        pageSize,
        onChange: (current, size) => handlePagination(current, size),
      }}
    />
  );
}