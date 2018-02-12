import React, { Component } from 'react'
import uuidv4 from 'uuid-v4'
import InfiniteScroll from 'react-infinite-scroller'
import 'bootstrap/dist/css/bootstrap.min.css'

const Box = ({ item }) => (
  <div className='card m-2'>
    <div className='m-2' >{item}gg</div>
  </div>
)

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.addItems()
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
