import Image from 'next/image';
import Button from '../../components/Button';

function GameInterface() {
  return (
    <div className='flex flex-col gap-y-6 justify-center items-center w-screen h-screen'>
      <Image
        src={'/images/logo.png'}
        width={300}
        height={300}
        alt='game logo'
      />
      <Button name={'Jogar'} link={'/play'}/>
      <Button name={'Instruções'} link={'/game/instructions'}/>
      <Button name={'Sobre'} link={'/game/about'}/>
    </div>
  );
}

export default GameInterface;
