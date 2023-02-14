// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

function setup({initialProps} = {}) {
  let result = {}
  function Counter() {
    result.current = useCounter(initialProps)
    return null
  }
  render(<Counter />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialProps: {initialCount: 4}})
  expect(result.current.count).toBe(4)
})

test('allows customization of the step', () => {
  const result = setup({initialProps: {steps: 2}})

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */
