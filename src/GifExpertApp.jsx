import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
import logo from './assets/pinterest.svg'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sheldon'])
  return (
    <div className="">
      <div className="border-l-[10px] border-[#E60023] h-36 bg-[#111111] shadow-lg text-white py-5 px-10 flex justify-start items-center gap-5">
        <img src={logo} className='w-10 h-10' />
        <h2 className="text-3xl font-semibold">
          Gif Expert
        </h2>
      </div>
      <AddCategory setCategories={setCategories} />
      <hr className="mx-10" />
      <ul className="px-10">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </div>
  )
}

export default GifExpertApp