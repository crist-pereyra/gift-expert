const GifGridItem = ({ title, url }) => {
    return (
        <div className="my-4 rounded-lg overflow-hidden hover:shadow-lg relative group">
            <img className='max-h-[170px] w-full object-cover' src={url} alt={title} />
            <div className='absolute p-2 justify-center items-end inset-0 transition duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black flex'>
                <p className="text-white text-center">{title}</p>
            </div>
        </div>
    )
}

export default GifGridItem