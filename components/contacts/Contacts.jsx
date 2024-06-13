import { Map, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import style from './Contacts.module.css';
const Contacts = () => {
    return (
        <div className={style.container}>
            <div className={style.contactsList}>
                <span className={style.title}>КОНТАКТЫ</span>
                <span className={style.title}>Московская область, г. Дмитров, ул. Профессиональная 6с1</span>
                <span className={style.title}>+7 (926) 222-33-14</span>
                <span className={style.title}>Мы открыты:</span>
                <span className={style.greyText}>Понедельник 13:00 – 00:00</span>
                <span className={style.greyText}>Вторник 13:00 – 00:00</span>
                <span className={style.greyText}>Среда 13:00 – 00:00</span>
                <span className={style.greyText}>Четверг 13:00 – 00:00</span>
                <span className={style.greyText}>Пятница 13:00 – 02:00</span>
                <span className={style.greyText}>Суббота 13:00 – 02:00</span>
                <span className={style.greyText}>Воскресенье 14:00 – 00:00</span>
            </div>
            <YMaps>
                <div>
                    <Map width={630} height={380} defaultState={{ center: [56.348050, 37.519958], zoom: 17 }} />
                </div>
            </YMaps>
        </div>

    )
}
export default Contacts