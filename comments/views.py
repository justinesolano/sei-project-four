from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.common import CommentSerializer
from .models import Comment

class CommentListView(APIView):
# if comment is valid, save it and return 201 and if not, return error and 422
    def post(self, request):
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):
    def delete(self, _request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()
            return Response(comment_to_delete.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)