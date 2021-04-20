from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied, NotFound # from login
from django.contrib.auth import get_user_model
from .models import User
from datetime import datetime, timedelta # from login
from django.conf import settings # from login
import jwt

from .serializers.populated import PopulatedUserSerializer

from .serializers.common import UserSerializer

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_202_ACCEPTED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user_to_login = User.objects.get(email=email)

        except User.DoesNotExist:
            raise PermissionDenied(detail='Invalid credentials')

        if not user_to_login.check_password(password):
            raise PermissionDenied(detail='Invalid credentials')

        dt = datetime.now() + timedelta(days=7)

        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )

        return Response({'token': token, 'message': f'Welcome back {user_to_login.first_name}'})

# * GET ALL USERS
class UserAllView(APIView):
    def get(self, _request):
        users = User.objects.all() # return everything from the db
        serialized_user = PopulatedUserSerializer(users, many=True) # convert the data
        return Response(serialized_user.data, status=status.HTTP_200_OK)

# * GET USER
class UserView(APIView):
    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound(detail="🤥 That user does not exist!")

    def get(self, _request, pk):
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        user_to_edit = User.objects.get(pk=pk)
        updated_user = UserSerializer(user_to_edit, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)