from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Project
from base.serializers import ProjectSerializer


# Create your views here.
def indexPage(request):
    return render(request, 'base/index.html')


def contentPage(request):
    return render(request, 'base/content.html')


@api_view(['GET'])
def apiContents(request):

    api_urls = {

        'Please find a comprehensive list of the contents and functionality offered by the ATM api': '',
        '-----------------------------------------------------------': '',
        '----------------------- ATM API --------------------------': '',
        '----------------------------------------------------------': '',
        '--------------- ATM Module Catalogue ---------------------': '',
        'Modules List': '/api/get-modules/',
        'Modules Detail View': '/api/get-modules/<str:pk>/',
        'Create Modules': '/api/add-modules/',
        'Update Modules': '/api/update-module/<str:pk>/',
        'Delete Modules': '/api/delete-module/<str:pk>/',
        '---------------------------------------------------------': '',
        '--------------- ATM Useful Links -----------------------': '',
    }

    return Response(api_urls)


@api_view(['GET'])
def getProjects(request):
    project = Project.objects.all()
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addProjects(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)