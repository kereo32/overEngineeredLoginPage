import { useSelector } from 'react-redux';
import { useState } from 'react';

interface UserState {
  isAuthenticated: boolean;
  userInformation: {
    username: string;
    email: string;
  } | null;
}

export default function Navbar() {
  const [pressedButton, setPressedButton] = useState<HTMLButtonElement | null>(null);
  const username = useSelector((state: UserState) => state.userInformation?.username);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement;

    if (pressedButton) {
      pressedButton.classList.remove('opacity-100');
      pressedButton.classList.add('opacity-50');
    }

    setPressedButton(button);

    button.classList.remove('opacity-50');
    button.classList.add('opacity-100');
  };
  const handleMouseEnter = () => {
    console.log('xd');
    setIsMouseOver(true);
  };
  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="flex  flex-nowrap flex-row h-16 w-full justify-start bg-transparent">
      <div
        className={`grid grid-cols-2 gap-4 ml-10 w-full transform ${
          isMouseOver ? 'translate-y-0' : '-translate-y-16'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleButtonClick} className={`font-garamond text-xl text-white opacity-100 hover:opacity-100`}>
            Sign-Up!
          </button>
          <button onClick={handleButtonClick} className="font-garamond text-xl text-white opacity-50 hover:opacity-100">
            Log-in
          </button>
        </div>

        <div className="flex items-center justify-center">
          <h3 className=" font-garamond text-xl text-white text-center items-center">{`Welcome,  ${username ? username : 'Guest'}`}</h3>
        </div>
      </div>
    </div>
  );
}
