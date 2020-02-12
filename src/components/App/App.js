import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css'

const items = [
    {
        value: 'Первое дело',
        isDone: true
    },
    {
        value: 'Второе дело',
        isDone: false
    },
    {
        value: 'Третье дело',
        isDone: true
    },
];


class App extends React.Component {
    state = {
        items: [
            {
                value: 'Первое дело',
                isDone: true,
                id: 1,
            },
            {
                value: 'Второе дело',
                isDone: false,
                id: 2,
            },
            {
                value: 'Третье дело',
                isDone: true,
                id: 3,
            },
        ],
    };

    render() {
        return (<div className={styles.wrap}>
            <h1 className={styles.title}>Важные дела</h1>
            <InputItem/>
            <ItemList items={items}/>
            <Footer count={items.filter(item => !item['isDone']).length}/>
        </div>)
    }
}

export default App;
