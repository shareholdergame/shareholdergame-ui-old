import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PlayerProfile = props =>
  props.player ? <div>{props.player.name}</div> : "No player found";

PlayerProfile.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default connect((state, ownProps) => ({
  player: state.home.players.find(
    player => player.name === ownProps.match.params.name
  )
}))(PlayerProfile);
