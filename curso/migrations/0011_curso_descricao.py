# Generated by Django 4.2.1 on 2023-05-30 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0010_alter_curso_cor_botao_alter_curso_cor_texto'),
    ]

    operations = [
        migrations.AddField(
            model_name='curso',
            name='descricao',
            field=models.TextField(blank=True, max_length=2000, null=True, verbose_name='Descrição'),
        ),
    ]