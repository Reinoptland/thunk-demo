import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { getDogs } from './actions/dogs'

class DogsList extends React.Component {
    componentDidMount(){
        this.props.getDogs()
    }

    render(){
        return <h1>List</h1>
    }
}

export default connect(null, { getDogs })(DogsList)