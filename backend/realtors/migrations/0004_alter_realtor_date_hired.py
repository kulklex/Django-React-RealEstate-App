# Generated by Django 4.1.2 on 2023-02-04 18:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0003_alter_realtor_date_hired'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realtor',
            name='date_hired',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 2, 4, 19, 57, 35, 566996)),
        ),
    ]
