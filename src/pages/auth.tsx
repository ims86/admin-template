/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconError, IconLogout } from '../components/icons';

export default function Authentication() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);

  function submit() {
    if (modo === 'login') {
      console.log('login pass');
    } else {
      console.log('cad pass');
    }
  }

  function erro(msg, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  return (
    <div
      className={`
        flex  
        h-screen 
        items-center 
        justify-center    
      `}
    >
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img
          src='https://source.unsplash.com/random'
          alt='Imagens tela autenticação'
          className='h-screen w-full object-cover'
        />
      </div>
      <div
        className={`
          m-10 
          w-full 
          md:w-1/2 
          lg:w-1/3
        `}
      >
        <h1
          className={`
            text-3xl font-bold mb-5
        `}
        >
          {modo === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {/* Mostrar erro na tela caso ocorra */}
        {error ? (
          <div
            className={`
              flex
              items-center
              bg-red-400 
              text-white 
              py-3 
              px-5 
              my-2 
              border-2 
              border-red-700 
              rounded-lg
            `}
          >
            {IconError(6)}
            <span className='ml-3'>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label='Email '
          tipo='email'
          obrigatorio
          valor={email}
          valorMudou={setEmail}
        />
        <AuthInput
          label='Senha '
          tipo='password'
          obrigatorio
          valor={pass}
          valorMudou={setPass}
        />

        <button
          onClick={submit}
          className={`
            w-full 
            bg-indigo-500 
            hover:bg-indigo-400
            text-white 
            rounded-lg 
            px-4 
            py-3 
            mt-6
          `}
        >
          {modo === 'login' ? 'Entre' : 'Cadastrar'}
        </button>

        <hr className='my-6 border-gray-300 w-full' />

        <button
          onClick={submit}
          className={`
            w-full 
            bg-red-500 
            hover:bg-red-400
            text-white 
            rounded-lg 
            px-4 
            py-3
          `}
        >
          Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className='mt-8'>
            Novo por aqui?
            <a
              onClick={() => setModo('cadastro')}
              className={`
                text-blue-500 
                hover:text-blue-700 
                font-semibold 
                cursor-pointer
              `}
            >
              {' '}
              Crie uma conta
            </a>
          </p>
        ) : (
          <p className='mt-8'>
            Já é cadastrado?
            <a
              onClick={() => setModo('login')}
              className={`
                text-blue-500 
                hover:text-blue-700 
                font-semibold 
                cursor-pointer
              `}
            >
              {' '}
              Faça o login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
