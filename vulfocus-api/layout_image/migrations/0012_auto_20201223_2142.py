# Generated by Django 2.2.10 on 2020-12-23 21:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('layout_image', '0011_auto_20201223_2140'),
    ]

    operations = [
        migrations.AlterField(
            model_name='layout',
            name='layout_id',
            field=models.UUIDField(default=uuid.UUID('effec779-61d6-4187-a854-135f5afac117'), editable=False, primary_key=True, serialize=False, verbose_name='编排UUID'),
        ),
        migrations.AlterField(
            model_name='layoutdata',
            name='layout_user_id',
            field=models.UUIDField(default=uuid.UUID('b154d0bc-a59f-4b37-a74b-b50a289d3924'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservice',
            name='service_id',
            field=models.UUIDField(default=uuid.UUID('34264ee3-1ec9-45b4-9f0f-366ccc367c63'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicecontainer',
            name='service_container_id',
            field=models.UUIDField(default=uuid.UUID('6a373c62-62f0-44d1-84f8-bd42dbe4956a'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicecontainerscore',
            name='layout_service_container_score_id',
            field=models.UUIDField(default=uuid.UUID('0c99b0c4-8084-4dc2-ab15-b2198685ca7c'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicenetwork',
            name='layout_service_network_id',
            field=models.UUIDField(default=uuid.UUID('ec3df5b3-cc94-4147-b953-88994f09f32c'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
