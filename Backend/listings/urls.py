from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .import views
urlpatterns = [
    path('',views.listings,name='listings'),
    path('create/',views.create,name='create'),
    path('update/<id>/',views.update,name='update'),
    path('delete/<id>/',views.delete,name='delete'),
    path('listing/<id>/',views.listing,name='listing'),
    path('index/',views.index,name='index'),
    path('admin/',views.admin,name='admin'),
    path('Manager_login/',views.manager,name='manager'),
    path('Manager_login/manager_dashboard/',views.manager_dashboard,name='manager_dashboard'),
    path('Manager_login/manager_dashboard/car_availability/',views.car_availability,name='car_availability'),
    path('Manager_login/manager_dashboard/employee/',views.employee,name='employee'),
    path('Manager_login/manager_dashboard/Mechanical_Dashboard/',views.mechanic_dashboard,name='mechanic_dashboard'),
    path('Manager_login/manager_dashboard/customer/',views.customer,name='customer'),
    path('Manager_login/manager_dashboard/attendance/',views.attendance,name='attendance'),
    path('about_page/',views.about,name='about'),
    path('index/contact/',views.contact,name='contact'),
    path('index/employee/',views.employee,name='employee'),
    path('index/listings/',views.listings,name='listings'),
    path('index/car_availability/',views.car_availability,name='car_availability'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)