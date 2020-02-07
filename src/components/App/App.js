import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css'

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

const App = () => (<div className={styles.wrap}>
    <h1 className={styles.title}>todos</h1>
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
