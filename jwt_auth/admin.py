from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()

# admin.site.unregister(User) # had to drop db and still somehow has User registered on app 'jwt_auth', already registered error triggers so need to unregister first then register
admin.site.register(User)