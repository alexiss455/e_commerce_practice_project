import Navitem from "./navitem";
import Avatar from "./avatar";
import Cart from "./cart";
function header({count}) {
  return (
    <header className="flex items-center justify-between h-24 border-b relative max-md:px-6">
      <div className=" flex items-center justify-center gap-x-10">
        <h1 className="text-3xl font-bold">sneakers</h1>
        <Navitem />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10">
        <Cart 
          count={count} 
        />
        <Avatar />
      </div>
    </header>
  );
}
export default header;
