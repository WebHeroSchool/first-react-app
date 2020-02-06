import React from 'react';
import InputItem from "./components/InputItem/InputItem";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Footer/Footer";

const App = () => (<div>
    <h1>todos</h1>
    <InputItem/>
    <ItemList/>
    <Footer count={3}/>
</div>);


/*class App extends Component {
  render() {
    return ( );
  }
}*/

export default App;
