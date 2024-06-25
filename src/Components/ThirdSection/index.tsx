import { HappyNews } from "@/Components/SVG/HappyNews"
import { Mention } from "@/Components/SVG/Mention"
import { SocialInfluencer } from "@/Components/SVG/SocialInfluencer"
import styles from "@/Components/ThirdSection/index.module.scss"
import { FC, ReactNode } from "react"

export const ThirdSection = () => {
    return <div>
        <Item Icon={<HappyNews className={styles.happyNews} />}/>
        <Item Icon={<SocialInfluencer className={styles.happyNews} />}/>
        <Item Icon={<Mention className={styles.happyNews} />} button/>
    </div>
}

interface ItemProps {
    Icon: ReactNode
    button?: boolean
}

const Item: FC<ItemProps> = ({ Icon, button }) => {
    return <div className={styles.item}>
        <div className={styles.itemWrapper}>
            <div className={styles.itemTitle}>
                Light, Fast & Powerful
            </div>
            <div className={styles.itemText}>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                </span>
                <span>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </span>
            </div>
            {
                button && <button className={styles.itemButton}>Purchase Now</button>
            }
        </div>

        {Icon}
    </div>
}