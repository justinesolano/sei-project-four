from comments.serializers.populated import PopulatedCommentSerializer
from categories.serializers.common import CategoriesSerializer
from jwt_auth.serializers.common import UserSerializer
from ..serializers.common import PlantSerializer

class PopulatedPlantSerializer(PlantSerializer):

    comments = PopulatedCommentSerializer(many=True)
    categories = CategoriesSerializer(many=True)
    owner = UserSerializer()