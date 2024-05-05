import MainBody from "../components/MainBody";
import MenuOfHadis from "../components/MenuOfHadis";

const Hadis = () => {
    return (
        <div className="flex justify-between items-center   text-xl md:text-3xl md:gap-x-5">
            <div className="md:basis-1/4 border-2 overflow-y-auto h-[85vh] bg-white hidden md:block">
            <MenuOfHadis/>
            </div>
            <div className="md:basis-3/4 bg-white h-[85vh] overflow-y-auto">
            <MainBody/>
            </div>
        </div>
    );
};

export default Hadis;