# Generated by Django 3.1.1 on 2020-09-18 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_member'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='idx',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
