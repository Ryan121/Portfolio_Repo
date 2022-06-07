from django.shortcuts import render

# Create your views here.
def indexPage(request):
    return render(request, 'base/index.html')


def contentPage(request):
    return render(request, 'base/content.html')