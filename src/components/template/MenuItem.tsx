import Link from 'next/link';

interface MenuItemProps {
  texto: string;
  icone: any;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderMenu() {
    return (
      <a
        className={`
          flex flex-col 
          justify-center 
          items-center w-20 h-20 
          text-gray-600 
          dark:text-gray-200 
          ${props.className}
        `}
      >
        {props.icone}
        <span className={`text-xs font-light`}>{props.texto}</span>
      </a>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className='hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer'
    >
      {props.url ? <Link href={props.url}>{renderMenu()}</Link> : renderMenu()}
    </li>
  );
}
