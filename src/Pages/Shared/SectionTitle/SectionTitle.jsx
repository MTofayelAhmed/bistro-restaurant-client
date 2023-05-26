

const SectionTitle = ({Heading, SubHeading}) => {
  return (
    <div className="text-center mx-auto md:w-3/12 my-6">
      <p className="text-yellow-600 p-2">---{SubHeading}---</p>
      <h2 className="text-4xl uppercase border-y-4 p-3 ">{Heading}</h2>
    </div>
  );
};

export default SectionTitle;