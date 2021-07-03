import React from 'react'
import axios from 'axios'

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    }
  }

  componentDidMount() {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.campaigns
        })
      })
  }

  render() {
    const {items} = this.state
    return (
      <div>
        <ul>
          {items.map(item => (
            <li key={item.id}>

            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Campaign