import axios from "axios";
import { useEffect, useState } from "react";

const MenuOfHadis = () => {
    const [data,setData]=useState([])
    const [lesson,setLesson]=useState([])
    const [active,setActive]=useState(true)
    const isActive=(data)=>{
        setActive(data)
    }
    useEffect(()=>{
        axios.get('../../../public/book.json')
        .then(res=>setData(res.data))
        .catch(error=>console.log(error))

        axios.get('../../../public/lesson.json')
        .then(res=>{
            console.log(res)
            setLesson(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="text-sm md:text-sm ">
            <div className="flex justify-around text-center border-2 w-5/6 fixed md:w-1/5 bg-white">
                <h1 onClick={()=>isActive(true)} className={active==true?`border-2 flex-1 py-3 bg-primary text-white`:`border-2 flex-1 py-3 text-black`}>বই</h1>
                <h1 onClick={()=>isActive(false)} className={active==false?`border-2 flex-1 py-3 bg-primary text-white`:`border-2 flex-1 py-3 text-black`}>অধ্যায়</h1>
            </div>
            <div className="md:p-3 pt-16">
        <label className="input flex items-center gap-2 bg-gray-100 border-2 border-gray-200 md:border-2 p-2 rounded-lg font-normal">
          <input type="text" className="grow bg-gray-100" placeholder="Search for filter" />
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
      <div className="p-3 space-y-2">
        {
            active==true?
            data.map(data=><div key={data.code} className="flex items-center w-full md:px-5 py-2 space-x-2 md:space-x-5 bg-gray-100 rounded-lg">
            <div className="border-2 px-3 py-1 rounded-full">{data.code}</div>
            <div className="">
                <h1 className="tex-sm">{data.name}</h1>
                <p className="text-xs text-gray-500">সর্বোমোট হাদিস-{data.total_hadiths}</p>
            </div>
        </div>)
        :
        lesson.map(lesson=><div key={lesson.code} className="flex items-center w-full px-5 py-2 space-x-5 bg-gray-100 rounded-lg">
            <div className="border-2 px-3 py-1 rounded-full">{lesson.code}</div>
            <div className="">
                <h1 className="tex-sm">{lesson.name}</h1>
                <p className="text-xs text-gray-500">সর্বোমোট হাদিস-{lesson.total_hadiths}</p>
            </div>
        </div>)
        }
      </div>
        </div>
    );
};

export default MenuOfHadis;