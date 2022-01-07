import { Route, Redirect } from 'react-router'

const PrivateRoute = (props) => props.userLogged
    ? <Route {...props} />
    : <Redirect to="/login" />

export default PrivateRoute