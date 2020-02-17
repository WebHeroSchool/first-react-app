import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './About.module.css';
import Octokit from '@octokit/rest';
import Loader from '../Loader/Loader';


const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList:[],
        err: false,
        userData: {},
        count: 0
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
                err: "Что-то пошло не так..."
            })
        })
    }

    render() {
        const {isLoading, repoList,err, userData, count} = this.state;
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
                    <p>Не удалось загрузить данные</p>
                </div>
            )
        }
        return (
            <div>
                <Card className={styles.about}>
                    <div className={styles.info}>
                        <p className={styles.info_name}>{userData.name}</p>
                        <p className={styles.info_mail}> <ion-icon name="mail">{userData.login}</ion-icon>  </p>
                    </div>
                </Card>

                <Card className={styles.git}>
                    <p className={styles.git__heading}>Repositories on GitHub</p>
                    {repoList &&
                    repoList.map(item => (
                        <div key={item.id}>
                            {item.name} {item.html_url}
                        </div>
                    ))}
                </Card>
            </div>
        );
    }
}

export default About;
