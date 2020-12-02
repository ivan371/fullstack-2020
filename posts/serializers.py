from rest_framework import serializers
from app.serializers import UserSerializer
from comment.serializers import CommentSerializer
from .models import Post

class PostSerializer(serializers.ModelSerializer):
  owner = UserSerializer(read_only=True)
  comment_set = CommentSerializer(many=True, read_only=True)

  class Meta:
    model = Post
    fields = ['id', 'title', 'date', 'description', 'owner', 'comment_set']