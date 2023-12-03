from django.contrib import admin
from .models import Listing
from .models import Customer
from .models import Mechanic
from .models import Attendance
from .models import Contact
# Register your models here.

admin.site.site_header = "Deals on Wheels Admin"
admin.site.site_title = "Deals on Wheels Admin Portal"
admin.site.index_title = "Welcome to Deals on Wheels Portal"

admin.site.register(Listing)
admin.site.register(Customer)
admin.site.register(Mechanic)
admin.site.register(Attendance)
admin.site.register(Contact)