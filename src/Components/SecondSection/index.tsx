import { Icon2 } from "@/Components/SVG/Icon2"
import { Icon3 } from "@/Components/SVG/Icon3"

import styles from "@/Components/SecondSection/index.module.scss"

export const SecondSection = () => {
    return <div className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Light, Fast & Powerful
            </div>
            <div className={styles.text}>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                </span>
                <span>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </span>
            </div>
            <div className={styles.items}>
                <Item />
                <Item />
            </div>
        </div>
        <Icon3 className={styles.svg} />
    </div>
}

const Item = () => {
    return <div className={styles.item}>
        <div>
            <Icon2 />
        </div>
        <div className={styles.itemTitle}>
            Title Goes Here
        </div>
        <div className={styles.itemText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        </div>
    </div>
}