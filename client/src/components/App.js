import React, { Component } from 'react';

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import {syncHistoryWithStore} from 'react-router-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import Hello from './Hello';
import reducers from '../reducers';

// class App extends Component {
//   state = {
//     response: ''
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };
//   render() {
//     return (
//       <div className="App">
//         <p className="App-intro">
//         {this.state.response}
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

//const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Hello} />
                </Switch>
            </BrowserRouter>
        </Provider>
      
    );
  };
}

export default App;
