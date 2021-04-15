from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

from .serializers.populated import PopulatedCategoriesSerializer
from .models import Categories


class CategoriesListView(APIView):

    def get(self, _request):
        categories = Categories.objects.all()
        serialized_categories = PopulatedCategoriesSerializer(categories, many=True)
        return Response(serialized_categories.data, status=status.HTTP_200_OK)