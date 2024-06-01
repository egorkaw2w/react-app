// import logo from './logo.svg';
import './App.css';
// import m from './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div classNameName="AppWrapper">
      <Header />
      <main>

        <div classNameName="wrapper">
          
          <div className="rooms">
            <div className="container">
              <div className="rooms__content">
                <div className="rooms__title">
                  <h3>полулюкс 25м</h3>
                </div>
                <div className="rooms__subtitle">
                  Комфортабельный номер с двухспальной кроватью и просторной ванной комнатой
                </div>
              </div>
              <div className="rooms__show">
                <button>Показать</button>
              </div>
              <div className="rooms__preview">
                <img src="./img/room.jpg" width="100%" alt="#"/> 
              </div>
            </div>
          </div>
          <div className="specEvent">
            <div className="main__title">
              <h3>Спецпредложения</h3>
            </div>
            <div className="container">

              <div className="slider-contnents__specEvent">
                <a href="#">
                  <img src="../img/arrow.svg" alt="#" className="left"/>
                </a>
                <div className="slider-element__specEvent">
                  <div className="img__specEvent">
                    <img src="../img/defaultimg.jpg" width="206" height="230px" alt="#"/>
                  </div>
                  <div className="subTitle__specEvent">Примерное описание спецпредложения, ну и еще чуть чуть
                    текста для объема</div>
                </div>
                <div className="slider-element__specEvent">
                  <div className="img__specEvent">
                    <img src="../img/defaultimg.jpg" width="206" height="230px" alt="#"/>
                  </div>
                  <div className="subTitle__specEvent">Примерное описание спецпредложения, ну и еще чуть чуть
                    текста для объема</div>
                </div>
                <div className="slider-element__specEvent">
                  <div className="img__specEvent">
                    <img src="../img/defaultimg.jpg" width="206" height="230px" alt="#"/>
                  </div>
                  <div className="subTitle__specEvent">Примерное описание спецпредложения, ну и еще чуть чуть
                    текста для объема</div>
                </div>


                <a href="#">
                  <img src="../img/arrow.svg" alt="#" className="right"/>
                </a>
              </div>
            </div>
          </div>
          <div className="way">
            <div className="main__title">
              <h3>Как добраться</h3>
            </div>
            <div className="container">
              <div className="waypoint">
                <p>
                  Г.кисловодск, ул.Чкалова 74

                </p>                    </div>
              <div className="map">
              <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af9d5460666b2cf8b06904eb3842b9b366eed352598d717a92bb3b9ec9e251376&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
             </div>
              <div className="map-mobile">
                <a href="#"><button>Показать на картах</button></a>
              </div>
            </div>
          </div>
          <div className="FAQ">
            <div className="main__title">
            </div>
          </div>

        </div> </main>
      <Footer />
    </div>
  )
}

export default App;
