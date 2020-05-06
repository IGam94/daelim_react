import React from 'react';
import './myClock.css';

class Clock extends React.Component {
	constructor(props){
		super(props)
		this.state = {
 			time: new Date()
		}
 	}

	componentDidMount(){
		this.interval = setInterval(()=>{
 			this.setState({
 				time: new Date()
 			})
 		}, 	100)
	}
 
	formatSet(data){
		return data < 10 ? '0' + data : data;
	}
  formatms(data){
		return data < 100 ? '0' + data : data;
	}

	render() {
		const { time } = this.state;
		const h = this.formatSet(time.getHours());
		const m = this.formatSet(time.getMinutes());
		const s = this.formatSet(time.getSeconds());
        const ms = this.formatms(time.getMilliseconds());
        const year = this.formatSet(time.getFullYear());
        const mon = this.formatSet(time.getMonth()+1);
        const date = this.formatSet(time.getDate());

		return (
			<div className="clockBox">
       <h1 className="fontchange"> {year}년 {mon}월{date}일 {h}시{m}분{s}.{ms}초</h1>
      </div>
		)
	}
}

export default Clock;