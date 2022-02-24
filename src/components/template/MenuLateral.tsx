import { IconBell, IconHome, IconLogout, IconSettings } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  return (
    <aside
      className={`
        flex flex-col 
        items-center 
        bg-gray-200 text-gray-700
        dark:bg-gray-900 `}
    >
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500  to-purple-800 
          h-20 w-20   
      `}
      >
        <Logo />
      </div>
      <ul className='flex-grow'>
        <MenuItem url='/' texto='Home' icone={IconHome} />
        <MenuItem url='/ajustes' texto='Ajustes' icone={IconSettings} />
        <MenuItem url='/notificacao' texto='Notificações' icone={IconBell} />
      </ul>
      <ul>
        <MenuItem
          texto='Sair'
          icone={IconLogout}
          onClick={() => console.log('Logout')}
          className='
            text-red-600 hover:bg-red-400 hover:text-white
            dark:text-red-400 dark:hover:text-white'
        />
      </ul>
    </aside>
  );
}
