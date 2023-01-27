import "../Home/home.css";
import ButtonDefault from "../../components/Button";
import Title from "../../components/Title/index";
import { useNavigate, useLocation } from "react-router-dom";
import assets from "../../assets/tecnologia-lluni-2.svg";
import Img from "../../components/Img/index";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { listEmail } = location.state; //peguei a listaEmail dentro do location.state

  const clickAction = () => {
    return navigate("/");
  };

  return (
    <div className="App">
      <section className="section-home">
        <Img assets={assets} />
        <div className="div-collumn">
          <Title title="Home" styleTitle="style-title" />
          <ul>
            {listEmail.map((u) => (
              <li key={u.id} className="style-title">
                {u.email}
              </li>
            ))}
          </ul>
          <ButtonDefault
            redirection={clickAction}
            name="Voltar"
            divButton="button-home"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
