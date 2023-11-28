// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      Date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      Umpires,
      Venue,
      Result,
    } = latestMatch

    return (
      <div className="latest-match-class">
        <div className="div1">
          <h1>{competingTeam}</h1>
        </div>
      </div>
    )
  }
}

export default LatestMatch
