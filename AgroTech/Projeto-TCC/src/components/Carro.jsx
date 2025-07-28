import styles from "./Carro.module.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";  

export default function Coisa() {
  return (
    <div className={styles.principal}>
      <Carousel data-bs-theme="white" className={styles.carro}>
        <Carousel.Item>
          <img className={styles.img1} src={img1} alt="First slide" />
          <Carousel.Caption style={{ marginBottom: "200px" }}>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.img2} src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.img3} src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
