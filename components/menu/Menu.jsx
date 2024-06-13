import { Link } from 'react-router-dom';
import style from './Menu.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../../redux/counterSlice';
const Menu = (props) => {
    // eslint-disable-next-line react/prop-types
    const actualMenuItem = props.Itemtype
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.menu.menu)
    console.log(menu)
    useEffect(() => {
        dispatch(fetchMenu())
        console.log("useEffect")
    }, [dispatch])
    const filtredMenu = menu.filter(item => item.type === actualMenuItem)

    return (
        <>
            <div className={style.menuTitle}>Меню</div>
            {actualMenuItem ?
                <div className={style.container}>
                    <div className={style.menuBar}>
                        <Link to={'/menu/snacks'} className={style.menuItemLink}>Закуски</Link>
                        <Link to={'/menu/snackSets'} className={style.menuItemLink}>Сеты</Link>
                        <Link to={'/menu/burgers'} className={style.menuItemLink}>Бургеры</Link>
                        <Link to={'/menu/hotter'} className={style.menuItemLink}>Горячее</Link>
                        <Link to={'/menu/sideDishes'} className={style.menuItemLink}>Гарниры</Link>
                    </div>
                    <div className={style.listContainer}>
                        <div className={style.menuList}>
                            {filtredMenu.map((item) => (
                                <div key={item.id} className={style.mapBlock}>
                                    <img src={"http://localhost:1488/" + item.photo + ".jpg"} />
                                    <span className={style.grams}>{item.grams}г</span>
                                    <span className={style.title}>{item.title}</span>
                                    <span className={style.price}>{item.price}₽</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
                : <div className={style.listContainer}>
                    <div className={style.menuList}>
                        <Link to={'/menu/snacks'} className={style.Block}>
                            <img src='../Comitems/photo_2024-06-11_18-00-43.jpg' />
                            <span>Закуски</span>
                        </Link>
                        <Link to={'/menu/snackSets'} className={style.Block}>
                            <img src='../Comitems/photo_2024-06-11_18-00-50.jpg' />
                            <span>Сеты</span>
                        </Link>
                        <Link to={'/menu/burgers'} className={style.Block}>
                            <img src='../Comitems/photo_2024-06-11_18-00-48.jpg' />
                            <span>Бургеры</span>
                        </Link>
                        <Link to={'/menu/sandwiches'} className={style.Block}>
                            <img src='../Comitems/9ca46ad484b04dc484a753873b96f974-400x400.jpeg' />
                            <span>Сэндвичи</span>
                        </Link>
                        <Link to={'/menu/hotter'} className={style.Block}>
                            <img src='../Comitems/photo_2024-06-11_18-00-38.jpg' />
                            <span>Горячее</span>
                        </Link>
                        <Link to={'/menu/sideDishes'} className={style.Block}>
                            <img src='../Comitems/photo_2024-06-11_18-00-49.jpg' />
                            <span>Гарниры</span>
                        </Link>
                    </div>

                </div>

            }


        </>
    )
}
export default Menu