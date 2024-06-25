import styles from "@/Components/PurchaseSection/index.module.scss"

export const PurchaseSection = () => {
    return <div className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                A Price To Suit Everyone
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </div>
            <div className={styles.price}>
                $40
            </div>
            <div className={styles.priceText}>
                UI Design Kit
            </div>
            <div className={styles.buttonText}>
                See, One price. Simple.
            </div>
            <button className={styles.button}>Purchase Now</button>
        </div>
    </div>
}