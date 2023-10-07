import styles from './index.module.sass'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles['wrapper__title']}>Ecommerce</h1>
    </div>
  )
}
