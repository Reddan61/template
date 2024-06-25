import styles from "@/Components/Footer/index.module.scss"
import { Logo } from "@/Components/Logo"
import { FaceBook } from "@/Components/SVG/FaceBook"
import { Instagram } from "@/Components/SVG/Instagram"
import { LinkedIn } from "@/Components/SVG/LinkedIn"
import { Twitter } from "@/Components/SVG/Twitter"
import { YouTube } from "@/Components/SVG/YouTube"

export const Footer = () => {
    return <div className={styles.main}>
        <div className={styles.up}>
            <div className={styles.company}>
                ©2023 Yourcompany
            </div>
            <Logo />
            <button className={styles.button}>Purchase now</button>
        </div>
        <div className={styles.bottom}>
            <ul className={styles.nav}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className={styles.contacts}>
                <li>
                    <FaceBook />
                </li>
                <li>
                    <LinkedIn />
                </li>
                <li>
                    <Twitter />
                </li>
                <li>
                    <YouTube />
                </li>
                <li>
                    <Instagram />
                </li>
            </ul>
        </div>
    </div>
}