import { Breadcrumb, Col, Row } from "antd";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import { useLocation } from "react-router-dom";
import { capitalizeWords } from "../../../../utils/utils";

export default function HeaderCustom() {
  const location = useLocation();
  const linkString = location.pathname.split("/")[1];
  return (
    <Row>
      <Col span={8}>
        <Breadcrumb style={{ marginTop: "20px" }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>{capitalizeWords(linkString)}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col span={2} offset={14}>
        <div style={{ cursor: "pointer" }}>
          <MenuDropdown />
        </div>
      </Col>
    </Row>
  );
}
