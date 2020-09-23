from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Index, FeedsView, Signup, Login, MemberList, MemberIndex

feed_list = FeedsView.as_view({
    'post': 'create',
    'get': 'list'
})

member_list = MemberIndex.as_view({
    'post' : 'create',
    'get' : 'list'
});


feed_detail = FeedsView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path('',  Index, name='index'),
    path('member/', member_list, name='member_list'),
    path('member/signup', Signup.as_view()),
    path('member/login', Login.as_view()),
    path('member/get_list', MemberList.as_view()),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('feeds/', feed_list, name='feed_list'),
    path('feeds/<int:pk>/', feed_detail, name='feed_detail'),
])
