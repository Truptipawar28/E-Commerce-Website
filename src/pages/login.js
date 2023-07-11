import { Fragment, useContext, useRef } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import CartContext from "../Store/cart-context";
import NavigationBar from "../components/Navbar/NavigationBar";
import './login.css';

const LoginForm = () => {
     const history = useHistory();
    const emailInputRef = useRef();
    const passwordINputRef = useRef();

    const cartCxt = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordINputRef.current.value;
        console.log(enteredEmail);
        console.log(enteredPassword);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFLeYQoTu8AR2Uz2H5m_c7ejicoZ_MHck', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then((res) => {
           
            if(res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    console.log(data.error.message);
                    throw new Error(errorMessage);
                })
            }
        })
        .then((data) =>{
            cartCxt.login(data.idToken);
            history.replace('/');
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    return(
        <Fragment>
        <NavigationBar></NavigationBar>
        <div className="form shadow">
            <h2 className="text-center">Login</h2>
            <form onSubmit={submitHandler}>
                <div className="control">
                    <label>Email</label>
                    <input type="email" ref={emailInputRef}></input>
                </div>
                <div className="control">
                    <label>Password</label>
                    <input type="password" ref={passwordINputRef}></input>
                </div>
                    <div className=" actions btn btn-dark btn-ghost">
                    <button>Login</button>
                    
                </div>
            </form>
        </div> 
    </Fragment>
    )
};

export default LoginForm;