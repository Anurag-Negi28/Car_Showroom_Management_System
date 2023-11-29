from django.contrib import admin
from .models import Listing
# Register your models here.

admin.site.site_header = "Deals on Wheels Admin"
admin.site.site_title = "Deals on Wheels Admin Portal"
admin.site.index_title = "Welcome to Deals on Wheels Portal"

admin.site.register(Listing)