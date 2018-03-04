import React, { Component } from 'react';
import {
    Table, Panel,
    ButtonGroup, Button,
    Glyphicon,
    Image,
    Row, Col,
    FormControl,
    Well
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Row style={{ paddingBottom: '1em' }}>
                    <Col xs={12} md={7}>
                        <LinkContainer to="new-game">
                            <Button bsSize="large" bsStyle="success" block>Start New Game</Button>
                        </LinkContainer>
                    </Col>
                    <Col xs={12} md={5}>
                        <LinkContainer to="new-game">
                            <Button bsSize="large" block>Game Options</Button>
                        </LinkContainer>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={7}>
                        <Panel>
                            <Panel.Heading>Activity</Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>
                                <Table striped style={{ margin: 0 }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_7.jpg" width="48" height="48" circle />
                                            </td>
                                            <td>
                                                <Row>
                                                    <Col xs={12} sm={6}>
                                                        <b>Зырянов invites you to play</b>
                                                        <p>Game 4 x 6 / 10 total turns</p>
                                                    </Col>
                                                    <Col xs={12} sm={6} className="activity-actions">
                                                        <ButtonGroup>
                                                            <Button bsStyle="success"><Glyphicon glyph="ok" /> Accept</Button>
                                                            <Button bsStyle="danger"><Glyphicon glyph="remove" /> Reject</Button>
                                                        </ButtonGroup>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_1.png" width="48" height="48" circle />
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
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_8.jpg" width="48" height="48" circle />
                                            </td>
                                            <td>
                                                <Row>
                                                    <Col xs={12} sm={6}>
                                                        <b>Sergey Chernyshev vs. Governor</b>
                                                        <p>Congratulations, you won!</p>
                                                    </Col>
                                                    <Col xs={12} sm={6} className="activity-actions">
                                                        <Button>
                                                            <Glyphicon glyph="eye-open" /> View Game</Button>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_8.jpg" width="48" height="48" circle />
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
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_8.jpg" width="48" height="48" circle />
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
                                            <td style={{ textAlign: 'center' }}>
                                                <Image src="/images/userpics/avatar_8.jpg" width="48" height="48" circle />
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
                    </Col>

                    <Col xs={12} md={5}>
                        <Panel>
                            <Panel.Heading>Players On-line</Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>
                                <Table striped style={{ margin: 0 }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle' }}>
                                                <Image src="/images/userpics/avatar_42.jpg" width="36" height="36" circle /> Михаил
                                         </td>
                                            <td style={{ verticalAlign: 'middle' }} align="right">
                                                <ButtonGroup>
                                                    <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                                                    <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle' }}>
                                                <Image src="/images/userpics/default_avatar.png" width="36" height="36" circle /> Alkonaft
                                        </td>
                                            <td style={{ verticalAlign: 'middle' }} align="right">
                                                <ButtonGroup>
                                                    <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                                                    <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle' }}>
                                                <Image src="/images/userpics/avatar_5.png" width="36" height="36" circle /> Andrew
                                            </td>
                                            <td style={{ verticalAlign: 'middle' }} align="right">
                                                <ButtonGroup>
                                                    <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                                                    <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Panel.Body>
                        </Panel>

                        <Panel>
                            <Panel.Heading>Global Chat <Glyphicon glyph="envelope" /></Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>
                                <Well style={{ marginBottom: 0 }}>
                                    <p>
                                        <span style={{ color: 'blue' }}>Зырянов:</span> Bacon ipsum dolor amet ribeye corned beef chuck, shoulder cow frankfurter landjaeger prosciutto kielbasa burgdoggen chicken alcatra flank. Sirloin strip steak pork pork loin, ground round biltong ham hock short loin rump venison pastrami flank jerky beef ribs cow. Kielbasa burgdoggen andouille boudin, turkey t-bone alcatra. Short ribs jerky venison tail hamburger ground round. Meatball turducken ball tip, pork loin chuck drumstick chicken.
                                </p>
                                    <p>
                                        <span style={{ color: 'blue' }}>Sergey Chernyshev:</span> Ribeye tongue shoulder prosciutto picanha strip steak brisket turducken pork belly corned beef. Strip steak swine tongue turkey alcatra t-bone fatback pork belly. Turkey sausage cupim rump boudin. Cupim ham drumstick rump, turkey boudin pastrami tongue ball tip. Tail beef ribs picanha, filet mignon kielbasa turkey ribeye porchetta pork chop t-bone cupim meatball capicola fatback. Landjaeger rump spare ribs shankle frankfurter doner flank kielbasa venison cupim ham tongue jerky.
                                </p>
                                </Well>
                                <FormControl style={{ height: '5em' }} componentClass="textarea" placeholder="type your message here ..." />
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
