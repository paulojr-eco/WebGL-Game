'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './InstructionsCarousel.css';
import Image from 'next/image';

const InstructionsCarousel = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      effect='fade'
      modules={[Navigation, Pagination, EffectFade]}
      className='h-full w-full'
    >
      <SwiperSlide className='w-full h-full flex flex-col items-center gap-y-8 bg-background py-8 px-12'>
        <span>
          O Pipes Graph se trata de um jogo que trabalha o tema de Teoria de
          Grafos. Nele você será apresentado a fases com seus respectivos grafos
          representados por sistemas de encanamento. Abaixo há o exemplo de um
          mesmo grafo representado em dois formatos diferentes:
        </span>

        <Image
          src={'/images/graph-pipe-example.png'}
          height={500}
          width={500}
          alt='graph game example'
        />
        <Image
          src={'/images/simple_graph.png'}
          height={400}
          width={400}
          alt='sample graph equivalent'
        />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex flex-col items-center gap-y-8 bg-background py-8 px-12'>
        <span>
          Cada um dos componentes de um grafo possui seu respectivo elemento no
          sistema de encanamento do jogo. Abaixo há uma lista com todos os
          elementos e suas funções:
        </span>
        <div className='grid grid-cols-4 gap-8 items-center'>
          <Image
            src='/images/water-tank-full.png'
            height={35}
            width={35}
            alt='filled water tank'
            className='justify-self-end'
          />
          <p className='col-span-3 ml-6'>
            Tanque de água cheio: Início do grafo;
          </p>
          <Image
            src='/images/water-tank-empty.png'
            height={35}
            width={35}
            alt='empty water tank'
            className='justify-self-end'
          />
          <p className='col-span-3 ml-6'>
            Tanque de água vazio: Término do grafo;
          </p>
          <Image
            src='/images/pipe-straight-inst.png'
            height={60}
            width={60}
            alt='node as pipe format'
            className='justify-self-end'
          />
          <p className='col-span-3 ml-6'>Cano: Vértice ou nó do grafo; </p>
          <Image
            src='/images/connection.png'
            height={60}
            width={60}
            alt='connection between nodes as pipe format'
            className='justify-self-end'
          />
          <p className='col-span-3 ml-6'>
            Válvula de controle de vazão: Aresta direcionada com o respectivo
            peso atrelado àquele caminho do grafo.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex flex-col items-center gap-y-8 bg-background py-8 px-12'>
        <p>
          A direção da aresta é definida de acordo com a direção apontada pela
          chave de ligação da válvula. Assim sendo, a aresta presente no grafo a
          seguir realiza a ligação entre dois vértices que podem ser percorridos
          somente da esquerda para a direita.
        </p>
        <Image src='/images/sample-graph-pipe.png' alt='sample graph made with pipes' height={400} width={400}/>
        <p>
          O papel do jogador é manipular quais válvulas estão abertas ou
          fechadas de forma que o grafo resultante contenha o maior caminho
          entre o ponto inicial (fonte da água) e o final (reservatório vazio).
          Isso deve ser realizado antes que o timer regressivo chegue a zero.
        </p>
        <p>
          Para calcular o maior caminho se baseie nos valores dos pesos das
          arestas que o compõem.
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default InstructionsCarousel;
