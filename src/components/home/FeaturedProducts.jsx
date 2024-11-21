import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="my-4 ">
            <h2 className="text-2xl border-b-2">Featured Products</h2>
            <div className="my-4 grid grid-cols-3 gap-16">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default FeaturedProducts;