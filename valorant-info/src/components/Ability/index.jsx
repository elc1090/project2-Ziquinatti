import styles from "./Ability.module.css";

export default function Ability({ displayName, description, displayIcon }){
    const notFound = process.env.PUBLIC_URL+"/images/not-found.png";

    return(
        <div className={styles.slot}>
            {
                (displayIcon) ? <img src={displayIcon} alt={displayName}/> :
                <img src={notFound} alt="Imagem não disponível"/>
                
            }
            <div>
                <h4>{ displayName }</h4>
                <p>{ description }</p>
            </div>
        </div>
    );
}