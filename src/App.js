import React, { Component } from 'react';

const ItemList = () => (<ul>
    <li>1</li>
    <li>2</li>
</ul>);

const App = () => (<div>
    <h1>Hello World!</h1>
    <ItemList />
</div>);


/*class App extends Component {
  render() {
    return ( );
  }
}*/

export default App;
