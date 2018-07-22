/**
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

HomePage.propTypes = {
};


const mapDispatchToProps = () => ({
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);
