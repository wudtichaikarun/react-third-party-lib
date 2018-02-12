import React, { Component } from 'react'
import './App.css'
import uuidv4 from 'uuid-v4'
import $ from 'jquery'

const Box = ({ item }) => (
  <div className='card m-2'>
    <div className='m-2' >{item}</div>
  </div>
)

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.addItems()

    $(window).scroll(() => {
      if($(window).scrollTop() + $(window).height() == $(document).height()){
        this.addItems()
      }
    })
  }

  addItems() {
    this.setState(
      ({ items }) => ({
        items: [
          ...items,
          ...Array.from({ length: 30 }).map(() => uuidv4())
        ]
      })
    )
  }

  render() {
    return (
      <div className="card-columns m2">
         {
           this.state.items.map(
             item => <Box key={item} item={item} />
           )
         }
      </div>
    );
  }
}

export default App;
