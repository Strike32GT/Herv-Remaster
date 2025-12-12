from django.db import models

# Create your models here.
class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_completo=models.CharField(max_length=100)
    correo = models.CharField(max_length=120,unique=True)
    password_hash = models.TextField()
    creado_en = models.DateTimeField(auto_now_add=True)
    rol = models.CharField(max_length=20, default='usuario')


    class Meta:
        db_table = 'usuarios'
        managed = False

    def __str__(self):
        return self.nombre_completo    