import React from "react";
import classnames from 'classnames';
import styles from './Item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({value, isDone}) => (
    <div className={styles.itemWrap}>
        <Checkbox
            value="checkedA"
            checked={isDone}
            inputProps={{ 'aria-label': 'Checkbox A' }}
        />
        <span className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>
            {value}
        </span>
        <DeleteIcon className={styles.icon} />
    </div>
);


export default Item;
