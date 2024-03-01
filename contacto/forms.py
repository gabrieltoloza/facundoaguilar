from .models import Contactos
from django import forms
from django.core.exceptions import ValidationError


class ContactoForm(forms.ModelForm):
    class Meta:
        model=Contactos
        fields= ['nombre', 'telefono', 'email']
        
        
    def clean_nombre(self):
        nombre = self.cleaned_data.get('nombre')
        if not nombre.isalpha():
            raise ValidationError("El nombre solo debe tener letras")
        return nombre
    
    
    def clean_telefono(self):
        telefono = self.cleaned_data.get('telefono')
        if not isinstance(telefono, int):
            raise ValidationError("El campo numero solo debe contener numeros")
        return telefono