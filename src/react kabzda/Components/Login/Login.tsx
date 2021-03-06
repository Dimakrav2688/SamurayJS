import React from 'react'
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validator';
import { Input, createField } from '../Common/FromsControls/FormsControls';
import { login } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom';
import style from '../Common/FromsControls/FormsControls.module.css'
import { AppStateType } from '../../redux/redux-store';

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps > 
= ({ handleSubmit, error, captchaUrl,  }) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email',[required], Input ) }

            {createField('Password', 'password', [required], Input, {type: 'password'} ) }

            {createField(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me' ) }       
            

            {captchaUrl && <img src={captchaUrl} alt='captcha' />}
            {captchaUrl &&  createField('Symbols from image', 'captcha', [required], Input, {} ) }

            {error && <div className={style.formSummeryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps >({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void //в auth-reduser, логин принимает пропсы тут копируем
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type GetStringKeys<T> = Extract<keyof T, string>
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>

}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
