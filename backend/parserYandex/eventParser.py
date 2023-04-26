import bs4
import json
from datetime import date,timedelta

def findDate(soup = None) -> list():
    months = {'января': '01',
              'февраля': '02',
              'марта': '03',
              'апреля': '04',
              'мая': '05',
              'июня': '06',
              'июля': '07',
              'августа': '08',
              'сентября': '09',
              'октября': '10',
              'ноября': '11',
              'декабря': '12',}
    dates_elem_list = soup.find("div", {'class': 'schedule-other-item schedule-other-list__item schedule-other-list__item_more_no schedule-other-list__item_more-tickets_no schedule-other-list__item_has-tickets_yes schedule-other-list__item_has-discounts_no schedule-grid__row'})
    if dates_elem_list is not None:
        date_event = dates_elem_list.find("div", {'class': 'schedule-date__date'}).get_text()
        month = months[dates_elem_list.find("div", {'class': 'schedule-date__month'}).get_text().lower()]
    else:
        date_event = soup.find("span", {'data-component': 'Chip2', 'data-testid': 'chip2'})
        if date_event is None:
            return date.today().strftime("""%d.%m""")
        else:
            date_event = date_event.get_text()
        if date_event == r'*Cегодня*':
            return date.today().strftime("""%d.%m""")
        elif date_event == 'Завтра':
            date_event = date.today() + timedelta(days=1)
            return date_event.strftime("""%d.%m""")
        elif date_event == 'Послезавтра':
            date_event = date.today() + timedelta(days=2)
            return date_event.strftime("""%d.%m""")
        elif soup.find("label", {'class': 'radio-button__radio radio-button__radio_checked_yes radio-button__radio_side_left native-scroll__item widget-date-filter__item'}):
            return None
        else:
            try:
                date_event, month = date_event.split(' ')
            except ValueError:
                raise ValueError(date_event)
            month = months[month.lower()]
    return date_event + '.' + month

def eventParser(page_source: str = None) -> dict():
    with open("C:\\projects\\vMeste\\backend\\templates\\test.html", "w+", encoding="utf8") as page_file:
        page_file.write(page_source)
    soup = bs4.BeautifulSoup(page_source, 'html.parser')
    buy_button = soup.find("div", {'class': 'buy-tickets-button event-concert-description__buy-tickets i-metrika-block i-metrika-block__click i-bem buy-tickets-button_js_inited i-metrika-block_js_inited'})
    if buy_button is None:
        return None
    title = soup.find("div", {'class': 'event-concert-description__title-info'}).get_text()
    list_types = soup.find("ul", {'class': 'tags tags_size_l tags_theme_light event-concert-heading__tags'})
    raiting = ''
    try:
        raiting = soup.find("div", {'class': 'Colored-ie9gjh-1'}).contents[0].get_text()
    except:
        raiting = "0.0"
    place = soup.find("a", {'class': 'link link_theme_normal i-bem'})
    if place is not None:
        place = place.contents[0].get_text()
    else:
        place = 'Москва'
    genre = list_types.contents[0].get_text()
    age_limit = soup.find("div", {'class': 'event-concert-heading__content-rating'}).get_text()
    description = soup.find("div", "concert-description__text-wrap")
    if description is None:
        description = ''
    else:
        description = description.contents[0].get_text()
    event_type = soup.find("div", {'class': 'event-concert-description__cities'})
    if event_type:
        event_type = event_type.get_text().split(' ')[0]
    else:
        event_type = list_types.contents[1].get_text()
    date = findDate(soup)
    if time != []:
        time = time[-1].get_text()
    else:
        time = ''
    event = {'title': title,
             'raiting': raiting,
             'place': place,
             'genre': genre,
             'age_limit': age_limit,
             'description': description,
             'event_type': event_type,
             'dates': date,
             }
    return event
