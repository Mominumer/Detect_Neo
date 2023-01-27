import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../MainSidebar/MainSidebar";
import ReceptionistTable from "./Receptionist_Table"
import { useHistory } from "react-router-dom";

const ReceptionistInfo = () => {
  const history= useHistory();
  const handleClick=()=>{
    history.push({
      pathname:"/register"
    });
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10}>
            <Container className="mb-5">
              <Paper>
                <Typography
                  className="text-center text-primary py-5"
                  variant="h4"
                >
                 Receptionists
                </Typography>
               
                  <button onClick={handleClick }>
Add
                  </button>
                  
              </Paper>
              <ReceptionistTable/>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReceptionistInfo;

