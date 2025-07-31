import minhaImagem from '../../assets/solar.jpg';
import './SobreNos.css';
function SobreNos(){

    return(
        <div>
            <h2 id="sobre-nos">Sobre Nós</h2>
           
            <p>Somos a Energia Solar 365, referência em projetos sustentáveis.
                Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com alta eficiência e confiabilidade.</p>

                <img src={minhaImagem}  alt="energia solar" />
        </div>
    );
};

export default SobreNos;