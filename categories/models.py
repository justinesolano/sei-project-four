from django.db import models

class Categories(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=1500)

    def __str__(self):
        return f"{self.name} - {self.image}"