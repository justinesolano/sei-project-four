from django.db import models

class Plant(models.Model):
    plant_name = models.CharField(max_length=50)
    scientific_name = models.CharField(max_length=50)
    family = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    maintenance_level = models.CharField(max_length=50)
    best_suited = models.CharField(max_length=50)
    image = models.CharField(max_length=1000)
    decorative_bonus = models.PositiveIntegerField()
    average_price = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.plant_name} - {self.scientific_name}"