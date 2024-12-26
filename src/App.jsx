import React , {Component} from 'react';
import './App.css';
import flats from './data/flats.js';
import FlatList from './components/flat_list';
import FlatMap from './components/flat_map.jsx'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flatList: flats,
      flat_id: "",

    }
  }

  flatMap = (id) => {
    this.setState({
      flat_id: id
    })
  }

  render () {
    console.log(this.state.flatList)
    return (
  <div>
    <div className="flat-list">
      <FlatList list={this.state.flatList}
      selectedFlat={this.flatMap}/>
    </div>
    <div className="map-container">
      <FlatMap flatMap={this.state.flat_id}
      flats={this.state.flatList}/>
    </div>
  </div>
    )
  }

}

export default App;
