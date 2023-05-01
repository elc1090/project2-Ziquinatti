import Agent from "components/Agent";
import styles from "./Agents.module.css";
// import file from "../../agents.json";
import { useEffect, useState } from "react";
import Title from "components/Title";
import AgentFull from "components/AgentFull";

export default function Agents() {
    const [agents, setAgents] = useState([]);
    const [agent, setAgent] = useState(0);

    const background_image = process.env.PUBLIC_URL+"/images/background-2.png";

    useEffect(() => {
        async function searchAgents() {
            const resposta = await fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
            const dados = await resposta.json();
            // const dados = file;
            return dados.data;
        }

        searchAgents()
            .then(agentes => setAgents(agentes));
    }, []);

    const chooseAgent = (id) => {
        let newId = id.id;
        agents.map((agente, index) => {
            if(agente.uuid === newId){
                setAgent(index);
                return true
            }
            return false
        })
    }

    return(
        <section
            id="agentes"
            className={styles.content}
            style={{ backgroundImage: `url('${background_image}')` }}
        >
            <Title>
                AGENTES
            </Title>

            {agents.map((agente, index) => {
                let ag;
                if(index === agent){
                    ag = <AgentFull {...agente} key={agente.uuid}/>
                }
                return ag;
            })}

            <div className={styles.agentes}>
                {agents.map((agente) => {
                    return <Agent {...agente} key={agente.uuid} selectAgent={chooseAgent}/>
                })}
            </div>
        </section>
    );
}