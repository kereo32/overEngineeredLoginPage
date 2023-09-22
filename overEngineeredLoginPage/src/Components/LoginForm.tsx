import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function LoginForm() {
  return (
    <div className="flex flex-col flex-nowrap w-full h-full justify-center items-center">
      <div className="grid grid-rows-6 bg-white h-[60%] w-[70%] rounded shadow-md">
        <div className="col-span-6 border-b-2 shadow-lg">
          <div className="flex flex-row flex-nowrap justify-between items-center">
            <div className="flex flex-col flex-nowrap w-full mt-1 ml-3">
              <h1 className=" font-garamond text-cyan-800 text-sm opacity-60">ALREADY MEMBERS</h1>
            </div>
            <div className="flex flex-row flex-nowrap w-full mr-3 justify-end">
              <h1 className=" font-garamond text-cyan-800 text-sm opacity-60">Need Help?</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center justify-center col-span-6 row-span-5">
          <Formik
            initialValues={{ name: '', email: '' }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="grid grid-cols-1 gap-4">
              <Field className="border-2 rounded-md" placeholder="Enter your email" name="email" type="email" />
              <Field className="border-2 rounded-md" placeholder="Enter your password" name="password" type="password" />
              <button className="border-2 rounded h-10 bg-button font-garamond text-white" type="submit">
                SIGN IN!
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="flex flex-col flex-nowrap justify-center items-center mt-6">
        <h1 className="font-garamond text-white text-md opacity-70">Don't you have an account ?</h1>
        <h1 className="font-garamond text-cyan-800 text-md opacity-60">Create an account</h1>
      </div>
    </div>
  );
}
