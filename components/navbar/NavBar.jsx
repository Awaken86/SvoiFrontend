import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <div className={style.container}>
            <Link className={style.link} to="/"><span>О НАС</span></Link>
            <Link className={style.link} to="/menu"><span>МЕНЮ</span></Link>
            <Link to="/" className={style.linkedImg}>
                <img src="../Comitems/iconSvoi.webp"></img>
            </Link>
            <Link className={style.link} to="/events"><span>ЭВЕНТЫ</span></Link>
            <Link className={style.link} to="/contacts"><span>КОНТАКТЫ</span></Link>
        </div>
    )
}
export default Navbar;