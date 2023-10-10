import { useState } from 'react'
import PropTypes from "prop-types"
import search from '../assets/busqueda.png'

const trends = ['Sheldon', 'Pokemon', 'Musk', 'OK', 'Shrek']

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        setInputValue('');
        setCategories(categories => [inputValue, ...categories]);
        console.log(inputValue);
    }
    return (
        <section className="flex justify-beetwen items-center my-4 px-10">
            <form onSubmit={handleSubmit} className='w-1/2'>
                <div className='pr-2 bg-[#F0F0F0] border cursor-pointer border-[#E60023] rounded-full w-full my-1 flex justify-start items-center'>
                    <input placeholder='Search' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                    className='w-full text-sm px-6 py-1.5 text-black cursor-pointer bg-transparent focus:outline-none' />
                    <img src={search} alt="search" className='w-5 h-5' />
                </div>
            </form>
            <div className='w-1/2 mx-auto flex justify-end items-center gap-4'>
                {trends.map(trend => (
                    <spam onClick={() => setCategories(categories => [trend, ...categories])} className='py-1 px-3 bg-[#EED4D4] border cursor-pointer  rounded-full flex justify-start items-center' key={trend}><p className="text-center text-[#E60023]">{trend}</p></spam>
                ))}
            </div>
        </section>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

