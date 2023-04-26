import React, { Fragment } from "react";
import './Home.scss'
import { Header } from "../../components/header/Header";
import Scrollable from "../../components/scroll/Scrollable";
import Img_event from "../../image/img_event.svg"
import Map_pin from "../../image/map_pin.svg"
import Img_event2 from "../../image/img_event2.svg"
import Bookmark from "../../image/bookmark.svg"
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Dropdown_icon from "../../image/dropdown_icon.svg"
import Man from "../../image/man.svg"

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
    const items_vertical = [
        {
            image: "../../image/img_event.svg",
            title: 'Событие1',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие2',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие3',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие4',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие5',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            
        },
    ]
    const items_horizontal_2 = [
        {
            image: "../../image/img_event.svg",
            title: 'Событие1',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие2',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие3',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие4',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            age: '12+'
        },
        {
            image: "../../image/img_event.svg",
            title: 'Событие5',
            place: 'музей им.Пушкина',
            type: 'выставка',
            price: 'от 2000 р',
            
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
                                                <div className="name_place">
                                                    <div className="name_event ">
                                                        {v.title}
                                                    </div>
                                                    <div className="type_place">
                                                        <div className="place">
                                                            {v.place}
                                                        </div>
                                                        <div className="type">
                                                            {v.type}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="map_pin">
                                                    <img src={Map_pin}></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Scrollable>
                </div>
                <div className="conteiner">
                    <div className="vertical_scroll">
                    <Scrollable _class = 'items_vertical'>
                        {
                            items_vertical.map((v, i) => {
                                return(
                                    <div key={i} className="item_vertical">
                                        <div className="event_img">
                                            <img src={Img_event2} />
                                        </div>
                                        <div className="event_content">
                                            <div className="name_type_place_event">
                                                <div className="name_place">
                                                    <div className="name_event ">
                                                        {v.title}
                                                    </div>
                                                    
                                                    <div className="place">
                                                        {v.place}
                                                    </div>
                                                    
                                                    <div className="type_age">
                                                        <div className="type">
                                                            {v.type}
                                                        </div>
                                                        <div className="age">
                                                            {v.age}
                                                        </div>
                                                    </div>
                                                    <div className="price_icon">
                                                        <div className="price">
                                                            {v.price}
                                                        </div>
                                                        <div className="bookmark">
                                                            <img src={Bookmark}/>
                                                        </div>
                                                        <div>
                                                            <img src={Map_pin}/>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Scrollable>
                    </div>
                    <div className="map_conteiner">
                        <YMaps>
                            <div className="map">
                                <Map width="100%" height="707px"  defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                            </div>
                        </YMaps>
                    </div>
                </div>
                <div className="filters_conteiner">
                    <div className="categori_conteiner">
                        <div className="h_categori">
                            Категория
                        </div>
                        <div className="categories">
                            <button className="btn_category">кино</button>
                            <button className="btn_category">выставка</button>
                            <button className="btn_category">театр</button>
                            <button className="btn_category">спектакль</button>
                            <button className="btn_category">цирк</button>
                            <button className="btn_category">шоу</button>
                        </div>
                    </div>
                    <div className="date_time_conteiner">
                        <div className="h_date_time">
                            Дата и время
                        </div>
                        <div className="date_conteiner">
                            <div className="date">22.05.2004</div>
                        </div>
                        
                    </div>
                    <div className="people_conteiner">
                        <div className="h_people">
                            Количество людей
                        </div>
                        <div className="peoples">
                            <button className="btn_people">1</button>
                            <button className="btn_people">2</button>
                            <button className="btn_people">3</button>
                            <button className="btn_people">4</button>
                            <button className="btn_people">4+</button>
                        </div>
                    </div>
                </div>
                <div className="price_conteiner">
                    <div className="h_price">Бюджет с человека</div>
                    <div className="price">
                        <div className='price_1'><form action="" method="get"><input className='price_1_input' name="" placeholder="0 руб" ></input></form></div>
                        <div className="line"></div>
                        <div className='price_2'><form action="" method="get"><input className='price_2_input' name="" placeholder="10000 руб" ></input></form></div>   
                    </div>  
                    <div></div>  
                    <div className="free_tickets">
                        <input type="radio" id = "checkbox" name="checkbox"></input>
                        <div className="free_tickets_h">Бесплатные билеты</div>
                    </div>  
                    <div className="pushkin_card">
                        <input type="radio" id = "checkbox" name="checkbox"></input>
                        <div className="pushkin_card_h">Пушкинская карта</div>
                    </div>                
                </div>
                <div className="conteiner_horizontal_scroll">
                    <div className="horizontal_scroll_2">
                    <Scrollable _class = 'items_horizontal_2'>
                        {
                            items_horizontal_2.map((v, i) => {
                                return(
                                    <div key={i} className="item_horizontal_2">
                                        <div className="event_img">
                                            <img src={Img_event2} />
                                        </div>
                                        <div className="event_content">
                                            <div className="name_type_place_event">
                                                <div className="name_place">
                                                    <div className="name_event ">
                                                        {v.title}
                                                    </div>
                                                    
                                                    <div className="place">
                                                        {v.place}
                                                    </div>
                                                    
                                                    <div className="type_age">
                                                        <div className="type">
                                                            {v.type}
                                                        </div>
                                                        <div className="age">
                                                            {v.age}
                                                        </div>
                                                    </div>
                                                    <div className="price_icon">
                                                        <div className="price">
                                                            {v.price}
                                                        </div>
                                                        <div className="bookmark">
                                                            <img src={Bookmark}/>
                                                        </div>
                                                        <div>
                                                            <img src={Map_pin}/>
                                                        </div> 
                                                    </div>
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
                <div className="conteiner_all_event">
                    <div className="all_event">
                        <div className="event">
                            <div className="h_even">Событие 1</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 2</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 3</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="dropdown_event">
                            <div className="dropdown_event_img"></div>
                            <div className="dropdown_name_time_icon">
                                <div className="dropdown_name">Событие 4</div>
                                <div className="dropdown_time">10:00 - 11:30</div>
                                <div className="icon_drop"> <img src={Dropdown_icon}></img> </div>
                            </div>
                            <div className="buy_btn_cont"><button className="buy_btn">купить</button></div>
                        </div>
                    </div>
                    <div className="all_event">
                        <div className="event">
                            <div className="h_even">Событие 1</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 2</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 3</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 4</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                    </div>
                    <div className="all_event">
                        <div className="event">
                            <div className="h_even">Событие 1</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 2</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 3</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                        <div className="line_conteiner">
                            <div className="line_event"></div>
                            <div className="time_route">15 мин</div>
                            <div className="type_route"> <img src={Man}></img> </div>
                        </div>
                        <div className="event">
                            <div className="h_even">Событие 4</div>
                            <div className="time_event">9:00 - 9:45</div>
                            <div className="dropdown_icon"><img src = {Dropdown_icon}/></div>
                        </div>
                    </div>
                </div>
                <div style={{height: '200px'}}></div>
            </div>
        </Fragment>
    )
}