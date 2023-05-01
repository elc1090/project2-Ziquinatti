import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer id="footer">
            <div className={styles.links}>
                <p>ESTE SITE NÃO É OFICIAL!</p>
                <a
                    href="https://playvalorant.com/pt-br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    SITE OFICIAL
                </a>
            </div>
            <div className={styles.infos}>
                <img
                    className={styles.logo_riot}
                    src={process.env.PUBLIC_URL+"/images/riot-games-logo.png"}
                    alt="Logo da Riot Games"></img>
                <img
                    className={styles.logo_val}
                    src={process.env.PUBLIC_URL+"/images/val-logo.png"}
                    alt="Logo do Valorant"></img>
                <p>© 2023 Riot Games, Inc. Riot Games, VALORANT e qualquer logotipo associado são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</p>
            </div>
        </footer>
    );
}