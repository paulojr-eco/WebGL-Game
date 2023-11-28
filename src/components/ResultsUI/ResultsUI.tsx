import Image from 'next/image';
import { MouseEventHandler } from 'react';

export interface ResultsUIProps {
  message: string;
  type: 'SUCCESS' | 'FAILURE' | 'ERROR';
  buttonFunction: MouseEventHandler<HTMLButtonElement>;
}

const ResultsUI = (props: ResultsUIProps) => {
  const imageSrc =
    props.type === 'SUCCESS'
      ? '/images/luigi/happy.png'
      : props.type === 'ERROR'
      ? '/images/luigi/fear.png'
      : '/images/luigi/crying.png';

  return (
    <div className='absolute h-screen w-screen flex justify-center items-center z-50 bottom-0 right-0'>
      <div
        className={`h-[600px] w-[600px] rounded-2xl ${
          props.type === 'SUCCESS'
            ? 'bg-lightGreen'
            : props.type === 'ERROR'
            ? 'bg-orange-500'
            : 'bg-red-500'
        } p-2`}
      >
        <div className='h-full w-full bg-uiBackground rounded-xl flex flex-col justify-center items-center text-black shadow-xl gap-y-8'>
          <p
            className={`${
              props.type === 'SUCCESS'
                ? 'bg-lightGreen'
                : props.type === 'ERROR'
                ? 'bg-orange-500'
                : 'bg-red-500'
            } p-4 rounded-xl text-white font-bold text-xl`}
          >
            {props.type === 'SUCCESS'
              ? 'PARABÉNS!'
              : props.type === 'ERROR'
              ? 'CALMA AÍ'
              : 'QUE PENA'}
          </p>
          <p className='text-[18px] text-center'>{props.message}</p>
          <Image
            src={imageSrc}
            height={500}
            width={500}
            alt='luigi character'
            className='h-[30vh] w-auto'
          />
          <button
            className={`${
              props.type === 'SUCCESS'
                ? 'bg-lightGreen'
                : props.type === 'ERROR'
                ? 'bg-orange-500'
                : 'bg-red-500'
            } p-4 rounded-xl text-white font-bold`}
            onClick={props.buttonFunction}
          >
            {props.type === 'SUCCESS'
              ? 'Jogar Novamente'
              : props.type === 'ERROR'
              ? 'Voltar'
              : 'Tentar Novamente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsUI;
