import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import './App.css';

const items = [
    {
        value: 'Написать новое приложение'
    },
    {
        value: 'прописать props'
    },
    {
        value: 'сделать все дела'
    }
];

const App = () => (<div className="wrap">
    <h1 className="wrap__title">todos</h1>
    <InputItem/>
    <ItemList items={items}/>
    <Footer count={3}/>
</div>);


/*class App extends Component {
  render() {
    return ( );
  }
}*/

export default App;
