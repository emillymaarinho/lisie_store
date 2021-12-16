import { Route, Redirect } from 'react-router'

const PrivateRoute = (props) => localStorage.getItem("userLogged")
? <Route {...props}/>
: <Redirect to="/login" />

export default PrivateRoute