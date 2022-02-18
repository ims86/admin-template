import { IconBell, IconHome, IconSettings } from '../icons';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url='/' texto='Home' icone={IconHome} />
        <MenuItem url='/ajustes' texto='Ajustes' icone={IconSettings} />
        <MenuItem url='/notificacao' texto='Notificações' icone={IconBell} />
      </ul>
    </aside>
  );
}
