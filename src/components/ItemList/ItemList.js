import React from "react";
import Item from "../Item/Item";
import styles from './ItemList.module.css'


const ItemList = ({items}) => (<ul>
    { items.map(item =>
        <li className={styles.element} key={item.id}>
            <Item value={item.value} isDone={item.isDone} />
        </li>) }
</ul>);

export default ItemList;
