from django.shortcuts import render, reverse
from django.views.generic import ListView, DetailView, CreateView
from .models import Post
from datetime import datetime
from comment.models import Comment

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
  