// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const username = 'MyUser'
  const password = 'MyPassword'

  const usernameInput = screen.getByRole('textbox', {name: /username/i})
  const passwordInput = screen.getByLabelText(/password/i)

  await userEvent.type(usernameInput, username)
  await userEvent.type(passwordInput, password)

  const submitButton = screen.getByRole('button', {name: /submit/i})
  await userEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
