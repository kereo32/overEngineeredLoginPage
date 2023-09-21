export default function Board() {
  return (
    <div className="flex flex-nowrap h-4/6 w-2/4 bg-custom-board-background z-10">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="relative col-span-2">
          <div className="flex flex-row flex-nowrap justify-start items-center w-full h-full">
            <img src="/images/door.png" alt="Image Description" className="w-full h-2/3" />
          </div>
        </div>
        <div className="col-span-2">Half Width</div>
      </div>
    </div>
  );
}
