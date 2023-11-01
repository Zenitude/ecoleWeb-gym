import { HomeContainer } from "./Home.style";
import Card from "../../components/Card/Card";
import Field from "../../components/Field/Field";
import { info1, info2, info3, equip1, equip2, equip3, equip4, equip5, equip6, equip7, equip8, equip9, check, cross } from "../../assets";
import { prices } from "../../utils/datas/price";

export default function Home() {
  const equipments = [equip1, equip2, equip3, equip4, equip5, equip6, equip7, equip8, equip9];
  
  return (
    <HomeContainer>

        <section>
          <h2>Se (re)prendre en main</h2>
          <div className="cards">
            <Card srcImg={info1} typeTitle={3} title={"Faire parti d'un groupe"} txt={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odit, adipisci officia dolore ad ex."}/>
            <Card srcImg={info2} typeTitle={3} title={"Atteindre ses objectifs"} txt={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odit, adipisci officia dolore ad ex."}/>
            <Card srcImg={info3} typeTitle={3} title={"Exploser ses limites"} txt={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odit, adipisci officia dolore ad ex."}/>
          </div>
        </section>

        <div id="section2">
          <Card typeTitle={2} title={"Salle de sport"} txt={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum corporis corrupti?"} link={"Voir les prix"} href={"#prices"} />
          <Card typeTitle={2} title={"Cross Fit"} txt={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum corporis corrupti?"} link={"Voir les prix"} href={"#prices"} />
        </div>

        <section id="equipment">
          <h2>Les équipements</h2>
          <div className="images">
            {
              equipments.map((equipment, index) => (
                <img key={index} src={equipment} alt={"equipment"} />
              ))
            }
          </div>
        </section>

        <section>
          <h2>Courage</h2>
        </section>

        <section id="prices">
          <h2>Tarifs</h2>
          <div className="cards">
            {
              prices.map((price, index) => (
                <Card 
                  key={`${index}-${price.title}`} 
                  typeTitle={3} 
                  title={price.title} 
                  price={price.value} 
                  check={check} 
                  uncheck={cross} 
                  items={price.items}/>
              ))
            }
          </div>
        </section>

        <section id="contact">
          <h2>Section Contact</h2>
          <form>
            <Field type="text" id="firstname" txt="Prenom" />
            <Field type="text" id="lastname" txt="Nom" />
            <Field type="area" id="message" txt="Message" />
            <button>Envoyer</button>
          </form>
        </section>

    </HomeContainer>
  )
}
