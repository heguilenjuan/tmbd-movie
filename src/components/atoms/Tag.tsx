"use client"
import React from 'react'
import styles from './tag.module.css'  

interface TagProps {
  text: string;  
  type?: "primary" | "secondary" | "danger" | "success";  
  className?: string;  
  style?: React.CSSProperties;  
  onClick?: () => void;  
  href?: string;  
}

const Tag = ({ text, type = "primary", className, style, onClick, href }: TagProps) => {
  // Estilos condicionales basados en el tipo
  const tagClass = `${styles.tag} ${styles[type]} ${className || ''}`;

  // Si el `href` está presente, usaremos un <a>, si no, un <button> o <span> para mayor flexibilidad
  if (href) {
    return (
      <a href={href} className={tagClass} style={style} onClick={onClick}>
        {text}
      </a>
    );
  }

  return (
    <span className={tagClass} style={style} onClick={onClick}>
      {text}
    </span>
  );
}

export default Tag;
