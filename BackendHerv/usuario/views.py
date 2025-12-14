from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario
from .serializers import UsuarioSerializer, UsuarioCreateSerializer

# Create your views here.



class ListaUsuariosView(APIView):
    def get(self, request):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)



class RegistroUsuarioView(APIView):
    def post(self, request):
        serializer = UsuarioCreateSerializer(data=request.data)
        if serializer.is_valid():
            usuario = serializer.save()
            return Response({
                "mensaje": "Usuario creado exitosamente",
                "id": usuario.id,
                "nombre_completo": usuario.nombre_completo,
                "correo": usuario.correo,
                "rol": usuario.rol
            },
            status = status.HTTP_201_CREATED)
        
        print("ERRORES REGISTRO:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class LoginUsuarioView(APIView):
    def post(self, request):
        correo = request.data.get('correo')
        password = request.data.get('password')

        if not correo or not password:
            return Response(
                {"detail":"Correo y contraseña son requeridos"},
                status= status.HTTP_400_BAD_REQUEST
            )
        try:
            usuario = Usuario.objects.get(correo=correo)
        except Usuario.DoesNotExist:
            return Response(
                {"detail":"Credenciales invalidad"},
                status= status.HTTP_401_UNAUTHORIZED
            )
        
        if not check_password(password,usuario.password_hash):
            return Response(
                {"detail": "Credenciales invalidas."},
                status=status.HTTP_401_UNAUTHORIZED
            )
        return Response(
            {
                "id":usuario.id,
                "nombre_completo": usuario.nombre_completo,
                "correo": usuario.correo,
                "rol":usuario.rol,
            },
            status=status.HTTP_200_OK
        )




