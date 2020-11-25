from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password']
    write_only_fields = ('password',)
