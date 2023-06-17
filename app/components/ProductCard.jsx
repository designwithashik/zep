
const ProductCard = ({product}) => {
    const {bgColor, image, mainTitle, description} = product
    return (
        <div className={`rounded-xl ${bgColor} flex gap-3`}>
            <img className="w-28" src={image} alt="" />
            <div className="">
                <h2 className="text-xl font-bold">{mainTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;