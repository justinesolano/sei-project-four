from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PlantSerializer
from categories.serializers.common import CategoriesSerializer

class PopulatedPlantSerializer(PlantSerializer):

    comments = PopulatedCommentSerializer(many=True)
    categories = CategoriesSerializer(many=True)