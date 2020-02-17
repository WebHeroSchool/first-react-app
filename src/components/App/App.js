import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css'
import About from  '../About/About'
import Contacts from  '../Contacts/Contacts'
import Todos from  '../Todos/Todos'


class App extends React.Component {




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
                            <Route path="/todo" exact component={Todos} />
                            <Route path="/contacts" exact component={Contacts} />
                        </section>
                    </div>
                </Router>
        </div>)
    }
}

export default App;
