# Generated by Django 4.1.2 on 2023-02-04 18:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0004_listing_open_house'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='open_house',
        ),
    ]