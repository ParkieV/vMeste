import React, { Fragment } from "react";
import './About.scss'
import { Header } from "../../components/header/Header";

export const About = () => {
    return(
        <Fragment>
            <Header/>
            <div className="about_content">
                <div className="about_h">
                О нас
                </div>

                <div className="about_text">
                Для современного мира перспективное планирование играет определяющее значение для форм воздействия. Внезапно, сторонники тоталитаризма в науке ограничены исключительно образом мышления. Вот вам яркий пример современных тенденций — новая модель организационной деятельности, в своём классическом представлении, допускает внедрение экономической целесообразности принимаемых решений

                Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы обнародованы. Но независимые государства объективно рассмотрены соответствующими инстанциями. Лишь элементы политического процесса являются только методом политического участия и преданы социально-демократической анафеме. 
                </div>
            </div>
            <div style={{height: '200px'}}></div>
        </Fragment>
    )
}