import styles from "@/Components/Header/index.module.scss"
import { Logo } from "@/Components/Logo"

export const Header = () => {
    return <header className={styles.header}>
        <ul className={styles.nav}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <Logo />

        <button className={styles.button}>Buy now</button>
    </header>
}