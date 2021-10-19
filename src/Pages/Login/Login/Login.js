import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginWithEmail,signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmailLogin = (email,password) => {
      loginWithEmail(email,password)
          .then(result => {
              
              history.push(redirect_uri);
          })
  }

    const onSubmit = ({email,password}) => {

      if (password.length < 1) {
        setError('Input Your Password')
        return;
      }
      if (password.length < 6) {
        setError('At Least 6 digits')
        return;
      }
      handleEmailLogin( email, password );
    };
    return (
        <div>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Input your email here" {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Input your Password here" type="password" {...register("password",{ required: true })} />
                <input type="submit" />
            </form>
            <div className="row mb-3 text-danger">{error}</div>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>

            <Link to="/register"> Registere Here</Link>
        </div>
    );
};

export default Login;