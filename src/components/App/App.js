import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css'
import About from  '../About/About'
import Contacts from  '../Contacts/Contacts'

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
            id: [...this.state.items].pop().id + 1
        };

        this.setState({
            items: [...this.state.items, newTask],
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className={styles.wrap}>
                <Router>
                    <div className={styles.wrapp}>
                        <section className={styles.sidebar}>
                            <MenuList className={styles.menu}>
                                <Link to="/" className={styles.link}>
                                    <MenuItem className={styles.link__item}>About Me</MenuItem>
                                </Link>
                                <Link to="/todo" className={styles.link}>
                                    <MenuItem className={styles.link__item}>Todo's</MenuItem>
                                </Link>
                                <Link to="/contacts" className={styles.link}>
                                    <MenuItem className={styles.link__item}>Contacts</MenuItem>
                                </Link>
                            </MenuList>
                        </section>
                        <section className={styles.content}>
                            <Route path="/" exact component={About} />
                            {/*<Route path="/todo" component={Todo} />*/}
                            <Route path="/contacts" exact component={Contacts} />
                        </section>
                    </div>
                </Router>
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
