import '../../dropper.css'
import s from './Footer.module.css'

const Footer = (props) => {

    return (
        <div classnameName='App'>

            <footer className={s.footer}>
                <div className = {s.container}>
                    <div className = {s.info}>
                        <table>
                            <tr>
                                <td>
                                    Телефон
                                </td>
                                <td>8-800-555-35-35</td>
                            </tr>
                            <tr>
                                <td>
                                    Адрес
                                </td>
                                <td>г.Кисловодск, ул. Чкалова 74</td>
                                <td>
                                    <p>
                                        <strong>Nogaev <br></br> Все права защищены © 2024 </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>nogaev@gmail.com</td>
                        </tr>
                    </table>
                </div>
        </div>
            </footer >
        </div >
    )
    
}
export default Footer;