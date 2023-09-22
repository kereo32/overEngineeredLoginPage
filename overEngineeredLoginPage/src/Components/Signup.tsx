import Board from './Board';

export default function Signup() {
  return (
    <div className="flex flex-nowrap h-screen w-screen justify-center items-center">
      <Board callType="register" />
    </div>
  );
}
