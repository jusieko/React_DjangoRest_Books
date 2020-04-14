from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Film
from .serializers import FilmSerializer,FilmFullSerializer

class FilmViewset(viewsets.ModelViewSet):
    serializer_class = FilmSerializer
    queryset = Film.objects.all()

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = FilmFullSerializer(instance)
        return Response(serializer.data)