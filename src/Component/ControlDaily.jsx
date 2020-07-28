import React, { Component } from 'react';
import Data from './Data'
class Control extends Component {
    state = { 
        data:['cv1','cv2','cv3']       
    }

    _remove=(item, arr)=>{
        const resul=arr.filter(x=>{
            if(x===item){
                return false;
            }
            return true
        })
        return resul;
    }

    handleRemove = (item) => {
        this.setState({data: this._remove(item, this.state.data)})
    }

    render() { 
        return ( 
            <div className='m-4'>
                <div className="input-group">
                    <input className='form-control' placeholder='Enter' />
                        <div className="input-group-append">
                            <button className='input-group-text'>Add</button>
                        </div>
                </div>
                <div className='row mt-2'>
                    <h5 className='col-9'>Todo List</h5>
                    <p className='col-3'>There are xxx todos</p>
                </div>
                {
                    this.state.data.map(item=>{
                    return (
                        <Data congviec={item} handleClick={this.handleRemove} />
                        )
                    })
                }
               
            </div>
         );
    }
}
 
export default Control;