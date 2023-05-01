import styles from "./Weapon.module.css";

export default function Weapon({ uuid, displayName, displayIcon, selectWeapon }){

    return(
        <div 
            className={styles.arma}
            onClick={() => {
                selectWeapon({ id:uuid })
            }}
        >
            <img src={displayIcon} alt={displayName}/>
        </div>
    );
}