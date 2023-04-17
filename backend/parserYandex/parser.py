from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException, TimeoutException
from webdriver_manager.chrome import ChromeDriverManager
from eventParser import eventParser
from html.parser import HTMLParser

import bs4
import datetime
import os
import json
import traceback


class Parser():
    def ChromeWebdriver(func) -> None:
        def _wrapper(*args, **kwargs):
            kwargs["driver"] = webdriver.Chrome(ChromeDriverManager().install())
            func(*args, **kwargs)
            kwargs["driver"].close()
        return _wrapper

    def openEvents(driver = None):
        while True:
            try:
                WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.CLASS_NAME, "button2.button2_size_m.button2_theme_action.button2_width_max.button2_type_link.button2_view_classic.button-more.button-more_theme_default.i-loadable-list__more.i-bem.button-more_js_inited"))).click()
                driver.implicitly_wait(10)
            except TimeoutException:
                if type(driver) is str:
                    return driver
                else:
                    return driver.page_source

    def getURLEvents(driver = None):
        try:
            page = Parser.openEvents(driver)
            bs_page = bs4.BeautifulSoup(page, "html.parser")

            # List of events
            div_events = bs_page.find("div", attrs = {'class': 'events-list__list events-list__list_adaptive_yes events-list__list_columns_3 i-loadable-list__list rubric-events__list'})
            if div_events is None:
                raise AttributeError("Don't find tag 'div', which contains events.")
            
            # Events
            events = div_events.find_all("div", attrs = {'class': 'event events-list__item yandex-sans'})
            if events == []:
                raise AttributeError("Don't find tags 'div' with events.")
            events_URL = []
            for event in events:
                # tag, which contains link
                meta_event = event.find('div', {'class': 'i-react event-card-react i-bem event-card-react_js_inited'})
                if meta_event is None:
                    raise AttributeError("Tag 'div', which contains link of event, wasn't found.")
                path = json.loads(meta_event.attrs['data-bem'])['event-card-react']['props']['link']
                url_event = 'https://afisha.yandex.ru' + path
                events_URL.append(url_event)
            return events_URL
        except AttributeError as err:
            return err

    def CreateURL(date: datetime.date = datetime.date.today(), path: str = None, period: int = 1):
        return f"{path}?date={date}&period={period}"
        

    @staticmethod
    @ChromeWebdriver
    def parseAfisha(date: datetime.date = datetime.date.today(), path: str = None, *args, **kwargs):
        driver = kwargs["driver"]
        page_URL = Parser.CreateURL(date, path)
        driver.get(page_URL)
        events = Parser.getURLEvents(driver)
        # TODO: conver from dict into JSON
        links = []
        for i in range(len(events)):
            links.append(events[i])
        with open("C:\\projects\\vMeste\\backend\\templates\\data.json", "w+") as json_file:
            json.dump(links, json_file)
        links = []
        with open("C:\\projects\\vMeste\\backend\\templates\\data.json", "r") as json_file:
            links = json.load(json_file)
        data = []
        for link in links:
            driver.get(link)
            event_info = eventParser(driver.page_source)
            if event_info is not None:
                data.append(event_info)
        with open("C:\\projects\\vMeste\\backend\\templates\\data_events.json", "w+") as json_file:
            json.dump(data, json_file)
        print("Success!")


if __name__=="__main__":
    Parser.parseAfisha(path='https://afisha.yandex.ru/moscow')