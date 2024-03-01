from django.urls import path
from .views import landing_page



appname='contacto'

urlpatterns = [
    path('', landing_page, name='home' )
]

