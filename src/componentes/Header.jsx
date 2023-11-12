import { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo_header from '../imagens/logo.ico';
import Menu_white from '../imagens/menu_white.svg';
import Close_white from '../imagens/close_white.svg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    toggleMobileMenu(); // Fecha o menu mobile após clicar em um link
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <a>
              <NavLink to="/">
                <img src={Logo_header} alt="TechForAll" />
              </NavLink>
            </a>
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('sobre')}>
                  Problema
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('solucao')}>
                  Solução
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('lista')}>
                  Lista
                </a>
              </li>
            </ul>
          </div>

          <div className="login">
            <ul>
              <li>
                <a>
                  <NavLink to="/Login">Login</NavLink>
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={toggleMobileMenu}>
              <img className="icon" src={isMobileMenuOpen ? Close_white : Menu_white} alt="Menu" />
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('sobre')}>
                Problema
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('solucao')}>
                Solução
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('lista')}>
                Lista
              </a>
            </li>
          </ul>

          <div className="login">
            <ul>
              <li>
                <a>
                  <NavLink to="/Login">Login</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
