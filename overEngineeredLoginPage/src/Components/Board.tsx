import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { motion } from 'framer-motion';

type BoardProps = {
  callType: 'login' | 'register' | 'forgotPassword';
};

export default function Board(props: BoardProps) {
  return (
    <motion.div
      className="flex flex-nowrap bg-custom-board-background min-w-[60%] z-10 bg-contain bg-no-repeat rounded-md shadow-2xl"
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-4 w-full min-h-[500px]">
        <div className="relative col-span-2 ">
          <div className="flex flex-row flex-nowrap justify-start items-center w-full h-full">
            <img src="/images/door.png" alt="Image Description" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col flex-nowrap w-full h-full justify-center items-center">
            {props.callType === 'login' ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
