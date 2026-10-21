from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Pizza
from .serializers import PizzaSerializer


class PizzaListApi(ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer



class PizzaDetailApi(RetrieveAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
