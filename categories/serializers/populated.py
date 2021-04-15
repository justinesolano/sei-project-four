from .common import CategoriesSerializer
from plants.serializers.common import PlantSerializer

class PopulatedCategoriesSerializer(CategoriesSerializer):

    plants = PlantSerializer(many=True)