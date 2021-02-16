/* global describe, it, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { configureEnzyme } from 'utils/enzyme_config'
import { Svg } from './index'

configureEnzyme()

describe('<Svg />', () => {
  it('render without crash', () => {
    const component = shallow(<Svg />)
    expect(component).toHaveLength(1)
  })
})
