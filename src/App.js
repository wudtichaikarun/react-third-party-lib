import React, { Component } from 'react'
import uuidv4 from 'uuid-v4'
// Bootstrap
import $ from 'jquery'
import Popper  from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import InfiniteScroll from 'react-infinite-scroller'
import styles from './App.css'

const Box = ({ item }) => (
  <div className='card m-2'>
    <p
      data-toggle='tooltip'
      data-placement='top'
      title={item} >
        {item}
    </p>
  </div>
)

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.addItems()

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  addItems = () => {
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
      <InfiniteScroll
          pageStart={0}
          loadMore={this.addItems}
          hasMore={true} >
          <div className="card-columns m2">
            {
              this.state.items.map(
                item => <Box key={item} item={item} />
              )
            }
        </div>
      </InfiniteScroll>
    )
  }
}

export default App
