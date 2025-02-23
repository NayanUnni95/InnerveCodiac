import styles from './CardRevel.module.css';
import './card.css';
import img from './grooveGala.jpg';

function CardRevel() {
  return (
    <>
      <div className="container-b-wrapper" id="containerBWrapper">
        <div className="container-b" id="containerB">
          <div className="gallery" id="gallery"></div>
          <img
            className="final-image"
            id="finalImage"
            src={img}
            alt=""
            style={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
          />
          <div
            className="text-container"
            id="finalText"
            style={{ opacity: 0, transform: 'translate(-50%, 31.2895vh)' }}
          ></div>
        </div>
      </div>
      <div className="container-c-placeholder"></div>
      <div
        className="container-c"
        id="containerC"
        style={{ transform: 'translateY(100%)' }}
      ></div>
    </>
  );
}

export default CardRevel;
