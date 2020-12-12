from django.db import models

class Player(models.Model):
    photo=models.ImageField(max_length=500)
    name=models.CharField(max_length=100)
    surname=models.CharField(max_length=100)

    def __str__(self):
        return self.name + " " + self.surname

    class Meta:
        verbose_name="Игрок"
        verbose_name_plural="Игроки"
