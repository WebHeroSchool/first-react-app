import React from "react";
import styles from './Footer.module.css'

import Button from '@material-ui/core/Button';

const Footer = ({ count }) =>

    (<div>
            <div>Вот столько дел еще осталось сделать: {count}</div>
            <Button className={styles.btn} variant="outlined" color="primary">Все</Button>
            <Button className={styles.btn} variant="outlined">Активные</Button>
            <Button className={styles.btn} variant="outlined">Завершенные</Button>
        </div>
);

Footer.defaultProps = {
    count: 0
};


export default Footer;
