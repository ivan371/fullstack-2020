from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField()
  owner = models.ForeignKey(User, on_delete=models.CASCADE)
  image = models.ImageField()
  date = models.DateTimeField()

  def __str__(self):
    return self.title