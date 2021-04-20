from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated
from rest_framework import status 
from rest_framework.exceptions import NotFound, PermissionDenied

from .serializers.common import PostSerializer
from .models import Post 

class PostListView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.data["owner"] = request.user.id 
        post_to_create = PostSerializer(data=request.data) 
        if post_to_create.is_valid():
            post_to_create.save()
            return Response(post_to_create.data, status=status.HTTP_201_CREATED)
        return Response(post_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class PostDetailView(APIView):

    def delete(self, request, pk):
        try:
            post_to_delete = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise NotFound()
        if post_to_delete.owner != request.user:
            raise PermissionDenied()    
        post_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)