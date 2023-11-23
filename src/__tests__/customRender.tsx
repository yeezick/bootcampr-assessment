import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => {
  const Providers = ({ children }) => {
    return <Router>{children}</Router>
  }

  return {
    ...render(ui, { wrapper: Providers, ...options }),
  }
}
export * from '@testing-library/react'
export { customRender as render }
