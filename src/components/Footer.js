import React from 'react';

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer>&copy;{year} - <a rel="noopener noreferrer" target="_blank" href="https://github.com/Jonur">Jonur</a></footer>
  );

};

export default Footer;