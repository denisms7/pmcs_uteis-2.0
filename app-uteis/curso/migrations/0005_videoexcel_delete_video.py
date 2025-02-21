# Generated by Django 4.2.1 on 2023-05-29 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0004_remove_video_video_url_video_video_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='VideoExcel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('video_file', models.FileField(upload_to='videos/excel/')),
            ],
        ),
        migrations.DeleteModel(
            name='Video',
        ),
    ]
