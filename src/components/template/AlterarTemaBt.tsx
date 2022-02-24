import { IconMoon, IconSun } from '../icons';

interface AlterarTemaProps {
  theme: string;
  alterTheme: () => void;
}

export default function AlterarTemaBt(props: AlterarTemaProps) {
  return props.theme === 'dark' ? (
    <div
      onClick={props.alterTheme}
      className={`
      hidden sm:flex items-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600
      w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
        flex items-center justify-center
        bg-white text-yellow-500 
        w-6 h-6 rounded-full
      `}
      >
        {IconSun(4)}
      </div>
      <div
        className={`
        hidden lg:flex items-center ml-3 cursor-pointer
        text-white
      `}
      >
        <span className='text-sm'>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alterTheme}
      className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900
      w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
        hidden lg:flex items-center mr-2 cursor-pointer
        text-gray-300
      `}
      >
        <span className='text-sm'>Escuro</span>
      </div>
      <div
        className={`
        flex items-center justify-center
        bg-black text-yellow-300 
        w-6 h-6 rounded-full
      `}
      >
        {IconMoon(4)}
      </div>
    </div>
  );
}
