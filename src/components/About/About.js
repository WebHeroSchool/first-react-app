import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './About.module.css';
import Octokit from '@octokit/rest';
import Loader from '../Loader/Loader';


const octokit = new Octokit();
const userContacts = {
    email: 'ksenia.pyagay@aiesec.com',
    phoneNumber: '+7(952)358-6890'
};

class About extends React.Component {
    state = {
        isLoading: true,
        repoList:[],
        err: false,
        userData: {},
        // firstRepo: 0,
        // lastRepo: 5
    };

    componentDidMount() {
        const user = 'seasmail';
        octokit.users
            .getByUsername({
                username: user
            })
            .then(({ data }) => {
                this.setState({
                    userData: data,
                    isLoading: false
                });
            })
            .catch(err =>{
                this.setState({
                    err: "ошибка загрузки",
                    isLoading: false
                })
            });

        octokit.repos.listForUser({
            username: user
        }).then(({ data })=>{
            this.setState({
                isLoading: false,
                repoList:data,
                url: data[0].owner.avatar_url,
                name: data[0].owner.login
            });

            if(!data){
                throw new Error("нет репозиториев")
            }
        }).catch((err)=>{
            console.log(err);
            this.setState({
                isLoading: false,
                err: "Что-то пошло не так..."
            })
        })
    }

    render() {
        const {isLoading, repoList,err, userData} = this.state;
        if (isLoading) {
            return (
                <div className={styles.wrap}>
                    <Loader />
                </div>
            )
        }
        if (err) {
            return (
                <div className={styles.wrap}>
                    <p>{err}</p>
                </div>
            )
        }
        return (
            <div className={styles.wrap}>
                <Card className={styles.user_card}>
                    <div className={styles.info_about_user}>
                        <img src={userData.avatar_url} alt={userData.name} className={styles.user_avatar} />
                            <div className={styles.contacts}>
                                <h1 className={styles.name}>{userData.name}</h1>
                                <div className={styles.bio}>{userData.bio}</div>
                                    <a href='mailto:ksenia.pyagay@aiesec.com' className={styles.link}>
                                        <ion-icon name='mail' />
                                        { userContacts.email }
                                    </a>
                                    <a href='tg://resolve?domain=kseniaPyagay' className={styles.link}>
                                        <ion-icon name='send' />
                                        { userContacts.phoneNumber }
                                    </a>
                                <div className={styles.social_networks}>
                                    <a
                                        href='https://github.com/seasmail'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.link}
                                    >
                                        <ion-icon name='logo-github'></ion-icon>
                                    </a>
                                    <a
                                        href='https://vk.com/id433824523'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.link}
                                    >
                                        <ion-icon name='logo-vk'></ion-icon>
                                    </a>
                                    <a
                                        href='https://www.linkedin.com/in/ksenia-pyagay-4151b2162'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.link}
                                    >
                                        <ion-icon name='logo-linkedin'></ion-icon>
                                    </a>
                                </div>
                            </div>
                    </div>
                </Card>

                <Card className={styles.works}>
                        <div className={styles.works__wrapp}>
                                <div className={styles.repositories}>
                                    <ul className={styles.list}>
                                        {repoList.map(repo => (
                                            <li className={styles.repository} key={repo.id}>
                                                <div>
                                                    <div className={styles['repo-name-wrap']}>
                                                        <a
                                                            href={repo.svn_url}
                                                            className={styles['info-about-repository-wrapped__link']}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            {repo.name}
                                                        </a>
                                                    </div>
                                                    <div className={styles['info-about-repository']}>
                                                        <div className={styles[`info-about-repository__${repo.language}-icon`.toLowerCase()]}></div>
                                                        <p className={styles['info-about-repository__language']}>{repo.language}</p>
                                                        <p className={styles['info-about-repository__star']}>{repo.stargazers_count}</p>
                                                        <p className={styles['info-about-repository__forks']}>{repo.forks}</p>
                                                        <p className={styles['info-about-repository__update']}>{repo.updated_at}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>
                </Card>
            </div>
        );
    }
}

export default About;
