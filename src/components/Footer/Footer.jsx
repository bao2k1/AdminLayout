
import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
const NavList = styled.ul`
  display:flex;
  justify-content:end;
  text-decoration:none;
  list-style:none !important;
  .nav-item a{
    color:black;
    margin-right:20px;
  }
  .nav-item a:hover{
    color:blue;
  }
`
function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2021, made with
            {<HeartFilled />} by
            <a href="#pablo" className="font-weight-bold" target="_blank">
               Quang Bao
            </a>
            for a better web.
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <NavList className={NavList}>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Creative by Quang Bao
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#pablo"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </NavList>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
