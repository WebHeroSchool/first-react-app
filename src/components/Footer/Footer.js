import React from "react";
import styles from './Footer.module.css'
import PropTypes from 'prop-types'

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

Footer.propTypes = {
    count: PropTypes.number
};


export default Footer;
