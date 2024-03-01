from django.db import models




class Contactos(models.Model):
    nombre=models.CharField(max_length=80, null=False)
    email=models.EmailField(max_length=80, null=True, blank=True)
    telefono=models.PositiveIntegerField(blank=False, null=False)
    created_at=models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.nombre
    
    class Meta:
        ordering = ['created_at']
        verbose_name = "Contactos"
        verbose_name_plural = "Contactos"
