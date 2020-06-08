import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../layout';
import CreationCard from './creationCard';
import { CreationsStyles } from './styles';

const Creations = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

 return (
  <CreationsStyles>
    <h2 className="subtitle">Creaciones</h2>
    <DefaultLayout>
      <section className="videos-container">
        <CreationCard
          smallSize
          videoId="57X0s1gu8vE"
          title="Des-Tiempo"
          description="Tenía miedo de mirarte a los ojos y encontrar una respuesta dolorosa. Me atreví y cuando vi tu alma, supe que ahí estaba, que mis miedos me habían estado engañando, en tu mirada estaba la verdad! Sentí alegría, pena y dolor por ti al mismo tiempo, alegría de ver la rosa, dolor de verla encadenada, pena de verte ahí sin poder hacer nada. Lamenté profundamente el Des-Tiempo. El tiempo hablará, liberará a la rosa, la dejará mutar, crecer, hacer magia en tu corazón y entonces seremos un tiempo nuestro entre todos mis tiempos y los tuyos."
          music="Ne me quitte pas - Jacques Brel"
          edition="Yanina Bermejo"
          año="2020"
        />
        <CreationCard
          smallSize
          videoId="EXFkzDxnZI0"
          title="Diario de un espacio vacío"
          description="Porque aunque ahora no veas el final, cada paso que das te acerca un poquito más. Cada día es un nuevo intento.Has que las cosas sucedan, que cada día valga la pena, que cada sudor, cada llanto, cada alegría lo valga por ese único y mágico día tan esperado... Llegará, confía, ten seguridad, llegará!"
          music="Tomorrow is my turn - Nina Simone"
          edition="Yanina Bermejo"
          año="2020"
        />
        <CreationCard
          smallSize
          videoId="_0rxXZ8ADmE"
          title="CADAVER EXQUISITO en tiempos de Cuarentena"
          description="Agradecemos a los bailarines y maestros de diferentes ciudades que se unieron al colectivo Pataeganso para celebrar el día de la danza a través de este juego de cadáver exquisto."
          edition="Yanina Bermejo"
          año="2020"
        />
        <CreationCard
          smallSize
          videoId="ZaPaTn4w460"
          title="izRa - Solo de Danza Contemporanea"
          description='Reinterpretando la "champeta-africana" icono de la música popular del caribe Colombiano, izRa es una manifestación personal de toda esta cultura y la conexión intima que la interprete-creadora tiene con ella, desde todos los recuerdos de la infancia y el contexto sociocultural.'
          awards="Beca de Circulación en Danza del Portafolio de Estímulos del Distrito de Barranquilla"
          año="2017"
        />
      </section>
    </DefaultLayout>
 </CreationsStyles>
 );
}

export default Creations;
