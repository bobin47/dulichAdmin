import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  App,
  Space,
} from "antd";
import signinbg from "../../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "../../store/features/auth/authSlice";
import { useEffect } from "react";
const { Title } = Typography;
const { Footer, Content } = Layout;

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(loginAccount(values));
  };

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/tour")
    }
  },[isAuthenticated])

  const onFinishFailed = () => {};

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
       
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="User Name"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your userName!",
                    },
                  ]}
                >
                  <Input placeholder="User Name" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>

      </Layout>
    </>
  );
}
