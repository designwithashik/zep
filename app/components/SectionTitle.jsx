
const SectionTitle = ({mainTitle, subTitle}) => {
    return (
        <div className="text-center mb-7">
            <h2 className="text-2xl font-bold">{mainTitle}</h2>
            <p className="text-xl ">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;