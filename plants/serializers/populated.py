from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PlantSerializer
from categories.serializers.common import CategoriesSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedPlantSerializer(PlantSerializer):

    comments = PopulatedCommentSerializer(many=True)
    categories = CategoriesSerializer(many=True)
    owner = UserSerializer()