import unittest
from selenium import webdriver
from backend.parserYandex import parser
from webdriver_manager.chrome import ChromeDriverManager


class TestParserJSON(unittest.TestCase):
    driver = ''
    def setUp(self) -> None:
        TestParserJSON.driver = webdriver.Chrome(ChromeDriverManager().install())
    
    def test_responce_link(self):
        pass

    def tearDown(self) -> None:
        TestParserJSON.driver.close()

if __name__=="__main__":
    unittest.main()