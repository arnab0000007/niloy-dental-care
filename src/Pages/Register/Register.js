import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerWithEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleRegister = (email,password,name) => {
      registerWithEmail(email,password,name)
          .then(result => {
              history.push(redirect_uri);
          })
  }


    const onSubmit = ({email,name,password}) => {

      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password Must contain 2 upper case');
        return;
      }
      handleRegister( email, password , name);
    };
    return (
        <div>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Input your name here" {...register("name",{ required: true })} />
                <input placeholder="Input your email here" {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Input your Password here" type="password" {...register("password",{ required: true })} />
                <input type="submit" />
            </form>
            <div className="row mb-3 text-danger">{error}</div>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;