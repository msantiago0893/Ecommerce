import styles from './index.module.sass'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles['wrapper__text']}>Condiciones de uso</p>
      <p className={styles['wrapper__text']}>Aviso de privacidad</p>
      <p className={styles['wrapper__text']}>© 2021-2022, Ecommercer.com, Inc. o sus afiliados</p>
    </div>
  )
}
