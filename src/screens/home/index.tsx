import "./style.css";
import {
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoWide from "../../assets/imgs/logoWide.png";
import logoModel from "../../assets/imgs/logoModel.png";
import logoprefeitura from "../../assets/imgs/logoPrefeitura.png";

export function Home() {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div className="logo relative left-4">
            <img src={logoWide} alt="lem urbanismo" />
          </div>

          <Link to="../Login" style={{ textDecoration: "none" }}>
            <div id="login" className="left-10">
              <div className="bg-white p-2 rounded-full">
                <FaUser size={25} color="3a28a" />
              </div>
              <span className="text-2xl">Login</span>
            </div>
          </Link>
        </nav> 
      </header>
 
      <main>  
        <div className="conteudo relative right-12 space-x-0">
          <section className="paragrafo">
            <h1>
              URBANISMO <br />  
            </h1> 
            <div className="linha"></div>
            <p>
              Sistema de Planejamento, Orçamento e Gestão tem a finalidade de
              virtualizar todo o processo e etapas de elaboração de processos de
              Alvará de Construção, Regularização, Acréscimo de Área,
              Desmembramento, Remembramento e Redimensionamento
            </p>
          </section>
          <section className="modelo_png ">
            <div className="bloco">
              <div className="circulo"> 
                <img src={logoModel} alt="mulher modelo" />
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="prefeitura">
            <img src={logoprefeitura} alt="logo prefeitura" />
            <div className="conteudo-prefeitura">
              <p>
                Prefeitura Municipal de Luís Eduardo Magalhães <br />
                CEP: 47.850-000 - Luís Eduardo Magalhães - Bahia <br />
                Telefone: 77 3628-9000
              </p>
              <div className="quadrado"></div>
            </div>
          </div>
        </section>
      </main>

      <footer id="rodape">
        <div>
          <p>
            © {new Date().getFullYear()} Pablo Silva todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
