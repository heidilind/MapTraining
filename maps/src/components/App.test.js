
import React from 'react'
import { shallow } from 'enzyme'
import App from '../App.js'
import PathView from './PathView.js';

describe('<App />', () => {
  
  it('renders main map initially', () => {
    const wrapper = shallow((<App />))
    const mainContainer = wrapper.find(
      '#mainContainer'
    )
    expect(mainContainer.length).toEqual(1)
  })

  
  it('renders heatmap when clicked "show heatmap"', () => {
    const wrapper = shallow((<App />))
    const showHeatMapButton = wrapper.find(
      '#showHeatmap'
    )
    showHeatMapButton.at(0).simulate('click')
    const heatMapContainer = wrapper.find(
      '#heatMapContainer'
    )
    expect(heatMapContainer.length).toEqual(1)

  })
  
  it('does not render main map when heatmap clicked', () => {
    const wrapper = shallow((<App />))
    const showHeatMapButton = wrapper.find(
      '#showHeatmap'
    )
    
    showHeatMapButton.at(0).simulate('click')
    const mainContainer = wrapper.find(
      '#mainContainer'
    )
    expect(mainContainer.length).toEqual(0)
  })

})