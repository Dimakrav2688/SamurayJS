import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../react kabzda/redux/redux-store'



let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})
type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
   
}

export function withAuthRedirectHOC<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let { isAuth, ...restProps } = props
        if (!isAuth) return <Redirect to='/Login' />
        return <WrappedComponent {...restProps as unknown as WCP} />
    }


    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {})
        (RedirectComponent);

    return ConnectedAuthRedirectComponent;

}