import { Route, Redirect } from 'react-router'

const PublicRoute = (props) => localStorage.getItem("userLogged")
    ? <Redirect to="/products" />
    : <Route {...props} />

export default PublicRoute