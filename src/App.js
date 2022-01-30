import React from 'react';
import './App.css';

import Todos from './components/Todos';

class App extends React.PureComponent {
  state = {
    error: null
  }

  static getDerivedStateFromError(error) {
    return { error: error.message }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Practice 9
        </header>
        <div id="content">
          {error && (
            <div>{error}</div>
          )}
          <Todos />
        </div>
      </div>
    )
  };
}

export default App;
