// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

function Counter() {
  const {count, increment, decrement} = useCounter()
  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

test('exposes the count and increment/decrement functions', async () => {
  render(<Counter />)

  const incrementButton = screen.getByRole('button', {name: /increment/i})
  const decrementButton = screen.getByRole('button', {name: /decrement/i})
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  await userEvent.click(incrementButton)
  expect(message).toHaveTextContent('Current count: 1')
  await userEvent.click(decrementButton)
  expect(message).toHaveTextContent('Current count: 0')
})

/* eslint no-unused-vars:0 */
