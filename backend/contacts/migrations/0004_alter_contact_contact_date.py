# Generated by Django 4.1.2 on 2023-02-10 06:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_alter_contact_contact_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='contact_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 2, 10, 7, 39, 22, 159659)),
        ),
    ]
