import axios from "axios";
import { useEffect, useState } from "react";
import MenuOfHadis from "./MenuOfHadis";

const MainBody = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("../../../public/sohibukhari.json")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-5">
        <div>
        <div className="drawer md:hidden">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">সহিহ বুখারী</div>
    </div>
    {/* Page content here */}
    {/* Content */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-4/5 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <MenuOfHadis/>
    </ul>
  </div>
</div>
        </div>
      <div className="flex justify-between p-5 items-center">
        <h1 className="text-xl">সহিহ বুখারী</h1>
        <div>
          <label className="input flex items-center gap-2 bg-gray-100 md:border-2 p-2 rounded-lg font-normal text-lg">
            <input
              type="text"
              className="grow hidden md:block bg-gray-100"
              placeholder="Search for filter"
            />
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
      </div>
      <div className="text-sm">
        <p>
          সংকলক : শাইখ ইমামুল হুজ্জাহ আবু ‘আবদুল্লাহ মুহাম্মাদ বিন ইসমা’ঈল বিন ইবরাহীম বিন মুগীরাহ্‌ আল বুখারী আল-জু’ফী। মোট হাদীস সংখ্যা : ৭৫৬৩ টি। প্রকাশনী : তাওহীদ পাবলিকেশন্স। মৌলিক হাদীস গ্রন্থ হিসাবে সহীহুল বুখারী গ্রন্থটি হাদীসের কিতাবগুলির মধ্যে সর্বশ্রেষ্ঠ। শুধু তাই নয় এর সংশ্লিষ্ট ব্যক্তিগবের্গর সর্বজন স্বীকৃত মন্তব্য হলো : আল কুরআনের পরে মানব রচিত বা সংকলিত গ্রন্থের মধ্যে সর্বশ্রেষ্ঠ কিতাব নিঃসন্দেহে সহীহুল বুখারী। বুখারী সংকলন করতে গিয়ে ইমাম বুখারী (রহঃ) কে যে কী পরিমাণ পরিশ্রম ও সাধনা করতে হয়েছে তা বর্ণনাতীত। মহান আল্লাহ তা’আলা তাঁর এই পরিশ্রমকে ক্ববুল করুন এবং এ মহান সাদাকায়ে যারিয়ার জন্য তাঁকে জান্নাতুল ফেরদৌস-এর পুরষ্কারে ভুষিত করুন। - আমীন।
        </p>
      </div>
      <div>
        {
            data.map(data=><div key={data.code} className="text-sm flex justify-between px-2 md:px-10 py-5 border-2 my-5">
              <div className="border-2 px-3 py-1 text-white bg-primary rounded-full basis-1/8 flex items-center justify-center">
                {data.code}
              </div>
            {/* <div className="flex gap-x-10">
            </div> */}
            <div className="flex flex-col md:flex-row justify-between basis-7/8 w-full px-10">
              <p>{data.chapter}</p>
              <p>{data.hadith_range}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MainBody;
