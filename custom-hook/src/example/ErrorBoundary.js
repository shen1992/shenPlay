import React from 'react';
const Raven = window.Raven;

if (process.env.NODE_ENV === 'production') {
  Raven.config(
    'your dns',
    {
      environment: 'production'
    }
  ).install();
}

export default class ErrorBoundary extends React.Component {
  state = {
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div
          onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
        >
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, but click here fill out a report.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
