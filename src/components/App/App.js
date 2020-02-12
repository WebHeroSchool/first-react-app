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

    setTaskState = task => {
        const newItemList = this.state.items.map(item => {
            if (item.id === task.id) {
                item.isDone = !item.isDone;
            }
            return item;
        });

        this.setState({ items: newItemList });
    };

    removeTask = task => {
        const newItemList = this.state.items.filter(item => item.id !== task.id);

        this.setState({ items: newItemList });
    };

    addTask = value => {
        const newTask = {
            value: value,
            isDone: false,
            id: this.state.count + 1
        };

        this.setState({
            items: [...this.state.items, newTask],
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className={styles.wrap}>
            <h1 className={styles.title}>Важные дела</h1>
            <InputItem addTask={this.addTask}/>
            <ItemList items={this.state.items}
                      setTaskState={this.setTaskState}
                      removeTask={this.removeTask}
            />
            <Footer count={items.filter(item => !item['isDone']).length}/>
        </div>)
    }
}

export default App;
