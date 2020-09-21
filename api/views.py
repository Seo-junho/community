import json
import bcrypt
import jwt

from rest_framework import viewsets, permissions, generics, serializers
from rest_framework.response import Response
from .serializers import FeedsSerializer
from .models import Feeds, Member

from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from django.http import HttpResponse, JsonResponse

class SignupView(View):
    def post(self, request):
        data = json.loads(request.body)

        try:
            if Member.objects.filter(email = data['email']).exists():
                return JsonResponse({"message" : "이미 존재하는 이메일 입니다"}, status=400)

            Member.objects.create(
                name = data['name'],
                email = data['email'],
                password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode("UTF-8")
            ).save()

            return HttpResponse(status=200)

        except KeyError:
            return JsonResponse({"message" : "INVALID_KEYS"}, status=400)


class MemberList(View):
    def get(self, request):
        Member_data = Member.objects.values()
        return JsonResponse({'lists' : list(Member_data)}, status=200)

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)

        try:
            if Member.objects.filter(email=data['email']).exists(): ## 입력한 이메일 존재하는지 체크
                user = Member.objects.get(email=data['email']) ## 해당 이메일로 회원 가져옴

                if bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('UTF-8')): ## 암호화 비교

                   ## @TODO 토큰 생성 로직 점검 후 토큰 생성 필요
                   ## token = jwt.encode({'user' : user.id}, algorithm='HS256').decode('UTF-8')

                   return JsonResponse({"message" : "login Success!"}, status=200) ## 로그인 성공

                return HttpResponse(status=401) ## 비밀번호 실패

            return HttpResponse(status=400) ## 해당 회원 존재 하지 않음

        except KeyError:
            return JsonResponse({'message' : "INVALID_KEYS"}, status=400)


class FeedsView(viewsets.ModelViewSet):
    queryset = Feeds.objects.all()
    serializer_class = FeedsSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
