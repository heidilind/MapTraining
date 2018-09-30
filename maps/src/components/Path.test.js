import React from 'react'
import { shallow } from 'enzyme'
import Path from './Path.js'

describe('<Path />', () => {

    it('renders name', () => {
        const path = { name: 'Path x' }
        const pathComponent = shallow(<Path path={path} />)
        const container = pathComponent.find('.singlePath')

        expect(container.text()).toContain(path.name)
    })


    it('clicking the button calls event handler once', () => {
        const path = { content: 'Path x' }
        const mockHandler = jest.fn()
    
        const pathComponent = shallow(
        <Path
            path={path}
            handlePathClick={mockHandler}
        />
        )
    
        const button = pathComponent.find('button')
        button.simulate('click')
    
        expect(mockHandler.mock.calls.length).toBe(1)
})
})