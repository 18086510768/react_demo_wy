import React, {Component} from 'react';

export default class Study extends Component {
	constructor(props) {
        super(props);
        this.state = {
            msg: '王悦学习react'
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                {this.state.msg}
            </div>
        )
    }
}