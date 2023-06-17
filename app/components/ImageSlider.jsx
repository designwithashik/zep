
const ImageSlider = () => {
    const images = [
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75'

    ]
    const duplicatedImages = [...images, ...images, ...images];

    return (
        <div className="slider-container overflow-hidden">
            {duplicatedImages.map((image, index) => {
                return (
                    <img src={image} key={index} alt={`Bank ${index}`} className=""/>
                )
            })}
            
        </div>
    );
};

export default ImageSlider;