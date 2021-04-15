from django.urls import path
from .views import PlantListView, PlantDetailView

urlpatterns = [
    path('', PlantListView.as_view()),
    path('<int:pk>/', PlantDetailView.as_view())
]