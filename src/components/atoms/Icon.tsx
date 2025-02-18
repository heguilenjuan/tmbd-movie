"use client"
import React from 'react'

interface IconProps {
  type: "search" | "arrow" | "home" | "settings"; // Especificamos los tipos de icono que quieres manejar
  size?: string; // Tamaño del icono (opcional)
  color?: string; // Color del icono (opcional)
}

const Icon = ({ type, size = "24px", color = "black" }: IconProps) => {
  // Dependiendo del tipo de ícono, renderizamos uno diferente
  const renderIcon = () => {
    switch (type) {
      case "search":
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6M9.5 15A5.5 5.5 0 1 0 9.5 4a5.5 5.5 0 0 0 0 11z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
      case "arrow":
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12l-7 7-7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
      case "home":
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
      case "settings":
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M3 12h18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
      default:
        return null;
    }
  }

  return (
    <div>
      {renderIcon()}
    </div>
  );
}

export default Icon;
