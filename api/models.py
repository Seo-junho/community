import datetime

from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Member(models.Model):
    now = datetime.datetime.now()
    now = now.strftime('%Y-%m-%d %H:%M:%S')

    idx = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    create_date_time = models.DateTimeField(default=now)
    update_date_time = models.DateTimeField(default=now)
    status = models.CharField(max_length=5, default='A')

    def update(self):
        self.update_date_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        self.save()

    class Meta:
        db_table = 'member'

class Feeds(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=144)
    subtitle = models.CharField(max_length=144, blank=True)
    content = models.TextField()
    mainimage = models.ImageField(upload_to='img', null = True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return '[{}] {}'.format(self.user.username, self.title)
