
import s from './Header.module.css';
import '../../dropper.css';

const Header = (props) => {
  return (
    <div className="App">
    <header>
        <nav className={s.navigation}>
            <ul>
                <li>
                    {/* <a><img src="../img/burger-menu-svgrepo-com.svg" alt="#" width="30px" height="30px"></a> */}
                </li>
                <li>
                    <a href="#">
                        <h2>NOGAEV</h2>
                    </a>
                </li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Номера</a></li>
                <li><a href="#">Спецпредложения</a></li>
                <li><a href="#">Как добраться</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header;
