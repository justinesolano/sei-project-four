# Generated by Django 3.2 on 2021-04-18 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0005_alter_plant_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='description',
            field=models.CharField(max_length=400),
        ),
    ]
