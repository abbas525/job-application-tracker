import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect, getAccessTokenSilently  } = useAuth0();

    console.log('Token:')

    return ( 
        <div className="login">
            <h1>Login Page</h1>
            <button className="btn btn-secondary" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
     );
}
 
export default LoginPage;