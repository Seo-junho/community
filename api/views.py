from rest_framework import viewsets
from .serializers import FeedsSerializer
from .models import Feeds
from rest_framework import permissions

class FeedsView(viewsets.ModelViewSet):
    queryset = Feeds.objects.all()
    serializer_class = FeedsSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
