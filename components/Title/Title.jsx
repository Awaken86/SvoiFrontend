import style from './Title.module.css';

const Title = () => {
    return (
        <div>
            <div className={style.backGround}>
                <div className={style.title}>
                    <h1>Единственный крафтовый бар в городе</h1>
                    <span className={style.backGroundDescription}>От начинающих любителей крафтового пива до взыскательных экспертов - каждый в нашем баре найдет что-то свое. Даже если вам не нравится вкус традиционного пенного напитка, наши бармены помогут подобрать именно тот сорт, что придется вам по вкусу.
                        Более ста сортов бутылочного и двадцать разливного крафта и сидра - выбор поистине огромный. Благодаря регулярной ротации сортов ассортимент постоянно меняется- чтобы соответствовать сезону и желанию многих постоянно пробовать что-то новое.
                    </span>
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <div className={style.imgContainer}>
                    <img src="./Comitems/3com.jpg"></img>
                </div>
                <div className={style.description}>
                    <h1>Лучший бар для вашего вечера!</h1>
                    <span>Бар "СВОИ" - это место, где виртуозно готовят бургеры и стейки, любят шумные вечеринки с танцами и радуют отличными коктейлями по самым демократичным ценам!</span>
                    <span>Выгодные акции бара действуют каждый день</span>
                    <span>Каждую пятницу и субботу танцпол подогревают диджеи, а Stand Up и Квизы проводятся по средам и четвергам.</span>
                </div>
            </div>
            <div className={style.blackLine}></div>
            <div className={style.eventsContainer}>
                <h1>Мероприятия</h1>
                <div className={style.eventsImgContainer}>
                    <img src="./Comitems/2ZONJ123PRJyF4.jpg"></img>
                    <img src="./Comitems/kuaev1qGs48.jpg"></img>
                    <img src="./Comitems/Bzqbnb3T4.jpg"></img>
                </div>
            </div>
        </div>
    )
}
export default Title;