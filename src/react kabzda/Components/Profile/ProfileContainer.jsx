import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reduser';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirectHOC } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";





class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizetUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snaphot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }



    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} 
                savePhoto={this.props.savePhoto}
                />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizetUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    savePhoto: state.profilePage.savePhoto,


})
//пропс isAuth: state.auth.isAuth вырвали с мапстейт то пропс и потянули в шаблон НОС. потом зарефакторим говорил димон)

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirectHOC
)(ProfileContainer)



//Важно!!! функция compose работает снизу в верх. Тоесть то что с низу начальное действие
//далее верх и в верх окончание прокидывания в сонект. 

