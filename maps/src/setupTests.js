import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const adapter = configure({ adapter: new Adapter() })

export default adapter;