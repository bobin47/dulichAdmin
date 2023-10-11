import { Drawer } from "antd";
export default function DrawerComponent({
  onClose,
  open,
  FormComponent,
  width,
  name
}) {
  return (
    <Drawer
      title={name}
      placement="right"
      onClose={onClose}
      open={open}
      width={width}
    >
      {FormComponent}
    </Drawer>
  );
}
