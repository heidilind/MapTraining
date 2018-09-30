import React from 'react'
import { shallow } from 'enzyme'
import PathView from './PathView.js'

describe('<PathView />', () => {
  let pathViewComponent
  let paths = []

  beforeEach(() => {
    pathViewComponent = shallow(
      <PathView paths={paths} />
    )
  })

  it('renders its chlidren"', () => {
    const pathsContainer = pathViewComponent.find(
      '#pathsContainer'
    )
    expect(pathsContainer.length).toEqual(1)
  })
})