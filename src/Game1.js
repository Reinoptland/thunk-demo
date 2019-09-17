import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { getDogs, getRandomDog, giveAnswer } from './actions/dogs'

class Game1 extends React.Component {
    componentDidMount(){
        // this.props.getDogs()
        this.props.getRandomDog()
    }

    handleClick = () => {
        this.props.getRandomDog()
        this.props.giveAnswer('Labrador')
    }

    render(){
        return <h1>Game<button onClick={this.handleClick}>BEGIN!</button></h1>
    }
}

export default connect(null, { getDogs, getRandomDog, giveAnswer })(Game1)