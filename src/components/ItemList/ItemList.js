import React from "react";
import Item from "../Item/Item";
import styles from './ItemList.module.css'
import PropTypes from 'prop-types';


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
ItemList.propTypes = {
    itemList: PropTypes.array,
    setTaskState: PropTypes.func,
    removeTask: PropTypes.func
};
export default ItemList;
