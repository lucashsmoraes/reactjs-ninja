'use strict'

import { expect } from 'chai'
import reverse from './reverse'

test('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

test('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

test('reverse([1, 2]) should return [2,1]', () => {
    expect(reverse([1,2])).to.be.deep.equal([2,1])
})