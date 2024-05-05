import { Outlet } from "react-router-dom";
// import BodySection from "../components/BodySection";
import LeftNavbar from "../components/LeftNavbar";
import TopNavbar from "../components/TopNavbar";

const HomePage = () => {
    return (
        <div className="bg-gray-200">
            <TopNavbar/>
            <div className="flex flex-col-reverse md:flex-row gap-x-5">
                <div className="basis-1/8 md:h-[90vh] bg-white">
                <LeftNavbar />
                </div>
                <div className=" basis-7/8 w-[100vw] h-[75vh] md:h-[87vh] md:w-[90vw] md:mt-5">
                <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;