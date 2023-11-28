const About = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-2xl'>
      <div className='w-[800px] h-[400px] bg-gradient-to-b from-green to-blue rounded-2xl p-[5px]'>
        <div className='h-full w-full bg-background rounded-xl flex flex-col justify-center items-center px-4 text-center'>
          <h1 className='font-bold'>Sobre</h1>
          <p> Trabalho Final - CIC270 </p>
          <h2 className='font-bold mt-8'>Autor</h2>
          <p> Paulo Junior Carvalho de Paiva - 2018004783 </p>
          <h2 className='font-bold mt-8'>Tecnologias Utilizadas</h2>
          <p>Game 2D: Biblioteca Phaser WebGL</p>
          <p>
            Cena 3D: ThreeJS, React Three Fiber, React Three DREI e React Three
            Rapier
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
