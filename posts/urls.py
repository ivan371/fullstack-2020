from django.urls import path
from .views import post_list, PostList, PostDetail, PostCreate

app_name = 'post'

urlpatterns = [
    path('list-old/', post_list),
    path('list/', PostList.as_view(), name="list"),
    path('create/', PostCreate.as_view()),
    path('<slug:pk>/', PostDetail.as_view()),   
]
