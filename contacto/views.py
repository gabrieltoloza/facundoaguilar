from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ContactoForm
from django.contrib import messages



def landing_page(request):
    if request.method == 'GET':
        context = {
            'form':ContactoForm(),
        }
        return render(request, 'base.html', context)

    elif request.method == 'POST':
        form=ContactoForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "El formulario ha sido enviado con éxito")
            form= ContactoForm()
            return redirect(reverse('home') + '#contact-me')
        else:
            messages.error(request, "Debe ingresar datos válidos")
            form= ContactoForm()
            return redirect(reverse('home') + '#contact-me')
    else:
        form=ContactoForm()
        
    context= {
        'form':form
    }           
    return render(request, 'base.html', context) 



