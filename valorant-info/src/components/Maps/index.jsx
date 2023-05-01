import styles from "./Maps.module.css";
import Title from "components/Title";
// import file from "../../maps.json";
import { useEffect, useState } from "react";
import Map from "./Map";
import Carousel from 'react-bootstrap/Carousel';


export default function Maps(){
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        async function searchMaps() {
            const resposta = await fetch('https://valorant-api.com/v1/maps?language=pt-BR');
            const dados = await resposta.json();
            // const dados = file;
            return dados.data;
        }

        searchMaps()
            .then(mapas => setMaps(mapas));
    }, []);

    return(
        <section
            id="mapas"
            className={styles.content}
        >
            <Title>
                MAPAS
            </Title>
            <Carousel className={styles.carrossel} interval={null} >
                {maps.map((mapa) => {
                    return(
                        <Carousel.Item  key={mapa.uuid}>
                            <Map {...mapa}/>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
}