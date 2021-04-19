from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .serializers.populated import PopulatedCategoriesSerializer
from .models import Categories
from .serializers.common import CategoriesSerializer


class CategoriesListView(APIView):
# * GET ALL CATEGORIES
    def get(self, _request):
        categories = Categories.objects.all()
        serialized_categories = PopulatedCategoriesSerializer(categories, many=True)
        return Response(serialized_categories.data, status=status.HTTP_200_OK)

# * GET ONE CATEGORY
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

# * EDIT CATEGORY
    def put(self, request, pk):
        category_to_edit = Categories.objects.get(pk=pk)
        updated_category = CategoriesSerializer(category_to_edit, data=request.data)
        if updated_category.is_valid():
            updated_category.save()
            return Response(updated_category.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_category.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        