from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import views

feed_list = views.as_view({
    'post': 'create',
    'get': 'list'
})

feed_detail = views.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path("", views.index, name="index"),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('feeds/', feed_list, name='feed_list'),
    path('feeds/<int:pk>/', feed_detail, name='feed_detail'),
])
