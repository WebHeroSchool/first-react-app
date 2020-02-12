import React from "react";
import Item from "../Item/Item";
import styles from './ItemList.module.css'


const ItemList = ({items, setTaskState, removeTask}) => (<ul>
    { items.map(item =>
        <li className={styles.element}
            key={item.value}
        >
            <Item task={item}
                  setTaskState={setTaskState}
                  removeTask={removeTask}
            />
        </li>) }
</ul>);

export default ItemList;
