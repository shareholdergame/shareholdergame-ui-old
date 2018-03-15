import React from "react";
import { connect } from "react-redux";
import { arrayOf, shape, string } from "prop-types";
import { Table, Panel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import InvitationActivity from "./InvitationActivity";
import YourTurnActivity from "./YourTurnActivity";
import GameDoneActivity from "./GameDoneActivity";

const activityMap = {
  INVITATION: InvitationActivity,
  YOUR_TURN: YourTurnActivity,
  GAME_DONE: GameDoneActivity
};

const Activity = props => (
  <Panel>
    <Panel.Heading>
      <FormattedMessage
        id="home.activity.panellabel"
        description="Activity panel label"
        defaultMessage="Activity"
      />
    </Panel.Heading>
    <Panel.Body style={{ padding: 0 }}>
      <Table striped style={{ margin: 0 }}>
        <tbody>
          {props.events.map(event =>
            React.createElement(activityMap[event.type], {
              ...event,
              key: `${event.type}_${event.timestamp}`
            })
          )}
        </tbody>
      </Table>
    </Panel.Body>
  </Panel>
);

Activity.propTypes = {
  events: arrayOf(
    shape({
      type: string.isRequired
    })
  )
};

Activity.defaultProps = {
  events: []
};

export default connect(state => ({
  events: state.home.activity
}))(Activity);
