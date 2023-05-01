import Damage from "./Damage";
import styles from "./WeaponFull.module.css";

export default function WeaponFull({ uuid, displayName, displayIcon, shopData, weaponStats }){

    const background = process.env.PUBLIC_URL+"/images/background-map2.jpg";
    const my_uuid = uuid + "-" + displayName;

    return(
        <div className={styles.infos}>
            <h3>{displayName}</h3>
            <div
                className={styles.imagem}
                style={{
                    backgroundImage: `url(${background})`
                }}
            >
                <img src={displayIcon} alt={displayName} />
            </div>
            <p><strong>Custo:</strong> {(shopData) ? shopData.cost : "0"}</p>
            <p><strong>Categoria:</strong> {
                (shopData) ? shopData.category + " / " + shopData.categoryText : "Corpo a corpo"
            }</p>
            {(weaponStats) ? 
                (<div className={styles.stats}>
                    <p>
                        Penetração de Parede: 
                        {weaponStats.wallPenetration.replace('EWallPenetrationDisplayType::', ' ')}
                    </p>
                    <p>Capacidade do Carregador: {weaponStats.magazineSize}</p>
                    <div className={styles.disparos}>
                        <div className={styles.disparo}>
                            <h4>Disparo Principal</h4>
                            <p>Taxa de disparo: {weaponStats.fireRate+" rounds/sec"}</p>
                            <p>Precisão do 1º Disparo: {weaponStats.firstBulletAccuracy}</p>
                        </div>
                        {(weaponStats.adsStats) ?
                            (<div className={styles.disparo}>
                                <h4>Disparo Alternativo</h4>
                                <p>Taxa de disparo: {weaponStats.adsStats.fireRate+" rounds/sec"}</p>
                                <p>Precisão do 1º Disparo: {weaponStats.adsStats.firstBulletAccuracy}</p>
                                <p>Zoom: {"x"+weaponStats.adsStats.zoomMultiplier}</p>
                            </div>) :
                            ("")
                        }
                    </div>
                    <div className={styles.danos}>
                        {weaponStats.damageRanges.map((dano) => {
                            return <Damage {...dano} key={my_uuid + dano.rangeStartMeters}/>
                        })}
                    </div>
                </div>) :
                ("")
            }
        </div>
    );
}