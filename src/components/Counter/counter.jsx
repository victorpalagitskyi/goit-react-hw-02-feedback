import { Component } from 'react'

class Counter extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleClickIncrement = (type) =>
        this.setState((prevState) => ({
            [type]: prevState[type] + 1,
        }), console.log(type)
        ) 
   
    
    render() {  
        return (
            <div>
                <div style={{ display: 'flex', gap: "10px", fontSize: 50  }}>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrement}>Good</button>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrement}>Natural</button>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrement}>Bad</button>
            
                </div>
                <h2>Statistics</h2>
                <p>Good:{this.state.good}</p>
                <p>Netural:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total: {this.state.bad + this.state.good + this.state.neutral }</p>
                <p>Positive feedback: {this.state.good/(this.state.bad + this.state.good + this.state.neutral )*100}%</p>
            </div>
        )
    }  
}
export default Counter