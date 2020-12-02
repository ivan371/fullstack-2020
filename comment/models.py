from django.db import models
from django.contrib.auth.models import User
from posts.models import Post
from datetime import datetime

class Comment(models.Model):
  text = models.TextField()
  owner = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateTimeField(default=datetime.now)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)

  def __str__(self):
    return self.text[:10] + '...'