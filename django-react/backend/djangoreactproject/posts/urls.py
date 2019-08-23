from django.urls import path
from . import views


urlpatterns = [

    path('api/posts/', views.PostListCreateAPIView.as_view()),
    path('api/posts/<int:pk>/', views.PostRetrieveUpdateDestroyAPIView.as_view()),
]