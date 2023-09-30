import { Drawer } from "antd";
export default function DrawerComponent({
  onClose,
  open,
  FormComponent,
  width,
}) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
      width={width}
    >
      {FormComponent}
    </Drawer>
  );
}
