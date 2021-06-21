/** @format */

import { Component } from 'react';
import { ErrorPlaceholder } from './ErrorPlaceholder';

interface Props {
  className?: string;
  onErrorClick?: () => void;
  errorIcon?: React.ReactElement;
}

export default class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { onErrorClick, className, errorIcon, children } = this.props;

    if (hasError) return <ErrorPlaceholder onClick={onErrorClick} className={className} icon={errorIcon || <></>} />;

    return children;
  }
}
