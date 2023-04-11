from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException, TimeoutException
from webdriver_manager.chrome import ChromeDriverManager
from eventParser import eventParser
import bs4
import datetime
import os
import json


class Parser():
    def ChromeWebdriver(func) -> None:
        def _wrapper(*args, **kwargs):
            kwargs["driver"] = webdriver.Chrome(ChromeDriverManager().install())
            func(*args, **kwargs)
            kwargs["driver"].close()
        return _wrapper
    
    def test_html(paths: list[str] = None) -> None:
        with open(paths[0], "r", encoding="utf8") as html_src:
            with open(paths[1], "r", encoding="utf8") as html_test:
                text1 = html_src.read()
                text2 = html_test.read()
                for i in range(len(text1)):
                    try:
                        if text1[i] != text2[i]:
                            raise ValueError(f"Uncorrect. Index = {i + 1}")
                    except Exception as err:
                        print(err)
                    print("Correct!")

    def openEvents(driver = None):
        while True:
            try:
                WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.CLASS_NAME, "button2.button2_size_m.button2_theme_action.button2_width_max.button2_type_link.button2_view_classic.button-more.button-more_theme_default.i-loadable-list__more.i-bem.button-more_js_inited"))).click()
            except:
                if type(driver) is str:
                    return driver
                else:
                    return driver.page_source

    def getURLEvents(driver = None):
        page = Parser.openEvents(driver)
        bs_page = bs4.BeautifulSoup(page, "html.parser")
        div_events = bs_page.find("div", attrs = {'class': 'events-list__list events-list__list_adaptive_yes events-list__list_columns_3 i-loadable-list__list rubric-events__list'})
        events = div_events.find_all("div", attrs = {'class': 'event events-list__item yandex-sans'})
        events_URL = []
        for event in events:
            meta_event = event.find('div', {'class': 'i-react event-card-react i-bem event-card-react_js_inited'})
            path = json.loads(meta_event.attrs['data-bem'])['event-card-react']['props']['link']
            url_event = 'https://afisha.yandex.ru' + path
            events_URL.append(url_event)
        return events_URL

    def CreateURL(date: datetime.date = datetime.date.today(), path: str = None, period: int = 1):
        return f"{path}?date={date}&period={period}"
        

    @staticmethod
    @ChromeWebdriver
    def parseAfisha(date: datetime.date = datetime.date.today(), path: str = None, *args, **kwargs):
        driver = kwargs["driver"]
        page_URL = Parser.CreateURL(date, path)
        driver.get(page_URL)
        page_source = Parser.openEvents(driver)
        events = Parser.getURLEvents(page_source)
        json_data = ''
        # TODO: conver from dict into JSON
        links = []
        for i in range(len(events)):
            links.append(events[i])
        with open("C:\\projects\\vMeste\\backend\\data.json", "w+") as json_file:
            json.dump(links, json_file)
        data = []
        for link in links:
            driver.get(link)
            data.append(eventParser(driver.page_source))
        with open("C:\\projects\\vMeste\\backend\\data_events.json", "w+") as json_file:
            json.dump(data, json_file)
        print("Success!")


        

    


if __name__=="__main__":
    Parser.parseAfisha(path="https://afisha.yandex.ru/moscow")