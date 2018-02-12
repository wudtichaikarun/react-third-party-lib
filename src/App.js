import React, { Component } from 'react'
import uuidv4 from 'uuid-v4'
import InfiniteScroll from 'react-infinite-scroller'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardColumns, Tooltip } from 'reactstrap'
import styles from './App.css'

class Box extends Component {
  state = {
    tooltipOpen: false
  }

  toggle = () => {
    this.setState(prev => ({
      tooltipOpen: !prev.tooltipOpen
    }))
  }

  render() {
    const item = this.props.item

    return (
      <Card className='m-2'>
        <div className='m-2'>
          <p id={'targetId'+item}>{item}</p>
          <Tooltip
            placement='top'
            isOpen={this.state.tooltipOpen} 
            target={'targetId'+item}
            toggle={this.toggle}>
              {item}
          </Tooltip>
        </div>
      </Card>
    )
  }
}

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
          <CardColumns className="m-2">
            {
              this.state.items.map(
                item => <Box key={item} item={item} />
              )
            }
          </CardColumns>
      </InfiniteScroll>
    )
  }
}

export default App
