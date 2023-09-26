export default function Home() {
  return (
    <div className="flex flex-col flex-nowrap h-screen text-white">
      <div className="flex flex-col h-[80%] justify-center items-center w-full">
        <h3 className=" font-garamond text-4xl"> Welcome!</h3>
        <p className="font-garamond text-xl font-light mt-8 text-center">
          This is a website where you can login and logout! Awesome right ?
          <br /> Place your mouse on top of the website for magic navigation bar to show up!
        </p>
      </div>
    </div>
  );
}
