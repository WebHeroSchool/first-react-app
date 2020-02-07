import React from 'react';
import InputItem from "./components/InputItem/InputItem";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Footer/Footer";

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

const App = () => (<div>
    <h1>todos</h1>
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
