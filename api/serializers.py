from rest_framework import serializers
from .models import Feeds, Member

class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ('name', 'email', 'password','create_date_time','update_date_time','status')

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

