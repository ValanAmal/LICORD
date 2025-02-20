import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>©2025 licord.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'rgb(0 0 0)',
    color: '#fff',
    textAlign: 'center',
    padding: '0px 0',
    position: 'absolute',
    left: '0%',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
