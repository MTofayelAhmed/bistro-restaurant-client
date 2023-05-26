import { Parallax } from 'react-parallax';



const Cover = ({img, title} ) => {
  console.log(img)
  return (

    <Parallax
    bgImage= {img}
    renderLayer={percentage => (
        <div
            style={{
                position: 'absolute',
             
                left: '50%',
                top: '50%',
                width: percentage * 500,
                height: percentage * 500,
            }}
        />
    )}
>
<div
      className="hero h-[500px]"
     
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content border-slate-700 opacity-80  border">
        <div className="max-w-md mx-32 my-6  ">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">Would You like to try a dish</p>
       
        </div>
      </div>
    </div>
</Parallax>
 
  );
};

export default Cover;
