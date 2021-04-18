from django.db import models

class Plant(models.Model):
    plantname = models.CharField(max_length=50)
    scientificname = models.CharField(max_length=50)
    description = models.CharField(max_length=400)
    careinstructions = models.CharField(max_length=1500)
    family = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    maintenancelevel = models.CharField(max_length=50)
    bestsuited = models.CharField(max_length=50)
    image = models.CharField(max_length=1000)
    decorativebonus = models.PositiveIntegerField()
    averageprice = models.PositiveIntegerField()
    categories = models.ManyToManyField('categories.Categories', related_name="plants")
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_plants',
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.plantname} - {self.scientificname}"