import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../helpers/helper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/user';
import Cookies from 'js-cookie';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-nowrap w-full h-full justify-center items-center">
      <div className="grid grid-rows-6 bg-white md:h-[60%] w-[70%] rounded shadow-md">
        <div className="col-span-6 border-b-2 shadow-lg">
          <div className="flex flex-row flex-nowrap justify-between items-center">
            <div className="flex flex-col flex-nowrap w-full mt-1 ml-3">
              <h1 className="font-garamond text-cyan-800 text-sm opacity-60">NEW HERE ?</h1>
            </div>
            <div className="flex flex-row flex-nowrap w-full mr-3 justify-end">
              <h1 className="font-garamond text-cyan-800 text-sm opacity-60">Need Help?</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center justify-center col-span-6 row-span-5">
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={async (values) => {
              post('https://oel-api-c91f06239a18.herokuapp.com/auth/register', values).then(() => {
                post('https://oel-api-c91f06239a18.herokuapp.com/auth/login', { email: values.email, password: values.password }).then((res) => {
                  const userData: { username: string; email: string } = {
                    username: res.username,
                    email: res.email,
                  };
                  Cookies.set('sessionToken', res.authentication.sessionToken, { sameSite: 'strict', expires: 1 });
                  dispatch(loginSuccess(userData));
                  navigate('/profile');
                });
              });
            }}
          >
            <Form className="grid grid-cols-1 gap-4">
              <Field className="border-2 rounded-md" placeholder="Enter your name" name="username" type="text" />
              <Field className="border-2 rounded-md" placeholder="Enter your email" name="email" type="email" />
              <Field className="border-2 rounded-md" placeholder="Enter your password" name="password" type="password" />
              <button className="border-2 rounded h-10 bg-button font-garamond text-white" type="submit">
                SIGN UP!
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="flex flex-col flex-nowrap justify-center items-center mt-6">
        <h1 className="font-garamond text-white text-md opacity-70">Already a member ?</h1>
        <Link to={'/login'}>
          <h1 className="font-garamond text-cyan-800 text-md opacity-60">Sign in!</h1>
        </Link>
      </div>
    </div>
  );
}
