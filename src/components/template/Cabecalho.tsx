import useAppData from '../../data/hook/useAppData';
import AlterarTemaBt from './AlterarTemaBt';
import Titulo from './Titulo';

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const ctx = useAppData();

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end`}>
        <AlterarTemaBt theme={ctx.theme} alterTheme={ctx.alterTheme} />
      </div>
    </div>
  );
}
