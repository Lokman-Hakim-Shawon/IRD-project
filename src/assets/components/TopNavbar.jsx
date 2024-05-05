import { IoKeypadOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2 md:py-5 border-2">
      {/* left part */}
      <div className="flex items-center gap-x-5 mx-5">
        <div className="border-2 p-2 rounded-lg">
          <IoKeypadOutline className="text-xl " />
        </div>

        <div className="hidden md:block">
          <h3 className="text-xl font-bold">হাদিস সমূহ</h3>
          <p className="text-xs">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>

      {/* right part */}
      <div className="flex items-center gap-x-5 mr-5">
      <div>
        <label className="input flex items-center gap-2 bg-gray-100 md:border-2 p-2 rounded-lg">
          <input type="text" className="grow hidden md:block bg-gray-100" placeholder="Search Hadith" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className=" border-2 rounded-xl p-2">
        <IoMdSettings className="text-xl" />
      </div>
      </div>
    </div>
  );
};

export default TopNavbar;
