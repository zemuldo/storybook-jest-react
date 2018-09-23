import React from 'react';
import ErrorBoundary from '../src/ErrorBoundary';

export default class Container extends React.Component {
  render() {
    const { story } = this.props;

    return (
        <ErrorBoundary>
           {story()}
        </ErrorBoundary>
    );
  }
}
