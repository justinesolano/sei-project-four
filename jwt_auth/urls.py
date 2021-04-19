from django.urls import path 
from .views import RegisterView, LoginView, UserView, User

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profiles/', User.as_view()),
    path('profile/<int:pk>/', UserView.as_view()),
    path('profile/<int:pk>/edit/', UserView.as_view())
]