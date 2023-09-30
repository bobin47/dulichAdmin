import { Outlet } from "react-router-dom";
import LayoutAdmin from "../../layout/LayoutAdmin/LayoutAdmin";

export default function Admin() {
  return <div>
    <LayoutAdmin>
      <Outlet/>
    </LayoutAdmin>
  </div>
}
