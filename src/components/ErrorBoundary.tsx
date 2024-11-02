import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallbackRender: (props: { error: Error }) => ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state to indicate an error occurred
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details to the console or send them to a logging service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      // Render the fallback UI using the provided fallbackRender function
      return this.props.fallbackRender({ error: this.state.error });
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
