# Generated by Django 3.2 on 2021-04-15 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0002_rename_plnt_plant'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='image',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
