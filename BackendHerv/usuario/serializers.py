from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields =['id','nombre_completo','correo','rol','creado_en']



class UsuarioCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = Usuario
        fields = ['id','nombre_completo','correo','rol','password']

    def create(self, validated_data):
        password_normal = validated_data.pop('password')
        usuario = Usuario(
            nombre_completo=validated_data['nombre_completo'],
            correo=validated_data['correo'],
            rol=validated_data.get('rol', 'usuario'),
            password_hash=make_password(password_normal),
        )

        usuario.save()
        return usuario