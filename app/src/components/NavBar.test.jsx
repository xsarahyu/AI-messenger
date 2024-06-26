import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'

describe('NavBar component', () => {
  test('Renders NavBar content', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    const homeLink = getByTestId('homeNavBarButton')
    expect(homeLink).toBeInTheDocument()

    const loginLink = getByTestId('loginNavBarButton')
    expect(loginLink).toBeInTheDocument()
  })
})