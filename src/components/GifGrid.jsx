import GifGridItem from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif"

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGif(category);
    return (
        <section className="mb-20 mt-5">
            <h3 className="font-semibold">{category}</h3>
            {loading && <p className="text-center">Loading</p>}
            <div className="gif-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </section>
    )
}

export default GifGrid