# Generated by Django 3.2 on 2021-04-29 16:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plantname', models.CharField(max_length=50)),
                ('scientificname', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=400)),
                ('careinstructions', models.CharField(max_length=1500)),
                ('family', models.CharField(max_length=50)),
                ('size', models.CharField(max_length=50)),
                ('maintenancelevel', models.CharField(max_length=50)),
                ('bestsuited', models.CharField(max_length=50)),
                ('image', models.CharField(max_length=1000)),
                ('decorativebonus', models.PositiveIntegerField()),
                ('averageprice', models.PositiveIntegerField()),
                ('categories', models.ManyToManyField(related_name='plants', to='categories.Categories')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_plants', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
