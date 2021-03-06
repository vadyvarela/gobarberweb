import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layout/auth';
import DefaultLayout from '../pages/_layout/default';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = true;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} render={props => (
        <Layout>
<Component>
        </Layout>
    )} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
