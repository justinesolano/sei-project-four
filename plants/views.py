from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Plant
from .serializers.common import PlantSerializer
from .serializers.populated import PopulatedPlantSerializer

class PlantListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    # ALL PLANTS
    def get(self, _request):
        plants = Plant.objects.all() # return everything from the db
        serialized_plants = PopulatedPlantSerializer(plants, many=True) # convert the data
        return Response(serialized_plants.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id
        plant_to_add = PlantSerializer(data=request.data)
        if plant_to_add.is_valid():
            plant_to_add.save()
            return Response(plant_to_add.data, status=status.HTTP_201_CREATED)
        return Response(plant_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class PlantDetailView(APIView):
    # def get_plant(self, pk):
    #     try:
    #         plant = self.get_plant(pk=pk)
    #     except Plant.DoesNotExist:
    #         raise NotFound(detail="Cannot find that plant 🤷🏻‍♀️ 🌱")
    #     serialized_plant = PlantSerializer(plant)
    #     return Response(serialized_plant.data, status=status.HTTP_200_OK)

    # ONE PLANT
    def get(self, _request, pk):
        plant = Plant.objects.get(pk=pk)
        serialized_plant = PopulatedPlantSerializer(plant)
        return Response(serialized_plant.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        plant_to_delete = Plant.objects.get(pk=pk)
        plant_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        plant_to_edit = Plant.objects.get(pk=pk)
        updated_plant = PlantSerializer(plant_to_edit, data=request.data)
        if updated_plant.is_valid():
            updated_plant.save()
            return Response(updated_plant.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_plant.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        