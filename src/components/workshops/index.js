import React, {useEffect} from 'react';
import YouTube from 'react-youtube';
import { Link, useLocation, useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import DefaultLayout from '../layout';
import { WorkshopsStyles } from './styles';

const Workshops = (props) => {
  const {
    preview
  } = props;

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    ReactGA.pageview(history.location.pathname);
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const bigWidth = window.innerWidth < 450 ? 270 : 640;
  const bigHeight = window.innerWidth < 450 ? 195 : 390;

  const opts = {
    width: bigWidth,
    height: bigHeight,
    playerVars: {
      color: 'white',
      modestbranding: 1,
      showinfo: 0,
    },
  }

  const inscriptionTrack = () => {
    console.log('yey');
    ReactGA.event({
      category: 'Workshop',
      action: 'Inscripción',
      label: 'Conocer, explorar y crear'
    });
  }

 return (
   <WorkshopsStyles>
     <section className="clases-background">
       <DefaultLayout>
        <section className="clases-container">
          <h2 className={preview ? "subtitle" : "title subtitle"}>Taller de Danza Contemporanea</h2>
          <h2 className="subtitle">Conocer, explorar y crear</h2>
          <p className="subtitle">Nivel inicial</p>
          <YouTube
            className="video-player"
            videoId="doqvhgj3sSI"
            opts={opts} />
          <p className="subtitle">15 de junio - 6 de julio 2020</p>
          <br/>
          <p className="text bold">En este curso podrás:</p>
          <ul className="bullet-list">
            <li className="text">Conocer sobre la historia y los origenes de la Danza Contemporanea.</li>
            <li className="text">Aprender los principios básicos de la Danza Contemporanea.</li>
            <li className="text">Fortalecer y enriquecer tu lenguaje corporal.</li>
            <li className="text">Explorar tu capacidad creativa.</li>
            <li className="text">Participar en la creación de una creación colectiva y a distancia.</li>
          </ul>
          {preview ?
            <div className="link-container">
              <Link className="cta-button" to="/bailando-con-nina">Más información</Link>
            </div>
          : null}
        </section>
      </DefaultLayout>
    </section>

    {!preview ?
      <>
        <section>
          <DefaultLayout>
            <section className="clases-container">
              <h2 className="subtitle">Contenido</h2>
              <p className="text bold">Componente teórico:</p>
              <ul className="bullet-list">
                <li className="text">Historia de la Danza Contemporáne (Antecedentes).</li>
                <li className="text">Técnicas.</li>
              </ul>
              <p className="text bold">Componente Práctico:</p>
              <ul className="bullet-list">
                <li className="text">Principios básicos de la Danza Contemporánea.</li>
                <li className="text">Cualidades del Movimiento.</li>
                <li className="text">El espacio.</li>
              </ul>
              <p className="text bold">Componente Creativo:</p>
              <ul className="bullet-list">
                <li className="text">Puntos de partida para la creación.</li>
                <li className="text">Improvisación.</li>
              </ul>
            </section>
          </DefaultLayout>
        </section>

        <section className="clases-background">
          <DefaultLayout>
            <section className="clases-container">
              <h2 className="subtitle">Requisitos</h2>
              <ul className="bullet-list">
                <li className="text">Mayor de 15 años.</li>
                <li className="text">Experiencia y/o formación en el trabajo corporal.</li>
              </ul>
            </section>
          </DefaultLayout>
        </section>

        <section>
          <DefaultLayout>
            <section className="clases-container inscripcion">
              <h2 className="subtitle">Inscríbete</h2>
              <p className="text"><span className="text bold">Inicio:</span> 15 de junio 2020 - <span className="text bold">Fin:</span> 6 de julio de 2020</p>
              <p className="text"><span className="text bold">Duración:</span> 3 semanas - 20 horas.</p>
              <br/>
              <p className="text"><span className="text bold">Lunes, Miércoles y Viernes</span></p>
              <div className="horarios">
                <article>
                  <p className="text"><span className="text bold">Por la mañana</span></p>
                  <p className="text">9:30 am a 11:30 am</p>
                  <div className="link-container">
                    <a
                      className="cta-button dark"
                      onClick={inscriptionTrack}
                      href="https://forms.gle/xPAkLYbi8uRKJGqBA">
                      Inscribirme
                    </a>
                  </div>
                </article>
                <article>
                  <p className="text"><span className="text bold">Por la tarde</span></p>
                  <p className="text">2 pm a 4 pm</p>
                  <div className="link-container">
                    <a
                      className="cta-button dark"
                      onClick={inscriptionTrack}
                      href="https://forms.gle/xPAkLYbi8uRKJGqBA">
                      Inscribirme
                    </a>
                  </div>
                </article>
              </div>
              <p className="text">Metodología: Virtual por Zoom.</p>
            </section>
          </DefaultLayout>
        </section>
      </>
    :
    null }
   </WorkshopsStyles>
 );
}

export default Workshops;
