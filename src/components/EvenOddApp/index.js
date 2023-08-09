import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Count {count}</h1>
          <div className="btn-container">
            <p className="sub-heading">{displayText}</p>
            <button className="button" type="button" onClick={this.onIncrease}>
              increment
            </button>
            <p className="para">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
