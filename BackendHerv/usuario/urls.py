from django.urls import path
from .views import RegistroUsuarioView, ListaUsuariosView, LoginUsuarioView

urlpatterns = [
    path('registro/',RegistroUsuarioView.as_view(), name='registro-usuario'),
    path('lista/',ListaUsuariosView.as_view(), name='lista-usuarios'),
    path('login/',LoginUsuarioView.as_view(), name='login-usuario'),  
]