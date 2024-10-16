"use client";

import { useState } from 'react';

const ImageGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    { 
      id: 1, 
      src: '/Imagenes_vector/1vec.png', 
      associatedSrc: '/Imagenes/1.jpg', 
      text: 'Bleach: Thousand-Year Blood War', 
      hoverText: (
        <>
          <p><strong>Género:</strong> Animación</p>
          <p><strong>Valoración:</strong> 9.5</p>
          <p><strong>Tipología:</strong> Serie</p>
          <p><strong>La vi:</strong> NO</p>
        </>
      )
    },
    { 
      id: 2, 
      src: '/Imagenes_vector/2vec.png', 
      associatedSrc: '/Imagenes/2.jpg', 
      text: 'Breaking Bad', 
      hoverText: (
        <>
          <p><strong>Género:</strong> Crimen</p>
          <p><strong>Valoración:</strong> 9.5</p>
          <p><strong>Tipología:</strong> Serie</p>
          <p><strong>La vi:</strong> SÍ</p>
        </>
      )
    },
    { 
      id: 3, 
      src: '/Imagenes_vector/3vec.png', 
      associatedSrc: '/Imagenes/3.jpg', 
      text: 'Avatar: The Last Airbender', 
      hoverText: (
        <>
          <p><strong>Género:</strong> Animación</p>
          <p><strong>Valoración:</strong> 9.3</p>
          <p><strong>Tipología:</strong> Serie</p>
          <p><strong>La vi:</strong> SÍ</p>
        </>
      )
    },
    { 
      id: 4, 
      src: '/Imagenes_vector/4vec.png', 
      associatedSrc: '/Imagenes/4.jpg', 
      text: 'The Wire', 
      hoverText: (
        <>
          <p><strong>Género:</strong> Crimen</p>
          <p><strong>Valoración:</strong> 9.3</p>
          <p><strong>Tipología:</strong> Serie</p>
          <p><strong>La vi:</strong> NO</p>
        </>
      )
    },
    
    { 
      id: 5, 
      src: '/Imagenes_vector/5vec.png', 
      associatedSrc: '/Imagenes/5.jpg', 
      text: 'The Godfather', 
      hoverText: (
        <>
          <p><strong>Género:</strong> Crimen</p>
          <p><strong>Valoración:</strong> 9.2</p>
          <p><strong>Tipología:</strong> Película</p>
          <p><strong>La vi:</strong> SÍ</p>
        </>
      )
    },
  
    { 
      id: 6, 
      src: '/Imagenes_vector/6vec.png', 
      associatedSrc: '/Imagenes/6.jpg', 
      text: 'The Sopranos', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Crimen</p>
      <p><strong>Valoración:</strong> 9.2</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 7, 
      src: '/Imagenes_vector/7vec.png', 
      associatedSrc: '/Imagenes/7.jpg', 
      text: 'Game of Thrones', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Aventura</p>
      <p><strong>Valoración:</strong> 9.2</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 8, 
      src: '/Imagenes_vector/8vec.png', 
      associatedSrc: '/Imagenes/8.jpg', 
      text: '1899', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Drama</p>
      <p><strong>Valoración:</strong> 9.2</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 9, 
      src: '/Imagenes_vector/9vec.png', 
      associatedSrc: '/Imagenes/9.jpg', 
      text: 'Rick and Morty', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 9.2</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 10, 
      src: '/Imagenes_vector/10vec.png', 
      associatedSrc: '/Imagenes/10.jpg', 
      text: 'Kantara', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Acción</p>
      <p><strong>Valoración:</strong> 9.2</p>
      <p><strong>Tipología:</strong> Película</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 11, 
      src: '/Imagenes_vector/11vec.png', 
      associatedSrc: '/Imagenes/11.jpg', 
      text: 'The Dark Knight', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Acción</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Película</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 12, 
      src: '/Imagenes_vector/12vec.png', 
      associatedSrc: '/Imagenes/12.jpg', 
      text: 'Hunter x Hunter', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 13, 
      src: '/Imagenes_vector/13vec.png', 
      associatedSrc: '/Imagenes/13.jpg', 
      text: 'Arcane', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 14, 
      src: '/Imagenes_vector/14vec.png', 
      associatedSrc: '/Imagenes/14.jpg', 
      text: 'Attack on Titan', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 15, 
      src: '/Imagenes_vector/15vec.png', 
      associatedSrc: '/Imagenes/15.jpg', 
      text: 'The Office', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Comedia</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 16, 
      src: '/Imagenes_vector/16vec.png', 
      associatedSrc: '/Imagenes/16.jpg', 
      text: 'Flames', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Comedia</p>
      <p><strong>Valoración:</strong> 9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> Sí</p>
    </>
      )
    },
    { 
      id: 17, 
      src: '/Imagenes_vector/17vec.png', 
      associatedSrc: '/Imagenes/17.jpg', 
      text: 'One Piece', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 18, 
      src: '/Imagenes_vector/18vec.png', 
      associatedSrc: '/Imagenes/18.jpg', 
      text: 'Pulp Fiction', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Crimen</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Película</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 19, 
      src: '/Imagenes_vector/19vec.png', 
      associatedSrc: '/Imagenes/19.jpg', 
      text: 'True Detective', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Crimen</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 20, 
      src: '/Imagenes_vector/20vec.png', 
      associatedSrc: '/Imagenes/20.jpg', 
      text: 'Better Call Saul', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Crimen</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 21, 
      src: '/Imagenes_vector/21vec.png', 
      associatedSrc: '/Imagenes/21.jpg', 
      text: 'Friends', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Comedia</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id:22, 
      src: '/Imagenes_vector/22vec.png', 
      associatedSrc: '/Imagenes/22.jpg', 
      text: 'Chainsaw Man', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 8.9</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 23, 
      src: '/Imagenes_vector/23vec.png', 
      associatedSrc: '/Imagenes/23.jpg', 
      text: 'Stranger Things', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Drama</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 24, 
      src: '/Imagenes_vector/24vec.png', 
      associatedSrc: '/Imagenes/24.jpg', 
      text: 'The Lord of the Rings: The Fellowship of the Ring', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Acción</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Película</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 25, 
      src: '/Imagenes_vector/25vec.png', 
      associatedSrc: '/Imagenes/25.jpg', 
      text: 'Over the Garden Wall', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 26, 
      src: '/Imagenes_vector/26vec.png', 
      associatedSrc: '/Imagenes/26.jpg', 
      text: 'BoJack Horseman', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Animación</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 27, 
      src: '/Imagenes_vector/27vec.png', 
      associatedSrc: '/Imagenes/27.jpg', 
      text: 'Peaky Blinders', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Crimen</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 28, 
      src: '/Imagenes_vector/28vec.png', 
      associatedSrc: '/Imagenes/28.jpg', 
      text: 'Black Mirror', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Drama</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> SÍ</p>
    </>
      )
    },
    { 
      id: 29, 
      src: '/Imagenes_vector/29vec.png', 
      associatedSrc: '/Imagenes/29.jpg', 
      text: 'It´s Always Sunny in Philadelphia', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Comedia</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    },
    { 
      id: 30, 
      src: '/Imagenes_vector/30vec.png', 
      associatedSrc: '/Imagenes/30.jpg', 
      text: 'Ted Lasso', 
      hoverText: ( 
      <>
      <p><strong>Género:</strong> Comedia</p>
      <p><strong>Valoración:</strong> 8.8</p>
      <p><strong>Tipología:</strong> Serie</p>
      <p><strong>La vi:</strong> NO</p>
    </>
      )
    }
  
  ];

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-item"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Imagen principal */}
            <img src={image.src} alt={`Imagen ${image.id}`} className="main-image" />
            {/* Texto debajo de la imagen principal */}
            <p>{image.text}</p>

            {/* Imagen y texto asociados al hover */}
            {hoveredImage === image.id && (
              <div className="hover-info">
                <img src={image.associatedSrc} alt={`Imagen asociada ${image.id}`} className="hover-image" />
                <div>{image.hoverText}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
