import React from "react";

export const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Ilja Frolov ${year}`}</footer>;
  };
  
  