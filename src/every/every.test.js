'use strict'

import { expect } from 'chai'
import every from './every'

test('every should be a function', () => {
    expect(every).to.be.a('function')
})

test('every([], (item) = item) should return true', () => {
    expect(every([], (item) => item)).to.be.ok
})

test('every([0,2,3], (item) = item) should return false', () => {
    expect(every([0,2,3], (item) => item)).to.not.be.ok
})

test('every([1,2,3], (item) = item) should return false', () => {
    expect(every([1,2,3], (item) => item)).to.be.ok
})