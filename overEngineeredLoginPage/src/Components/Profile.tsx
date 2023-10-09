import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="mb-4 text-center">
        <h3 className="font-garamond text-4xl text-white">Welcome to the protected Profile Page</h3>
      </div>
      <div className="text-center">
        <p className="font-garamond text-4xl text-white">For this project's purpose, I did not add any additional stuff</p>
        <Link target="_blank" rel="noopener noreferrer" to={'https://github.com/kereo32'}>
          <p className="font-garamond text-xl text-white mt-4 hover:text-blue-700">You can find more about my work on this link</p>
        </Link>
      </div>
    </div>
  );
}
