from multiprocessing import context
from django.shortcuts import redirect, render
from .models import Listing
from .forms import ListingForm
# Create your views here.

def listings(request):
    listings = Listing.objects.all()
    context = {
        'listings':listings
    }
    return render(request,'listings.html',context)

def listing(request,id):
    listing = Listing.objects.get(id=id)
    context = {
        'listing':listing
    }
    return render(request,'listing.html',context)


def create(request):
    form = ListingForm()
    if request.method == 'POST':
        form = ListingForm(request.POST,request.FILES)
        if form.is_valid:
            form.save()
        return redirect('/')
    context = {
        'form':form
    }
    return render(request,'create.html',context)

def update(request,id):
    listing = Listing.objects.get(id=id)
    form = ListingForm(instance = listing)
    if request.method == 'POST':
        form = ListingForm(request.POST,instance = listing, files = request.FILES)
        if form.is_valid:
            form.save()
        return redirect('/') 
    context = {
        'form':form
    }
    return render(request,'update.html',context)

def delete(request,id):
    listing = Listing.objects.get(id=id)
    listing.delete()
    return redirect('/')

def index(request):
    return render(request,'index.html')

def admin(request):
    return redirect('/admin')

def manager(request):
    return render(request,'Manager_login.html')

def manager_dashboard(request):
    return render(request,'manager_dashboard.html')

def car_availability(request):
    return render(request,'car_availability.html')

def employee(request):
    return render(request,'employee.html')

def mechanic_dashboard(request):
    return render(request,'Mechanical_Dashboard.html')

def customer(request):
    return render(request,'customer.html')

def attendance(request):
    return render(request,'attendance.html')

def about(request):
    return render(request, 'about_page.html')

def contact(request):
    return render(request, 'contact.html')

def home(request):
    return render(request, 'index.html')