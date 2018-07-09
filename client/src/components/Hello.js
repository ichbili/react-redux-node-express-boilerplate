import React, {Component} from 'react';
import {connect} from 'react-redux';

import { testServer } from '../actions'

class Hello extends Component {
    componentDidMount () {
      this.props.testServer();
    }

    render () {
        const { express } = this.props;
        
        return(
            <div>
                <div className="test">
                    Hello APP
                </div>
                <p>{express}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      express: state.response.express
    }
}

const mapDispatchToProps = {
    testServer
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

