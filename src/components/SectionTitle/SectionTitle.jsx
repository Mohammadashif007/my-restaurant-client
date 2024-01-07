const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 w-1/4
         mx-auto text-center">
            <h2 className="text-[#D99904] mb-3">---{subHeading}---</h2>
            <h2 className="text-3xl border-t-2 border-b-2 border-gray-400 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;