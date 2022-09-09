import {Component} from 'react'
import './index.css'

export default class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    latestCoinTossOutcome: 0, // 0 for head, 1 for tail
  }

  onCoinToss = () => {
    const randomizedCoinTossOutcome = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state

    if (randomizedCoinTossOutcome === 0) {
      // outcome: head
      this.setState({
        headsCount: headsCount + 1,
        latestCoinTossOutcome: randomizedCoinTossOutcome,
      })
    } else {
      // outcome: tail
      this.setState({
        tailsCount: tailsCount + 1,
        latestCoinTossOutcome: randomizedCoinTossOutcome,
      })
    }
  }

  render() {
    const {headsCount, tailsCount, latestCoinTossOutcome} = this.state
    const totalCoinTosses = headsCount + tailsCount
    const coinTossOutcomeImageUrl = latestCoinTossOutcome
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="coin-toss-bg-container">
        <div className="coin-toss-content-container">
          <h1 className="coin-toss-header">Coin Toss Game</h1>
          <p className="coin-toss-description">Heads (or) Tails</p>
          <img
            className="coin-toss-outcome-img"
            src={coinTossOutcomeImageUrl}
            alt="toss result"
          />
          <button
            type="button"
            className="coin-toss-button"
            onClick={this.onCoinToss}
          >
            Toss Coin
          </button>
          <div className="coin-toss-stats-container">
            <p className="coin-toss-stat">Total: {totalCoinTosses}</p>
            <p className="coin-toss-stat">Heads: {headsCount}</p>
            <p className="coin-toss-stat">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
