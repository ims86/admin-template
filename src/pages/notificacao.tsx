import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notificacao() {
  const ctx = useAppData();
  return (
    <Layout titulo='Notificações' subtitulo='Notificações e mensagens'>
      <h3>{ctx.theme}</h3>
    </Layout>
  );
}
