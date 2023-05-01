import styles from "./Damage.module.css";

export default function Damage({ rangeStartMeters, rangeEndMeters, headDamage, bodyDamage, legDamage }){
    const manequim = process.env.PUBLIC_URL+"/images/manequim2.png"

    return(
        <div>
            <p className={styles.distance}>{rangeStartMeters + " - " + rangeEndMeters + " M"}</p>
            <div className={styles.manequim}>
                <img src={manequim} alt="Manequim de Dano"/>
                <div>
                    <p className={styles.cabeca}>{headDamage}</p>
                    <p className={styles.corpo}>{bodyDamage}</p>
                    <p className={styles.perna}>{legDamage}</p>
                </div>
            </div>
        </div>
    );
}