import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { getTicketDetails } from "../services/list";
import "./Summary.css";

function Summary() {
  let [ticketDetails, setTicketDetails] = useState([]);

  const fetchedData = () => {
    getTicketDetails().then((res) => {
      setTicketDetails(res);
    });
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <Container className="container1">
      <Row className="row1">
        <Col className="col1">
          <h4> Summary </h4>
        </Col>
        <Col className="col1"></Col>
      </Row>

      <hr></hr>
      <Row className="row1">
        <Col className="text-primary col1">New Ticket</Col>
        <Col className="col2 col1">{ticketDetails.newTicket}</Col>
      </Row>

      <Row className="row1">
        <Col className="text-danger col1">Dev Complete</Col>
        <Col className="col2 col1">{ticketDetails.devComplete}</Col>
      </Row>

      <Row className="row1">
        <Col className="text-success col1">QA Installed</Col>
        <Col className="col2 col1">{ticketDetails.qaInstalled}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">QA Approved</Col>
        <Col className="col2 col1">{ticketDetails.qaApproved}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">QA Denied</Col>
        <Col className="col2 col1">{ticketDetails.qaDenied}</Col>
      </Row>
      <Row className="row1">
        <Col className="col1">Completed</Col>
        <Col className="col2 col1">{ticketDetails.completed}</Col>
      </Row>
      <Row className="row1">
        <Col className="col1">In Progress</Col>
        <Col className="col2 col1">{ticketDetails.inProgress}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">Backlog</Col>
        <Col className="col2 col1">{ticketDetails.backlog}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">Live Release</Col>
        <Col className="col2 col1">{ticketDetails.liveRelease}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">Ready For Review</Col>
        <Col className="col2 col1">{ticketDetails.readyForReview}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">In dev</Col>
        <Col className="col2 col1">{ticketDetails.inDev}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">Needs To Be Prioritized</Col>
        <Col className="col2 col1">{ticketDetails.needsToBePrioritized}</Col>
      </Row>
      <Row className="row1">
        <Col className="col1">QA Verification Needed</Col>
        <Col className="col2 col1">{ticketDetails.qaVerificationNeeded}</Col>
      </Row>

      <Row className="row1">
        <Col className="col1">Closed</Col>
        <Col className="col2 col1">{ticketDetails.closed}</Col>
      </Row>
      <hr></hr>
      <Row className="row1">
        <Col className="col1"></Col>
        <Col className="col3 col1">TOTAL</Col>
      </Row>
    </Container>
    // })}
    // </div>
  );
}

export default Summary;
