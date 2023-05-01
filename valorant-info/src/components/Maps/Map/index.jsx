import styles from "./Map.module.css";

export default function Map({ displayName, displayIcon, splash, coordinates }){
    const callouts = process.env.PUBLIC_URL+`/images/callouts/${displayName}.png`;
    
    return(
        <div
            className={styles.background}
            style={{
                backgroundImage: `url(${splash})`
            }}
        >
            <div className={styles.mapa}>
                <h3 className={styles.nome}>{displayName}</h3>
                <h4 className={styles.coord}>{coordinates}</h4>
                {
                    (displayName === "The Range") ?
                        ("") :
                        (<img
                            src={callouts}
                            alt={displayName}
                            style={{
                                backgroundImage: `url(${displayIcon})`
                            }}
                        />)
                }
            </div>
        </div>
    );
}