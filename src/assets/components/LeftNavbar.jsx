import { GoHome } from "react-icons/go";
import { IoKeypadOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { RiApps2Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <div className="text-2xl md:text-3xl px-5 py-3 md:py-10 flex flex-row md:flex-col md:gap-y-16 items-center justify-center gap-x-6 border-2 black">
            <Link to='/home'><GoHome className="cursor-pointer " /></Link>
            <Link to="/"><IoKeypadOutline className="cursor-pointer" /></Link>
            <Link to="/subjectHadis"><IoBookOutline className="cursor-pointer" /></Link>
            <Link to="/bookMark"><FaRegBookmark className="cursor-pointer" /></Link>
            <Link to="/file"><RiApps2Line className="cursor-pointer" /></Link>
            <Link to="/find"><FiSend className="cursor-pointer" /></Link>
            <div className="border-2 p-3 rounded-lg cursor-pointer hidden md:block">
            <Link to="/about"><BiSolidDonateHeart className="cursor-pointer "/></Link>
            </div>



        </div>
    );
};

export default LeftNavbar;