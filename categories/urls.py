from django.urls import path
from .views import CategoriesListView # CategoryDetailView 

urlpatterns = [
    path('', CategoriesListView.as_view()),
    # path('<int:pk>/', CategoryDetailView.as_view())
]