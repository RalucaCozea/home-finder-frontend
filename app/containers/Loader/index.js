/**
 *
 * Loader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectLoaderState } from './selectors';
import reducer from './reducer';
import LoaderBackground from './LoaderBackground';
import LoaderOverlay from './LoaderOverlay';

export class Loader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isVisible } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <LoaderOverlay className="fade in">
        <LoaderBackground>
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </LoaderBackground>
      </LoaderOverlay>
    );
  }
}

Loader.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isVisible: selectLoaderState(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'appLoader', reducer });

export default compose(
  withReducer,
  withConnect,
)(Loader);
