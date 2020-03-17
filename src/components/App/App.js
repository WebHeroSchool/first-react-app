import React from 'react';
import { BrowserRouter as Router, Route, NavLink  } from 'react-router-dom';

import styles from './App.module.css'
import About from  '../About/About'
import Todos from  '../Todos/Todos'

class App extends React.Component {

    render() {
        return (
            <div className={styles.wrap}>
                <Router>
                    <header className={styles.header}>
                        <nav className={styles.sidebar}>

                                <NavLink to="/"
                                         exact
                                      className={styles.link}
                                      activeClassName={styles.activeLink}
                                >
                                    About Me
                                </NavLink>
                                <NavLink to="/todo"
                                         className={styles.link}
                                         activeClassName={styles.activeLink}
                                >
                                    Todo's
                                </NavLink>
                        </nav>
                    </header>
                    <section className={styles.content}>
                        <Route path="/" exact component={About} />
                        <Route path="/todo"  component={Todos} />
                    </section>
                </Router>
        </div>)
    }
}

export default App;
