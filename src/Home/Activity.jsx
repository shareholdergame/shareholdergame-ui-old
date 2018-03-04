import React from "react";

import {
  Table,
  Panel,
  ButtonGroup,
  Button,
  Glyphicon,
  Image,
  Row,
  Col
} from "react-bootstrap";

const Activity = () => (
  <Panel>
    <Panel.Heading>Activity</Panel.Heading>
    <Panel.Body style={{ padding: 0 }}>
      <Table striped style={{ margin: 0 }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_7.jpg"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Зырянов invites you to play</b>
                  <p>Game 4 x 6 / 10 total turns</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <ButtonGroup>
                    <Button bsStyle="success">
                      <Glyphicon glyph="ok" /> Accept
                    </Button>
                    <Button bsStyle="danger">
                      <Glyphicon glyph="remove" /> Reject
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_1.png"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Admin vs. Sergey Chernyshev</b>
                  <p>Turn 4.1: Your turn</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <Button bsStyle="primary">
                    Make Your Move <Glyphicon glyph="log-in" />
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_8.jpg"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Sergey Chernyshev vs. Governor</b>
                  <p>Congratulations, you won!</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <Button>
                    <Glyphicon glyph="eye-open" /> View Game
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_8.jpg"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Sergey Chernyshev vs. Governor</b>
                  <p>Congratulations, you won!</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <Button>
                    <Glyphicon glyph="eye-open" /> View Game
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_8.jpg"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Sergey Chernyshev vs. Governor</b>
                  <p>Congratulations, you won!</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <Button>
                    <Glyphicon glyph="eye-open" /> View Game
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <Image
                src="/images/userpics/avatar_8.jpg"
                width="48"
                height="48"
                circle
              />
            </td>
            <td>
              <Row>
                <Col xs={12} sm={6}>
                  <b>Sergey Chernyshev vs. Governor</b>
                  <p>Congratulations, you won!</p>
                </Col>
                <Col xs={12} sm={6} className="activity-actions">
                  <Button>
                    <Glyphicon glyph="eye-open" /> View Game
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
    </Panel.Body>
  </Panel>
);

export default Activity;
