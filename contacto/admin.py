from django.contrib import admin
from .models import Contactos




@admin.register(Contactos)
class ContactosAdmin(admin.ModelAdmin):
    fields = ['nombre', 'email', 'telefono']
    list_display = ['nombre', 'telefono', 'created_at'] # Lets display nos deja configurar como se visualizara el objeto desde el panel de admin

    
