import styles from "@/Components/UiKit/index.module.scss"

export const UIKit = () => {
    return <div className={styles.main}>
        <div className={styles.title}>
            Introduce Your Product Quickly & Effectively
        </div>

        <div className={styles.text}>
            <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus.
            </span>
            <span>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </span>
        </div>

        <div className={styles.buttons}>
            <button className={styles.buy}>Purchase UI Kit</button>
            <button className={styles.learn}>Learn More</button>
        </div>
    </div>
}