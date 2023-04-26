import json

from os import path
from datetime import datetime

from events.models import Event

class CDdatabase():
    def JSONserializer(abs_path) -> None:
        with open(path.abspath(abs_path), "r") as JSONfile:
            data = json.load(JSONfile)
            if data:
                for elem in data:
                    try:
                        Event(**elem).save()
                    except:
                        print("Error")
    
    def JSONdeserializer(abs_path, data_filters: dict | None = None) -> None:
        with open(path.abspath(abs_path), "w+") as JSONfile:
            if data_filters is None:
                data = Event.objects.all()
            else:
                data = Event.objects.filter(**data_filters)
            json.dump(JSONfile, data)
    
    def getEventsbyFilters(filters = None, *args, **kwargs):
        if filters is None:
            response = Event.objects.filter(date=datetime.today().todaystrftime("""%d.%m"""))
        else:
            response = Event.objects.filter(**filters)
        return response
    
    def deleteEventsbyDate(date = None, *args, **kwargs):
        if date is None:
            response = Event.objects.filter(date=datetime.today().todaystrftime("""%d.%m""")).delete()
        else:
            response = Event.objects.filter(date).delete()