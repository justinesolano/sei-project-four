from posts.serializers.common import PostSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):
    posts = PostSerializer(many=True)
