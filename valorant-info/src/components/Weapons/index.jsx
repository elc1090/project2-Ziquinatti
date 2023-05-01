import Title from "components/Title";
import styles from "./Weapons.module.css";
// import file from "../../weapons.json";
import { useEffect, useState } from "react";
import Weapon from "./Weapon";
import WeaponFull from "./WeaponFull";

export default function Weapons(){
    const [weapons, setWeapons] = useState([]);
    const [weapon, setWeapon] = useState(0);

    useEffect(() => {
        async function searchWeapons() {
            const resposta = await fetch('https://valorant-api.com/v1/weapons?language=pt-BR');
            const dados = await resposta.json();
            // const dados = file;
            return dados.data;
        }

        searchWeapons()
            .then(armas => setWeapons(armas));
    }, []);

    const chooseWeapon = (id) => {
        let newId = id.id;
        weapons.map((arma, index) => {
            if(arma.uuid === newId){
                setWeapon(index);
                return true
            }
            return false
        })
    }

    return(
        <section
            id="armas"
            className={styles.content}
        >
            <Title>
                ARMAS
            </Title>

            <div className={styles.display}>
                <div className={styles.armas}>
                    {weapons.map((arma) => {
                        return <Weapon {...arma} key={arma.uuid} selectWeapon={chooseWeapon}/>
                    })}
                </div>
                {weapons.map((arma, index) => {
                    let ag;
                    if(index === weapon){
                        ag = <WeaponFull {...arma} key={arma.uuid}/>
                    }
                    return ag;
                })}
            </div>
        </section>
    );
}