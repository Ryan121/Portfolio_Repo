from django.contrib import admin
from .models import Project, Skill, Tag, History

# Register your models here.
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(Tag)
admin.site.register(History)
