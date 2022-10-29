import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import listAccount from "../../Data/account";
import "../../Styles/Layout/Status/Status.css"
import Success from "../../Assets/success.svg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import Content from "../../Layout/Content";

import "../../Styles/Components/Sidebar/Sidebar.css";
import "../../Styles/Layout/Content/Content.css";
import { useParams } from "react-router-dom";

const Status = (props) => {
  const { children } = props;

  const { id } = useParams();
  const [account] = useState(listAccount[id - 1]);

  const handleToHome = (e) => {
    e.preventDefault();
    window.location.replace("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="content-wrapper w-100 p-1">
        <Container fluid className="w-100 p-5 container-wrapper p-1">
          <Row>
            <Col sm={3} className="sidebar-wrapper p-1">
              <Sidebar />
            </Col>
            <Col sm={8} className="p-1 ms-2">
              <Card className="shadow-lg card-wrapper">
                <Card.Body>
                  <Container>
                  <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        {children}
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Container>
                              <Row>
                                <Col>
                                  <Card.Text>Amount</Card.Text>
                                  <Card.Text></Card.Text>
                                </Col>
                              </Row>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Container>
                              <Row>
                                <Col>
                                  <Card.Text>Balance left</Card.Text>
                                  <Card.Text></Card.Text>
                                </Col>
                              </Row>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Container>
                              <Row>
                                <Col>
                                  <Card.Text>Date & Time</Card.Text>
                                  <Card.Text></Card.Text>
                                </Col>
                              </Row>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Container>
                              <Row>
                                <Col>
                                  <Card.Text>Notes</Card.Text>
                                  <Card.Text></Card.Text>
                                </Col>
                              </Row>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Button
                          variant="outline-light"
                          onClick={handleToHome}
                          className="m-2"
                          style={{ background: "#6379F4" }}
                        >
                          Continue
                        </Button>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <h4>Transfer to</h4>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center">
                      <Col>
                        <Card key={account.id}>
                          <Card.Body>
                            <Container>
                              <Row>
                                <Col sm={2}>
                                  <Card.Img
                                    style={{ height: "70px", width: "70px" }}
                                    src={account.profilePic}
                                  />
                                </Col>
                                <Col sm={2}>
                                  <Card.Text>{account.name}</Card.Text>
                                  <Card.Text>{account.phone}</Card.Text>
                                </Col>
                                <Col></Col>
                              </Row>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Status;
