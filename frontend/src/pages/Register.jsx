import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spiner/Spiner";
import { register, reset } from "../redux/slices/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
      toast.success(userData);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header text-center '>
                <h4>Registration Form</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={onSubmit}>
                  <div className='form-group mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      value={name}
                      placeholder='Enter your name'
                      onChange={onChange}
                    />
                  </div>
                  <div className='form-group mb-2'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      value={email}
                      placeholder='Enter your email'
                      onChange={onChange}
                    />
                  </div>
                  <div className='form-group mb-2'>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                      value={password}
                      placeholder='Enter your password'
                      onChange={onChange}
                    />
                  </div>
                  <div className='form-group mb-2'>
                    <input
                      type='password'
                      className='form-control'
                      id='confirmPassword'
                      name='confirmPassword'
                      value={confirmPassword}
                      placeholder='Enter your confirmPassword'
                      onChange={onChange}
                    />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
