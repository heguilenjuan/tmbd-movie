'use client'

import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [videoKey, setVideoKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_TOKEN_TMDB;
        if (!token) {
          console.error("❌ No se encontró la API Key en las variables de entorno.");
          return;
        }

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/500/videos?language=en-US', options);
        if (!response.ok) {
          throw new Error(`❌ Error en la API: ${response.status}`);
        }

        const data = await response.json();
        console.log("📺 Data recibida:", data);

        if (!data.results || data.results.length === 0) {
          throw new Error("⚠️ No se encontraron videos para esta película.");
        }

        console.table(data.results); // 👀 Muestra los videos disponibles en formato tabla

        // Buscar el primer tráiler disponible
        const trailer = data.results.find(
          (video: { type: string; site: string }) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailer) {
          console.log("✅ Tráiler encontrado:", trailer.key);
          setVideoKey(trailer.key);
        } else {
          console.warn("⚠️ No se encontró un tráiler, probando con otro tipo de video...");
          // Si no hay tráiler, intentamos con otro tipo de video
          const fallbackVideo = data.results.find(
            (video: { site: string }) => video.site === "YouTube"
          );
          if (fallbackVideo) {
            console.log("✅ Video alternativo encontrado:", fallbackVideo.key);
            setVideoKey(fallbackVideo.key);
          } else {
            throw new Error("❌ No se encontró ningún video válido.");
          }
        }

      } catch (error) {
        console.error("❌ Error obteniendo el tráiler:", error);
      }
    };

    fetchTrailer();
  }, []);

  return (
    <div className={styles.heroBox}>
      {videoKey ? (
        <iframe
          className={styles.heroVideo}
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&loop=1&controls=0&start=10`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <p className={''}>No se pudo cargar el tráiler.</p>
      )}
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}></div>
    </div>
  );
}

export default Hero;
