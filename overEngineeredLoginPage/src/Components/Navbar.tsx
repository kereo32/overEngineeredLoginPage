import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    setPressedButton(document.querySelector('button'));
    console.log(pressedButton);
  }, [pressedButton]);

  return (
    <div className="flex flex-nowrap flex-row h-16 w-full justify-start bg-transparent">
      <div className="grid grid-cols-2 gap-4 ml-10">
        <button onClick={handleButtonClick} className={`font-garamond text-xl text-white opacity-50 hover:opacity-100`}>
          Sign-Up!
        </button>
        <button onClick={handleButtonClick} className="font-garamond text-xl text-white opacity-50 hover:opacity-100">
          Log-in
        </button>
      </div>
    </div>
  );
}
