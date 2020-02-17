import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './About.module.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <Card className={styles.about}>
                    <div className={styles.photo}></div>
                    <div className={styles.info}>
                        <p className={styles.info_name}>Ksenia Pyagay</p>
                        <p className={styles.info_position}>Frontend Developer</p>
                        <p className={styles.info_mail}> <ion-icon name="mail">ksenia.pyagay@aiesec.net</ion-icon>  </p>
                        {/*<p className={styles.info_send}> <ion-icon name="send"></ion-icon> +31 (61) 5246576</p>*/}
                    </div>
                    <div className={styles.socials}>
                        <a href="https://www.google.nl/"><ion-icon name="logo-github"></ion-icon></a>
                        <a href="https://www.google.nl/"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="https://www.google.nl/"><ion-icon name="logo-facebook"></ion-icon></a>
                    </div>
                </Card>

                <Card className={styles.git}>
                    <p className={styles.git__heading}>Repositories on GitHub</p>
                    <div className={styles.error_block}>
                        <p className={styles.error_title} >Repositories are absent</p>
                        <p className={styles.error_subtitle} >Add at least one repository to <a href="https://github.com/" >GitHub</a></p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default About;
