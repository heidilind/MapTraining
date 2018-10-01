import React from 'react'
import './App.css'
import Map from './components/Map.js'
import HeatMap from './components/HeatMap.js'
import PathView from './components/PathView'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heatMapSelected: false,
      markers: [],
      paths: []
    }
    this.handleMapClick.bind(this)
    this.backToEditView.bind(this)
    this.showSelectedPath.bind(this)
  }

  handleMapClick = (event) => {
    this.state.markers.length < 10 ?
      this.setState({ 
        markers: this.state.markers.concat({ 
          position: {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          }, 
          key: Date.now() 
        }) 
      }):
      window.alert("maximum amount of path markers is 10")
  }

  clearPath = () => this.setState({ markers: [] }) 

  showSelectedPath = (p) => {
    this.setState({ markers: p.path, heatMapSelected: false })
  }

  showHeatMap = () => this.setState({ heatMapSelected: true })

  savePath = () => {
    this.state.paths.length < 10 ?
      this.setState({
        paths: this.state.paths.concat({
          name: `Path ${this.state.paths.length + 1}`, 
          key: Date.now(),
          path: this.state.markers
        }), 
        markers: [] 
      }):
      window.alert("maximum amount of paths is 10 paths")
  }

  backToEditView = () => this.setState({ heatMapSelected: false })

  export = () => {
    axios.post('/paths', { content: this.state.paths })
      .then(response => {
        console.log(response)
      })
  }

  render() {
    if (this.state.heatMapSelected === false) {
      return (
        <div id='mainContainer'>
          <div className='pathAndMap'>
            <Map
              handleMapClick={this.handleMapClick}
              markers={this.state.markers}/>
            <PathView 
              paths={this.state.paths}
              showSelected={this.showSelectedPath}
            />
          </div>
          <button onClick={this.clearPath}>Clear Path</button>
          <button id='savePath' onClick={this.savePath}>Save Path</button>
          <button id='showHeatmap' onClick={this.showHeatMap}>Show Heat Map</button>
          <button onClick={this.export}>Export as JSON file</button>
        </div>
      )
    }
    return (
      <div id='heatMapContainer'>
        <div className='pathAndMap'>
          <HeatMap markers={this.state.markers} />
          <PathView 
            paths={this.state.paths}
            showSelected={this.showSelectedPath}
            />
        </div>
        <button onClick={this.backToEditView}>BackToEditing</button>
        <button onClick={this.export}>Export as JSON file</button>
      </div>
    )
  }
}

export default App
