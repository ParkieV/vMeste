import React, { Fragment } from "react";
import './Home.scss'
import { Header } from "../../components/header/Header";
import Scrollable from "../../components/scroll/Scrollable";
import Img_event from "../../image/img_event.svg"

export const Home = () => {
    const items = [
        {
            image: "../../image/img_event.svg",
            title: 'Событие1',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие2',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие3',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие4',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие5',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р'
        },
    ]
    return(
        <Fragment>
            <Header/>
            <div className="content_home">
                <div className="horizontal_scroll">
                    <Scrollable _class = 'items'>
                        {
                            items.map((v, i) => {
                                return(
                                    <div key={i} className="item">
                                        <div className="event_img">
                                            <img src={Img_event} />
                                        </div>
                                        <div className="event_content">
                                            <div className="name_type_place_event">
                                                <div className="name_event">

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Scrollable>
                </div>
            </div>
        </Fragment>
    )
}