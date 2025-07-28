import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./Cards.module.css"; 
import servicos from "../assets/servicos.png";
import maquinario from "../assets/maquinario.png";
import pecas from "../assets/peça.png";
import produtos from "../assets/produtos.png";

function Cards() {
  return (
    <div className={styles.tudo}>

      <Card className={styles.cubao}>
        <Card.Title className={styles.titulo}>Serviços</Card.Title>
          <Card.Body>
            <div className={styles.imgpai}><Card.Img className={styles.img} src={servicos}/></div>
            <Card.Text className={styles.descricao}>Compra e venda de serviços</Card.Text>
            <div className={styles.sla}><Button className={styles.botao}>Buscar</Button></div>
          </Card.Body>
      </Card>

      <Card className={styles.cubao}>
        <Card.Title className={styles.titulo}>Maquinários</Card.Title>
          <Card.Body>
            <div className={styles.imgpai}><Card.Img className={styles.img} src={maquinario}/></div>
            <Card.Text className={styles.descricao}>Compra e venda de serviços</Card.Text>
            <div className={styles.sla}><Button className={styles.botao}>Buscar</Button></div>
          </Card.Body>
      </Card>

      <Card className={styles.cubao}>
        <Card.Title className={styles.titulo}>Peças</Card.Title>
          <Card.Body>
            <div className={styles.imgpai}><Card.Img className={styles.img} src={pecas}/></div>
            <Card.Text className={styles.descricao}>Compra e venda de serviços</Card.Text>
            <div className={styles.sla}><Button className={styles.botao}>Buscar</Button></div>
          </Card.Body>
      </Card>

      <Card className={styles.cubao}>
        <Card.Title className={styles.titulo}>Produtos</Card.Title>
          <Card.Body>
            <div className={styles.imgpai}><Card.Img className={styles.img} src={produtos}/></div>
            <Card.Text className={styles.descricao}>Compra e venda de serviços</Card.Text>
            <div className={styles.sla}><Button className={styles.botao}>Buscar</Button></div>
          </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;