import ScrambledText from "../fragments/scrambleText";

const About = () => {
  return (
    <>

    <div className="flex flex-col backdrop-blur-sm border-2 border-white p-4 w-full justify-center items-center px-4 text-center relative">
       {/* <h1 className="text-white text-4xl font-bold">
          About
        </h1> */}
        <ScrambledText
            className="scrambled-text-demo text-white text-lg sm:text-2xl"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".:"}
          >
              I specialize in building websites that are not only visually appealing but also <span className='bg-yellow text-black'>functional </span>and <span className='bg-yellow text-black'>user-friendly.</span>
            <br></br> <br></br>
            If you’re looking for someone who can turn your concept into a fast, functional, and visually engaging website...<br></br> <span className='bg-yellow text-black'>I’d love to help !</span>

          </ScrambledText>
        {/* <div className='text-black border-2 border-black max-w-[700px] text-left bg-white p-2 md:p-8  '>
          I specialize in building websites that are not only visually appealing but also <span className='bg-yellow'>functional </span>and <span className='bg-yellow'>user-friendly.</span>
            <br></br> <br></br>
            If you’re looking for someone who can turn your concept into a fast, functional, and visually engaging website...<br></br> <span className='bg-yellow'>I’d love to help !</span>
         </div> */}
        
    </div>
    </>
  );
};

export default About;