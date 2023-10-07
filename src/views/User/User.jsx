import { Header } from '../../components/Header/Header';
import styles from './User.module.sass';
import { Link } from 'react-router-dom';

import {
  Outlet
} from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';

export const User = () => {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.wrapper}>
        <nav className={styles.menu}>
          <Link className={styles['menu__item']} to="/">
            <p>Principal</p>
            <span className={styles['menu__border']} ></span>
          </Link>
          <Link className={styles['menu__item']} to="gallery">
          <p>Galería</p>
            <span className={styles['menu__border']} ></span>
          </Link>
          <Link className={styles['menu__item']} to="gallery">
          <p>Lo más vendido</p>
            <span className={styles['menu__border']} ></span>
          </Link>
          <Link className={styles['menu__item']} to="gallery">
          <p>Promociones</p>
            <span className={styles['menu__border']} ></span>
          </Link>
          <Link className={styles['menu__item']} to="gallery">
          <p>Últimos novedades</p>
            <span className={styles['menu__border']} ></span>
          </Link>
          <Link className={styles['menu__item']} to="gallery">
          <p>Servicio al cliente</p>
            <span className={styles['menu__border']} ></span>
          </Link>
        </nav>

        <h1>USER</h1>

        <Outlet/>
      </div>

      <Footer />
    </div>
  )
}
