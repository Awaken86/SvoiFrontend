import style from './Footer.module.css';
const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.Logos}>
                <a href="https://vk.com/svoidmitrov?from=search">
                    <img width={100} src="../Comitems/vk_black_logo_icon_147058.png"></img>
                </a>
                <a href="https://t.me/bar_svoi_dmitrov">
                    <img width={80} src="../Comitems/1384031.png"></img>
                </a>
            </div>
            <div className={style.GorizontalLine}></div>
            <div className={style.Text}>Забронируйте столик удобным для Вас способом</div>
        </div>
    )
}
export default Footer