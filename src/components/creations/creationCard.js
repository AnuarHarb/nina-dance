import React from 'react';
import YouTube from 'react-youtube';
import { CreationCardStyles } from './styles';

const CreationCard = (props) => {
 const {
   videoId,
   title,
   description,
   music,
   edition,
   año,
   awards,
   smallSize
 } = props;

 const bigWidth = window.innerWidth < 450 ? 270 : 640;
 const bigHeight = window.innerWidth < 450 ? 195 : 390;
 const smallWidth = window.innerWidth < 450 ? 270 : 400;
 const smallHeight = window.innerWidth < 450 ? 195 : 250;

 const opts = {
   width: !smallSize ? bigWidth : smallWidth,
   height: !smallSize ? bigHeight : smallHeight,
   playerVars: {
     color: 'white',
     modestbranding: 1,
     showinfo: 0,
   },
 }

 return (
   <CreationCardStyles>
     <YouTube
       className="video-player"
       videoId={videoId}
       opts={opts} />
     <h3 className="video-title">{title}</h3>
     <p className="video-description">{description}</p>
     {music ? <p className="video-data"><span>Música: </span>{music}</p> : null}
     {edition?<p className="video-data"><span>Edición: </span>{edition}</p>:null}
     {awards?<p className="video-data"><span>Premios: </span>{awards}</p>:null}
     <p className="video-data"><span>Año: </span> {año}</p>
   </CreationCardStyles>
 );
}

export default CreationCard;
