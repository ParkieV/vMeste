from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=150)
    raiting = models.FloatField(required=False)
    place = models.CharField(max_length=150)
    genre = models.CharField(max_length=150)
    cost = models.IntegerField(required=False)
    age_limit = models.IntegerField(required=False)
    description = models.TextField
    event_type = models.CharField(max_length=150)
    date = models.DateField()
    time = models.TimeField(required=False)

class GetEventsModel(models.Model):
    date = models.DateField
    time = models.TimeField
    genre = models.CharField
