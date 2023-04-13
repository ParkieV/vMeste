import bs4
import json

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
    date = dates_elem_list.find("div", {'class': 'schedule-date__date'}).get_text()
    month = months[dates_elem_list.find("div", {'class': 'schedule-date__month'}).get_text().lower()]
    return date + '.' + month

def eventParser(page_source: str = None) -> dict():
    with open("C:\\projects\\Parsers\\templates\\test.html", "w+", encoding="utf8") as page_file:
        page_file.write(page_source)
    soup = bs4.BeautifulSoup(page_source, 'html.parser')
    title = soup.find("div", {'class': 'event-concert-description__title-info'}).get_text()
    list_types = soup.find("ul", {'class': 'tags tags_size_l tags_theme_light event-concert-heading__tags'})
    raiting = ''
    try:
        raiting = soup.find("div", {'class': 'Colored-ie9gjh-1'}).contents[0].get_text()
    except:
        raiting = ''
    place = soup.find("a", {'class': 'link link_theme_normal i-bem'})
    place = place.contents[0].get_text()
    genre = list_types.contents[0].get_text()
    cost = ''
    age_limit = soup.find("div", {'class': 'event-concert-heading__content-rating'}).get_text()
    description = soup.find("div", "concert-description__text-wrap").contents[0].get_text()
    event_type = soup.find("div", {'class': 'event-concert-description__cities'}).get_text().split(' ')[0]
    date = findDate(soup)
    time = soup.find_all("dd", {'class': 'event-attributes__category-value'})[-1].get_text()
    event = {'title': title,
             'raiting': raiting,
             'place': place,
             'genre': genre,
             'cost': cost,
             'age_limit': age_limit,
             'description': description,
             'event_type': event_type,
             'dates': date,
             'time': time
             }
    return event
