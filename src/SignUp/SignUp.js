import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';
import { RxHome } from "react-icons/rx";
import img from '../assets/login.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password, name)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  };
  return (
    <div className="hero h-screen relative">
      <div className="absolute top-1/4 right-0">
          <div className="h-10 w-10 bg-[#C8C000] flex justify-center items-center cursor-pointer">
            <Link to="/">
              <RxHome className="text-black"></RxHome>
            </Link>
          </div>
        </div>
      <div className="flex-col lg:flex-row grid md:grid-cols-2 ">
        <div className="text-center lg:text-left">
          <img src={img} alt='' />
        </div>
        <div className="card flex-shrink-0 max-w-sm p-10 shadow-2xl bg-base-100 w-full">
          <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" name='password' className="input input-bordered" required />
            </div>



            <div className="flex gap-4 mt-4">
              <div className="flex gap-4 items-center">
                <label className="text-base text-black">Candidate</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-border"
                  value="male"
                />
              </div>

              <div className="flex gap-4 items-center">
                <label className="text-base text-black">Company</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-border"
                  value="woman"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn text-black bg-[#C8C000] hover:bg-[#C8C000] border-none" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className='text-center'>Already Have an Account? <Link to="/signin" className='text-[#C8C000] font-bold '>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;