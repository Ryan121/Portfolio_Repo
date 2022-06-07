from django.urls import path
from . import views


urlpatterns = [

    path('',views.indexPage, name="index"),
    path('content',views.contentPage, name="content"),
]