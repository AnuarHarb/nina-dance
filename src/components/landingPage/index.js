import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LandingStyles } from './styles';
import DefaultLayout from '../layout';
import Workshops from '../workshops';
import CreationCard from '../creations/creationCard';

import champeta from '../../assets/img/clases/champeta.png';
import personalizada from '../../assets/img/clases/personalizada.png';
import activate from '../../assets/img/clases/activate.png';


const Landing = (props) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LandingStyles>
      <header className="cover-background">
        <DefaultLayout>
          <section className="cover-container">
            <h1 className="cover-title">Nina Dance</h1>
          </section>
        </DefaultLayout>
      </header>
      <DefaultLayout>
        <section className="about">
          <h2 className="subtitle">Biografía</h2>
          <p className="text">Bailarina interprete-creador de danza contemporánea egresada de la Universidad del Atlántico con el título de Profesional en Danza.</p> <p className="text">Inició su formación a la edad de los 8 años en la ciudad de Barranquilla en los géneros de Danzas Populares en el Ballet Urbano Carlos Franco, a la edad de 16 años inicia estudios en la Escuela de Danzas Folclóricas Palma Africana, dirigida por la folclorista Carmen Meléndez con quienes participó durante 4 años consecutivos (2011-2015) en festivales y encuentros nacionales e internacionales, en el año 2016 ingresa a la Escuela de Danzas del Medio Oriente Shamsia BellyDance, haciendo parte a su vez del nivel profesional de la misma “Tropa de Horus” con quienes participa en festivales e intercambios a nivel nacional e internacional. </p>
          <p className="text">Desde 2014 hasta 2019 estudió Danza Profesional en la Universidad del Atlántico donde profundizó sus estudios en Danza Contemporánea. Durante su paso por la universidad hizo parte del Ensamble de Danza Contemporánea, y ha representado al programa y la universidad en eventos locales y nacionales como el Festival Universitario de Danza Contemporánea (2015). </p>
          <p className="text">Ha participado como interprete en obras como Negra “Anger” presentada en la ciudad de Barranquilla junto a la Compañía del Cuerpo de Indias dirigida por el Maestro Álvaro Restrepo; junto a la Maestra Olga Barrios en las obras: Arrastre Azul (2014), Genoveva (2017), A Flor de Pelo y Cabaret Carnaval (2018). Ha sido ganadora de becas de circulación y formación en danza a nivel local y nacional. (2018-2019)</p>
        </section>
      </DefaultLayout>

      <Workshops preview/>

      <section>
        <DefaultLayout>
          <section className="videos-container">
            <h2 className="subtitle">Creaciones</h2>
            <CreationCard
              videoId="57X0s1gu8vE"
              title="Des-Tiempo"
              description="Tenía miedo de mirarte a los ojos y encontrar una respuesta dolorosa. Me atreví y cuando vi tu alma, supe que ahí estaba, que mis miedos me habían estado engañando, en tu mirada estaba la verdad! Sentí alegría, pena y dolor por ti al mismo tiempo, alegría de ver la rosa, dolor de verla encadenada, pena de verte ahí sin poder hacer nada. Lamenté profundamente el Des-Tiempo. El tiempo hablará, liberará a la rosa, la dejará mutar, crecer, hacer magia en tu corazón y entonces seremos un tiempo nuestro entre todos mis tiempos y los tuyos."
              music="Ne me quitte pas - Jacques Brel"
              edition="Yanina Bermejo"
              año="2020"
            />
            <CreationCard
              videoId="EXFkzDxnZI0"
              title="Diario de un espacio vacío"
              description="Porque aunque ahora no veas el final, cada paso que das te acerca un poquito más. Cada día es un nuevo intento.Has que las cosas sucedan, que cada día valga la pena, que cada sudor, cada llanto, cada alegría lo valga por ese único y mágico día tan esperado... Llegará, confía, ten seguridad, llegará!"
              music="Tomorrow is my turn - Nina Simone"
              edition="Yanina Bermejo"
              año="2020"
            />
            <div className="link-container">
              <Link className="ver-mas" to="/creaciones">Ver más</Link>
            </div>
          </section>
        </DefaultLayout>
      </section>
      <section className="clases-background">
        <DefaultLayout>
          <section className="clases-container">
            <h2 className="subtitle">Clases</h2>
            <section className="clases-grid">
              <article className="clases-card">
                <img src={champeta} alt="clases de champeta"/>
              </article>
              <article className="clases-card">
                <img src={personalizada} alt="clases personalizadas"/>
              </article>
              <article className="clases-card">
                <img src={activate} alt="clases personalizadas"/>
              </article>
            </section>
          </section>
        </DefaultLayout>
      </section>
    </LandingStyles>
  )
}

export default Landing
