import Board from './Board';

export default function Login() {
  return (
    <div className="flex flex-nowrap h-screen w-screen justify-center items-center">
      <Board callType="login" />
    </div>
  );
}
