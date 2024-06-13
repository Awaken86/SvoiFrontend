import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <div className={style.container}>
            <Link className={style.link} to="/SvoiFrontend"><span>О НАС</span></Link>
            <Link className={style.link} to="/SvoiFrontend/menu"><span>МЕНЮ</span></Link>
            <Link to="/SvoiFrontend" className={style.linkedImg}>
                <img src="/SvoiFrontend/Comitems/iconSvoi.webp"></img>
            </Link>
            <Link className={style.link} to="/SvoiFrontend/events"><span>ЭВЕНТЫ</span></Link>
            <Link className={style.link} to="/SvoiFrontend/contacts"><span>КОНТАКТЫ</span></Link>
        </div>
    )
}
export default Navbar;