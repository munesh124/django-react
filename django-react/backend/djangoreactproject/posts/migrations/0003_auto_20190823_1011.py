# Generated by Django 2.2.4 on 2019-08-23 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_post_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
