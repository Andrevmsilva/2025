import styles from './Topo.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/procurar.png';
import perfil from '../assets/user.png'

export default function Topo() {
  return (
    <div className={styles.topo}>
      <div className={styles.logo1}>
        <img src={logo} alt="Logo do site" className={styles.logo} />
      </div>

      <div className={styles.pesquisa}>
        <input type="text" placeholder="Buscar" />
        <img src={lupa} alt="Ícone de busca" className={styles.iconeBusca} />
      </div>

      <div className={styles.perfil}>
        <img src={perfil} alt="icone de perfil" className={styles.iconePerfil} />
      </div>
    </div>
  );
}