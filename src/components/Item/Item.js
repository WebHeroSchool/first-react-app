import React from "react";
import classnames from 'classnames';
import styles from './Item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {
       render() {
        const { value, isDone, onClickDone, id, onClickDeleteItem} = this.props;

           return (
               <div className={styles.wrapp}>
                   <div className={styles.wrap}>
                       <Checkbox
                           onClick={() => onClickDone(id)}
                           value="checkedA"
                           checked={isDone}
                           inputProps={{'aria-label': 'Checkbox A'}}
                       />
                       <span onClick={() => onClickDone(id)}
                             className={
                                 classnames({
                                     [styles.item]: true,
                                     [styles.done]: isDone
                                 })
                             }>
            {value}
        </span>
                   </div>

                   <DeleteIcon className={styles.icon}
                               onClick={() => onClickDeleteItem(id)}
                   />
               </div>
           );
    }
}

export default Item;
