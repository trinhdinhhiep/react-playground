import React, { Component } from 'react';
class Data extends Component {
    handleClick=()=>{
        this.props.handleClick(this.props.)
    }
    render() {
        return ( 
            <div>
            <div className='border rounded row m-1'>
                <p className='col-9'>{this.props.congviec}</p>
                <button  className='btn btn-info col-3' onClick={this.handleClick} >complete</button>
            </div>
        </div>
         );
    }
}
 
export default Data ;