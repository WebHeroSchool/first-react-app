import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css'



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
        count: 1,
    };

    setTaskState = task => {
        const newItemList = this.state.items.map(item => {
            console.log(task.id);
            if (item.id === task.id) {
                item.isDone = !item.isDone;
            }
            return item;
        });

        this.setState({ items: newItemList });
    };

    removeTask = task => {
        const newItemList = this.state.items.filter(item => item.id !== task.id);
        let count = this.state.count;
        if (!task.isDone) {
            count--;
        }
        this.setState({ items: newItemList, count });
    };

    addTask = value => {
        console.log(this.state.count);
        const newTask = {
            value: value,
            isDone: false,
            id: [...this.state.items].pop() + 1
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
            <Footer count={this.state.count}/>
        </div>)
    }
}

export default App;
