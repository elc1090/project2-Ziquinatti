import styles from './Header.module.css';

export default function Header(props){
    return(
        <header className={styles.header}>
            <img
                src={process.env.PUBLIC_URL+"/images/valorant-logo-2.png"}
                alt="Logo do Valorant"></img>
            <h2>VALORANT: Infos</h2>
            <nav className={styles.nav_bar}>
                <a href={props.link1}>Agentes</a>
                <a href={props.link2}>Armas</a>
                <a href={props.link3}>Mapas</a>
            </nav>
        </header>
    )
}