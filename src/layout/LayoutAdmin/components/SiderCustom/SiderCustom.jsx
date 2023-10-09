import {
  UserOutlined,
  FundProjectionScreenOutlined,
  BankOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function SiderCustom() {
  const location = useLocation();
  const linkString = location.pathname.split("/admin/")[1];

  const items = [
    {
      key: "dashboard",
      icon: (
        <Link to={"dashboard"}>
          <FundProjectionScreenOutlined />
        </Link>
      ),
      label: "Dashboard",
    },
    {
      key: "tour",
      icon: (
        <NavLink to={"tour"}>
          <UserOutlined />
        </NavLink>
      ),
      label: "Tour",
    },
    {
      key: "company",

      icon: (
        <NavLink to={""}>
          <BankOutlined />
        </NavLink>
      ),
      label: "Data Header",
    },

    {
      key: "job",
      icon: (
        <NavLink to={""}>
          <ProjectOutlined />
        </NavLink>
      ),
      label: "Data Footer",
    },

    // {
    //   key: "post",
    //   icon: (
    //     <NavLink to={path.post}>
    //       <IdcardOutlined />
    //     </NavLink>
    //   ),
    //   label: "Post",
    // },
    // {
    //   key: "category",
    //   icon: (
    //     <NavLink to={path.category}>
    //       <PartitionOutlined />
    //     </NavLink>
    //   ),
    //   label: "Category",
    // },
  ];

  return (
    <Menu
      className="sider"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[linkString]}
      items={items}
    />
  );
}
