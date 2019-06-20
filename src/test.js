import React, { Component,Fragment } from 'react'

export default class Test extends Component {
    
    
    state = {
        color :"red"
    }

    _onClick = (e,id) =>  
   { /*alert(id)*/
    this.setState({
        color : "blue"
    })
}
    
    /*componentWillMount() {
        alert("je vais etre monté")
    }

    componentDidMount () {
        alert("je suis monté")
    }

    componentWillUnmount() {
        alert("Je vais être démonté")
    }*/
    
    

    
    render() {
        return (
            <Fragment>
            <div style={{color:this.state.color}}>
              {this.props.txt}
            </div>
            <button onClick={(e)=> this._onClick(e,45)}>change la couleur en bleu</button>
            </Fragment>
        )
    }
}
