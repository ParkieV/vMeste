from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView


class parsersAPIView(APIView):
    parser_classes = [JSONParser]

class EventView(parsersAPIView):
    
    def get(self, request, *args, **kwargs):
        request_json = request.body
        