import Ability from "components/Ability";
import styles from "./AgentFull.module.css";

export default function AgentFull({ fullPortraitV2, displayName, description, role, abilities, background, backgroundGradientColors }){
    const cor1 = '#' + backgroundGradientColors[0];
    const cor2 = '#' + backgroundGradientColors[1];
    const cor3 = '#' + backgroundGradientColors[2];
    const cor4 = '#' + backgroundGradientColors[3];
    
    return(
        <div className={styles.agente}>
            <div
                className={styles.background}
                style={{background: `linear-gradient(${cor1}, ${cor2}, ${cor3}, ${cor4})`}}
            >
                <img
                    className={styles.portrait}
                    src={fullPortraitV2}
                    alt={displayName}
                    style={{ 
                        backgroundImage: `url('${background}')`
                    }}    
                />
            </div>
            <div className={styles.informacao}>
                <h3>{displayName}</h3>
                <p>{description}</p>
                <p><strong>Função:</strong> {role.displayName}</p>
            </div>
            <div className={styles.habilidades}>
                {abilities.map((ability) => {
                    return <Ability {...ability} key={ability.slot}/>
                })}
            </div>
        </div>
    );
}