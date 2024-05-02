from django.contrib import admin
from django.urls import path
from cloud import views
from cloud.views import *

urlpatterns = [
    path('', cloud_view, name='home'),  # 루트 URL에 대한 패턴 추가
    path('admin/', admin.site.urls),
    path('board/', views.board, name='board'),
    path('edit/<int:pk>', boardEdit, name='edit'),
    path('delete/<int:pk>', boardDelete, name='delete'),
]