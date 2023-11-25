import InstructionsCarousel from "@/components/InstructionsCarousel/InstructionsCarousel";

const Instructions = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-2xl'>
      <div className='w-[1000px] h-[630px] bg-gradient-to-b from-green to-blue rounded-2xl p-[5px]'>
        <div className='h-full w-full bg-background rounded-xl flex flex-col justify-center items-center px-4'>
          <h1 className='font-bold mt-8'>Instruções</h1>
          <InstructionsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
