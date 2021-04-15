from comments.serializers.common import CommentSerializer
from ..serializers.common import PlantSerializer
from categories.serializers.common import CategoriesSerializer

class PopulatedPlantSerializer(PlantSerializer):

    comments = CommentSerializer(many=True)
    categories = CategoriesSerializer(many=True)