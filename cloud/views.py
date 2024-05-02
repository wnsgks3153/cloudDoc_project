from django.shortcuts import render, redirect
from .forms import *
from .models import *

def cloud_view(request):
    username = "John"  # 예시로 사용할 사용자 이름
    return render(request, 'index.html', {'username': username})

def board(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        writer = request.POST['writer']

        board = Board(
            title=title,
            content=content,
            writer=writer,
        )
        board.save()
        return redirect('board')
    else:
        boardForm = BoardForm
        board = Board.objects.all()
        context = {
            'boardForm': boardForm,
            'board': board,
        }
        return render(request, 'board.html', context)
    
def boardEdit(request, pk):
    board = Board.objects.get(id=pk)
    if request.method == "POST":
        board.title = request.POST['title']
        board.content = request.POST['content']
        board.writer = request.POST['writer']

        board.save()
        return redirect('board')

    else:
        boardForm = BoardForm
        return render(request, 'update.html', {'boardForm':boardForm})   
    
def boardDelete(request, pk):
    board = Board.objects.get(id=pk)
    board.delete()
    return redirect('board')