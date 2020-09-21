import json

from rest_framework import viewsets
from .serializers import FeedsSerializer
from .models import Feeds, Member

from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from django.http import HttpResponse, JsonResponse

from rest_framework import permissions

class SignupView(View):
    def post(self, request):
        data = json.loads(request.body)
        Member.objects.create(
            name=data['name'],
            email=data['email'],
            password=data['password']
        )
        return HttpResponse(status=200)

    def get(self, request):
        Member_data = Member.objects.values()
        return JsonResponse({'lists' : list(Member_data)}, status=200)

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)

        try:
            if Member.objects.filter(email = data['email']).exists():
                member = Member.objects.get(name=data['email'])

                if member.password == data['password']:
                    return HttpResponse(status=200)
                return HttpResponse(status=401)
            return HttpResponse(status=400)

        except KeyError:
            return JsonResponse({'message' : "INVALID_KEYS"}, status=400)


class FeedsView(viewsets.ModelViewSet):
    queryset = Feeds.objects.all()
    serializer_class = FeedsSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
