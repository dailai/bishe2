import React from 'react';
import {Route, Redirect} from 'react-router-dom';


// 这两部分是阻止未登陆的人进入上传页面
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: props.location }
                }}
            />
            )
        }
        />
    );
}



