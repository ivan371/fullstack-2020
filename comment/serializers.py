from rest_framework import serializers
from app.serializers import UserSerializer
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
  owner = UserSerializer(read_only=True)

  class Meta:
    model = Comment
    fields = ['id', 'text', 'date', 'owner', 'post']