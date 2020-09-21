from rest_framework import serializers
from .models import Feeds
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class FeedsSerializer(serializers.ModelSerializer):
    #user = UserSerializer(read_only=True)
    class Meta:
        model = Feeds
        fields = (
            'id',
            'title',
            'subtitle',
            'content',
            'created_date',
        )
        read_only_fields = ('created_at',)

