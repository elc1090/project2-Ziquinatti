import styles from './Agent.module.css';

export default function Agent({ uuid, displayName, displayIconSmall, selectAgent }){



	return(
		<div 
			className={styles.agente}
			onClick={() => {
				window.location.href="#agentes";
                selectAgent({ id:uuid })
            }}>
			<div className={styles.destaque}></div>
			<img src={displayIconSmall} alt={displayName} />
		</div>
	);

}