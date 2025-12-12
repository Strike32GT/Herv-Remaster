from django.urls import path
from .views import RegistroUsuarioView, ListaUsuariosView

urlpatterns = [
    path('registro/',RegistroUsuarioView.as_view(), name='registro-usuario'),
    path('lista/',ListaUsuariosView.as_view(), name='lista-usuarios'),  
]