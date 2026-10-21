from django.db import models


class Pizza(models.Model):
    name = models.CharField(max_length=50, unique=True)
    ingredients = models.JSONField()
    image_url = models.URLField()


    def __str__(self):
        return self.name
