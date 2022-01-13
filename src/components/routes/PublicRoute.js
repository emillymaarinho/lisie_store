import { Route, Redirect } from 'react-router'

const PublicRoute = (props) => props.userLogged
    ? <Redirect to="/products" />
    : <Route {...props} />

export default PublicRoute