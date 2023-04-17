import unittest
from selenium import webdriver
from backend.parserYandex.parser import Parser
from webdriver_manager.chrome import ChromeDriverManager


class TestParserJSON(unittest.TestCase):
    driver = ''
    def setUp(self) -> None:
        TestParserJSON.driver = webdriver.Chrome(ChromeDriverManager().install())
    
    def test_parser(self):
        Parser.parseAfisha(path='https://afisha.yandex.ru/moscow')

    def tearDown(self) -> None:
        TestParserJSON.driver.close()

if __name__=="__main__":
    unittest.main()