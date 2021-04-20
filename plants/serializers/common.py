from rest_framework import serializers
from ..models import Plant

class PlantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        fields = '__all__'
        
        # ('id', 'plantname', 'scientificname', 'description', 'careinstructions', 'family', 'family', 'size', 'maintenancelevel', 'bestsuited', 'image', 'decorativebonus', 'averageprice', 'categories', 'owner', 'comments')
