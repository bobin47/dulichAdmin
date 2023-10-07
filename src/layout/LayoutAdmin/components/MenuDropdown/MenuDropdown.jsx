import { Avatar, Space, Dropdown, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { clearLC } from "../../../../utils/utils";
export default function MenuDropdown() {
  const isAuth = JSON.parse(localStorage.getItem("user") || "{}");

  const items= [
    {
      label: "Logout",
      key: "3",
      onClick: () => {
        document.location.assign("/login")
        clearLC()
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Space>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <h3 className="">{isAuth.userName}</h3>
      </Space>
    </Dropdown>
  );
}
