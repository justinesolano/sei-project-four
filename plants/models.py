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
    categories = models.ManyToManyField('categories.Categories', related_name="plants")
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_plants',
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.plant_name} - {self.scientific_name}"