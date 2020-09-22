from rest_framework import serializers
from .models import Feeds, Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = (
             'idx',
             'name',
             'email',
             'password',
             'create_date_time',
             'update_date_time',
             'statu'
        )
        read_only_fields = ('create_date_time', 'update_date_time')

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

