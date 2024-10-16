import ImageGallery from './ImageGallery';
import './globals.css'; // Asegúrate de importar tu CSS global

export default function Home() {
  return (
    <main>
      {/* Título principal */}
      <h1 className="centered-title">VISUALIZACIÓN PERSONAL DE LAS MEJORES 30 SERIES Y PELÍCULAS</h1>

      {/* Espacio entre el título y la imagen */}
      <div style={{ margin: '20px 0' }} />

      {/* Imagen centrada con texto al lado */}
      <div className="header-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="Rollodepelicula.png" alt="Descripción de la imagen" className="header-image" style={{ marginRight: '10px' }} />
        <p>Elemento principal: Rollo de pelicula.</p>
      </div>

      {/* Espacio entre la imagen y el siguiente título */}
      <div style={{ margin: '20px 0' }} />

      {/* Título de referencias */}
      <h2 className="centered-title-2">Referencias de la lectura</h2>

      {/* Espacio entre el título y la siguiente imagen */}
      <div style={{ margin: '20px 0' }} />

      {/* Segunda imagen centrada */}
      <div className="image-referencia" style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="Explicacion_1.png" alt="Descripción de la imagen" className="header-image-refe" />
      </div>

      {/* Espacio entre la imagen y la galería */}
      <div style={{ margin: '50px 0' }} />

      {/* Título de referencias */}
       <h2 className="centered-title-2">Visualización</h2>

      {/* Espacio entre la imagen y la galería */}
      <div style={{ margin: '100px 0' }} />
      {
      /* Galería de imágenes */}
      <ImageGallery />

       {/* Espacio entre la imagen y el siguiente título */}
      <div style={{ margin: '20px 0' }} />

      {/* Título de referencias */}
      <h2 className="centered-title-2">Aplicación</h2>

      {/* Espacio entre el título y la siguiente imagen */}
      <div style={{ margin: '20px 0' }} />

      {/* Segunda imagen centrada */}
      <div className="image-referencia" style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="Ejemplo.png" alt="Descripción de la imagen" className="header-image-refe" />
      </div>
    </main>
  );
}