from django.urls import path
from . import views


urlpatterns = [

    path('',views.indexPage, name="index"),
    path('content/',views.contentPage, name="content"),

    path('api/', views.apiContents, name="api"),
    path('api/get-projects/', views.getProjects, name='get-projects'),
    path('api/add-projects/', views.addProjects, name='add-projects'),
]

