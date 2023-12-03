from django.db import models
from django.contrib.auth.models import User

# Create your models here

class Listing(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    brand = models.CharField(max_length=100)
    milage = models.IntegerField()
    price = models.IntegerField()
    image = models.ImageField()

class Customer(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    address = models.CharField(max_length=40)
    mobile = models.CharField(max_length=20,null=False)
    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_instance(self):
        return self
    def __str__(self):
        return self.user.first_name
    
class Mechanic(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    address = models.CharField(max_length=40)
    mobile = models.CharField(max_length=20,null=False)
    skill = models.CharField(max_length=500,null=True)
    salary=models.PositiveIntegerField(null=True)
    status=models.BooleanField(default=False)
    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_id(self):
        return self.user.id
    def __str__(self):
        return self.user.first_name
    
class Attendance(models.Model):
    mechanic=models.ForeignKey('Mechanic',on_delete=models.CASCADE,null=True)
    date=models.DateField()
    present_status = models.CharField(max_length=10)

class Contact(models.Model):
    date=models.DateField(auto_now=True)
    by=models.CharField(max_length=40)
    message=models.CharField(max_length=500)
    
def __str__(self):
    return self.name 