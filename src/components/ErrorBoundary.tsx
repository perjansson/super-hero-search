import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  children: React.ReactNode
}

class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage>Something went wrong.</ErrorMessage>
    }

    return this.props.children
  }
}

export default ErrorBoundary
