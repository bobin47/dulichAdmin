import React, { useState } from 'react'
import "./index.css"
import Filter from '../../components/Filter/Filter'
import TableComponent from '../../components/TableComponent/TableComponent'
import DrawerComponent from '../../components/DrawerComponent/DrawerComponent'

export default function DataHeader() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [action, setAction] = useState();
  const [open, setOpen] = useState(false);
  const columns = []
  const onSearch = (value) => {
    // const param = { limit, page, search: value };
    //  dispatch(getAllCompany(param));
  };

  const onRefresh = () => {
    const param = { limit, page };
    // dispatch(getAllTour(param))
  };

  const showDrawer = (record) => {
    console.log(record)
    // const isCheck = record._id === undefined;
    // setAction(isCheck);
    // if (!isCheck) {
    //   form.setFieldsValue({
    //     _id: record._id,
    //     title: record.title,
    //     price: record.price,
    //     brief: record.brief,
    //     description: record.description,
    //     content: record.content,
    //   });
    // }
    // if (isCheck) {
    //   form.setFieldsValue({
    //     title: "",
    //     price: "",
    //     brief: "",
    //     description: "",
    //     content: "",
    //   });
    // }

    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  return <div className="container">
    <div className="filter">
      <Filter
        hide={false}
        onSearch={onSearch}
        onRefresh={onRefresh}
        showDrawer={showDrawer}
        onCreate={false}
      />
    </div>
    <TableComponent
      // x={1500}
      columns={columns}
      dataSource={[]}
      page={page}
      total={1}
      pageSize={limit}
      // handlePagination={handlePagination}
    />

    <DrawerComponent
      width={1400}
      onClose={onClose}
      open={open}
      name={`Tour ${action ? "Create" : "Edit"}`}
      // FormComponent={
      //   <FormTour action={action} dispatch={dispatch} form={form} />
      // }
    />
  </div>
}
