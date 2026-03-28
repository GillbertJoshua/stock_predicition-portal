
from django.urls import path
from authentication import views as UserViews

urlpatterns = [
  path('register/',UserViews.RegisterView.as_view()),
]