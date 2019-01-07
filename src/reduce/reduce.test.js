'use strict'

import { expect } from 'chai'
import reduce from './reduce'

test('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

test('reduce ([1,2,3], (acc, item) => acc + item, 0) should return 6', () => {
    const before = reduce([1,2,3], (acc, item) => acc + item, 0)
    const after = 6
    expect(before).to.be.deep.equal(after)
})

test('reduce ([2,3,4], (acc, item) => acc + item, 0) should return 9', () => {
    const before = reduce([2,3,4], (acc, item) => acc + item, 0)
    const after = 9
    expect(before).to.be.deep.equal(after)
})
