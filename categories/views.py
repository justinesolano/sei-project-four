from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .serializers.populated import PopulatedCategoriesSerializer
from .models import Categories


class CategoriesListView(APIView):

    def get(self, _request):
        categories = Categories.objects.all()
        serialized_categories = PopulatedCategoriesSerializer(categories, many=True)
        return Response(serialized_categories.data, status=status.HTTP_200_OK)

class CategoryDetailView(APIView):

    def get_category(self, pk):
        try:
            return Categories.objects.get(pk=pk)
        except Categories.DoesNotExist:
            raise NotFound(detail="This category does not exist")
    
    def get(self, _request, pk):
        category = self.get_category(pk=pk)
        serialized_categories = PopulatedCategoriesSerializer(category)
        return Response(serialized_categories.data, status=status.HTTP_200_OK)