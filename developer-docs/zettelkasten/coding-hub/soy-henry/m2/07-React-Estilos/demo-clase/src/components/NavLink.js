import styles from './NavLink.module.css';

function NavLink({to, text}) {
  return (

    <a className={styles.navLink} href={to}>{text}</a>
    
  )
}

export default NavLink;