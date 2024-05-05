import MenuOfHadis from "../components/MenuOfHadis";

const Hadis = () => {
    return (
        <div className="flex justify-between items-center h-full  text-xl md:text-3xl gap-x-5">
            <div className="basis-1/4 border-2 overflow-y-auto h-[85vh] bg-white">
            <MenuOfHadis/>
            </div>
            <div className="basis-3/4 bg-white h-[85vh]">
            <h1>হাদিসের কোন তথ্য পাওয়া যাইনি !</h1>
            </div>
        </div>
    );
};

export default Hadis;