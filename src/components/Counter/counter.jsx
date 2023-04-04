import { Component } from 'react'
let total = 0
let percent = 0
class Counter extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleClickIncrementGood = () =>  
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }),
            console.log(this.state.good),
            this.countTotalFeedback(),
            this.countPositiveFeedbackPercentage()
        ) 
        
    

    handleClickIncrementNetural = () =>
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }),
            this.countTotalFeedback(),
            this.countPositiveFeedbackPercentage()
        )
    handleClickIncrementBad = () =>
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }),
            this.countTotalFeedback(),
            this.countPositiveFeedbackPercentage()
        )
    countTotalFeedback () {
      total = this.state.bad + this.state.good + this.state.neutral +1
    }
    countPositiveFeedbackPercentage() { 
     percent = this.state.good/total*100
    }
    render() {  
        return (
            <div>
                <div style={{ display: 'flex', gap: "10px", fontSize: 50  }}>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrementGood}>Good</button>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrementNetural}>Natural</button>
            <button style={{ fontSize: 50}} onClick={this.handleClickIncrementBad}>Bad</button>
            
                </div>
                <h2>Statistics</h2>
                <p>Good:{this.state.good}</p>
                <p>Netural:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {percent}%</p>
            </div>
        )
    }  
}
export default Counter