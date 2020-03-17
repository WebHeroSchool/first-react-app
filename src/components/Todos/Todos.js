import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import styles from './Todos.module.css';
import Card from '@material-ui/core/Card';

class Todos extends React.Component {
    state = {
        items: JSON.parse(localStorage.getItem('list') ||
            '[{"id": 1, "value": "Изучить React", "isDone": false}, {"id": 2, "value": "Поспать", "isDone": true}]'),
        count: 4,
        selectedMenuItem: 'all',
        errorRepeatCaseinInput: false,
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            };

            return item;
        });

        this.setState({ items: newItemList });
    };

    onClickAddItem = value => {
        const item = this.state.items.filter(item => item.value === value);

        if (item.length === 0) {
            this.setState(state => ({
                items: [
                    ...state.items,
                    {
                        id: state.count + 1,
                        value,
                        isDone: false
                    }
                ],
                count: state.count + 1,
                classNameForInputWrapp: false,
            }));
        } else {
            this.setState({ classNameForInputWrapp: true });

            setTimeout(() => {
                this.setState({
                    classNameForInputWrapp: false
                })
            }, 1500);
        };
    };

    onClickDeleteItem = id => {
        const newItemList = this.state.items.filter(item => {
            return item.id !== id;
        });

        this.setState({ items: newItemList });
    };

    render() {
        const allItems = this.state.items;
        const completedItems = this.state.items.filter(item => item.isDone === true);
        const uncompletedItems = this.state.items.filter(item => item.isDone === false);

        let itemList = JSON.stringify(this.state.items);
        localStorage.setItem('list', itemList);

        let items;
        switch (this.state.selectedMenuItem) {
            case 'all':
                items = allItems;
                break;
            case 'completedItems':
                items = completedItems;
                break;
            case 'uncompletedItems':
                items = uncompletedItems;
                break;
            default:
                items = allItems;
        };

        return (
            <section className={styles.section}>
                <Card className={styles.todos}>
                    <div className={styles.head}>
                        <h1 className={styles.head__title}>Список моих дел</h1>
                        <div className={styles.menu}>
                            <button
                                onClick={() => {
                                    this.setState({
                                        selectedMenuItem: 'completedItems',
                                    });
                                }}
                                className={styles['menu__is-done']}
                            >
                                Завершённые
                                <span className={styles['menu__is-done_span']}>
                  {completedItems.length}
                </span>
                            </button>
                            <button
                                onClick={() => {
                                    this.setState({
                                        selectedMenuItem: 'uncompletedItems',
                                    });
                                }}
                                className={styles['menu__isnt-done']}>
                                Незавершённые
                                <span className={styles['menu__isnt-done_span']}>
                    {uncompletedItems.length}
                  </span>
                            </button>
                            <button
                                onClick={() => {
                                    this.setState({
                                        selectedMenuItem: 'all',
                                    });
                                }}
                                className={styles.menu__all}
                            >
                                Все
                            </button>
                        </div>
                    </div>
                    <ItemList items={items} onClickDone={this.onClickDone} onClickDeleteItem={this.onClickDeleteItem} />
                    <InputItem items={this.state.items} classNameForInputWrapp={this.state.classNameForInputWrapp} onClickAddItem={this.onClickAddItem} />
                </Card>
            </section>
        );
    };
};

export default Todos;