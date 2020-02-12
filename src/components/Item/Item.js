import React from "react";
import classnames from 'classnames';
import styles from './Item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const Item = ({task, setTaskState, removeTask}) => (
    <div className={styles.itemWrap}>
        <Checkbox
            value="checkedA"
            checked={task.isDone}
            inputProps={{ 'aria-label': 'Checkbox A' }}
        />
        <span onClick={() => setTaskState(task)}
            className={
            classnames({
                [styles.item]: true,
                [styles.done]: task.isDone
            })
        }>
            {task.value}
        </span>
        <DeleteIcon className={styles.icon}
                    onClick={() => removeTask(task)}
        />
    </div>
);

Item.propTypes = {
    task: PropTypes.object,
    setTaskIsDone: PropTypes.func,
    removeTask: PropTypes.func
};

export default Item;
