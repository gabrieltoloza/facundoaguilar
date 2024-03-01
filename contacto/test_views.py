import pytest
from django.urls import reverse
from .forms import ContactoForm
from .models import Contactos



@pytest.mark.django_db
def test_landing_page(client):
    url = reverse('home')
    response = client.get(url)
    assert response.status_code == 200
    assert 'Explora propiedades exclusivas' in response.content.decode()
    
    form_data = {
        'nombre': 'Test',
        'telefono': 1234567890,
        'email': 'test@example.com',
    }
    
    form = ContactoForm(data=form_data)
    assert form.is_valid()
    
    invalid_form_data=form_data.copy()
    invalid_form_data['email']='invalid mail'
    invalid_form=ContactoForm(data=invalid_form_data)
    assert not invalid_form.is_valid()
    
    response = client.post(url, form_data)
    assert response.status_code == 302
    assert response.url == url + '#contact-me'
    
    contacto = Contactos.objects.get(email=form_data['email'])
    assert contacto.nombre == form_data['nombre']
    assert contacto.telefono == form_data['telefono']