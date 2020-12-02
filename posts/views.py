from django.shortcuts import render, reverse, Http404
from django.contrib.auth.models import User
from django.views.generic import ListView, DetailView, CreateView
from rest_framework import viewsets, mixins, permissions
from .models import Post
from datetime import datetime
from comment.models import Comment
from .serializers import PostSerializer

def post_list(request):
  posts = Post.objects.all()
  return render(request, 'posts/postList.html', { 'object_list': posts })

class PostList(ListView):
  template_name = 'posts/postList.html'
  model = Post
  context_object_name = 'posts'

class PostDetail(DetailView):
  template_name = 'posts/postDetail.html'
  model = Post

  def dispatch(self, request, pk, *args, **kwargs):
    self.comments = Comment.objects.filter(post_id=pk)
    return super().dispatch(request, pk, *args, **kwargs)

  def get_context_data(self, **kwargs):
    context = super().get_context_data(**kwargs)
    context["comments"] = self.comments
    return context
  
class PostCreate(CreateView):
  template_name = 'posts/postCreate.html'
  model = Post
  fields = ['title', 'description']

  def form_valid(self, form):
    form.instance.owner = self.request.user
    form.instance.date = datetime.now()
    return super().form_valid(form)

  def get_success_url(self):
    return reverse('post:list')
  

class PostViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

class MyPostViewSet(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  permission_classes = [permissions.IsAuthenticated]

  def perform_create(self, serializer):
    serializer.save(owner_id=self.request.user)

  def get_queryset(self):
    return Post.objects.filter(owner=self.request.user)
  

  
  