import { Header } from "@/Components/Header"
import { UIKit } from "@/Components/UiKit"
import { SecondSection } from "@/Components/SecondSection"
import { Designer1SVG } from "@/Components/SVG/Designer1"
import { ThirdSection } from "@/Components/ThirdSection"
import { PurchaseSection } from "@/Components/PurchaseSection"

import "@/reset.scss"
import styles from "@/App.module.scss"
import { Footer } from "@/Components/Footer"

export const App = () => {
    return <div className={styles.app}>
        <div className={styles.section}>
            <div className={styles.headerSection}>
                <Header />
                <UIKit />
            </div>
            <Designer1SVG className={styles.svg} />
        </div>
        <div className={styles.section}>
            <SecondSection />
        </div>
        <div className={styles.section}>
            <ThirdSection />
        </div>
        <div className={styles.purchaseSection}>
            <div className={styles.purchaseSectionIcon}></div>
            <div className={styles.section}>
                <PurchaseSection />
            </div>
        </div>
        <div className={styles.footerSection}>
            <div className={styles.section}>
                <Footer />
            </div>
        </div>
    </div>
}