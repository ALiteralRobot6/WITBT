from tkinter import *
import random
scores = {

}
wiki = ''
#Making a preview of the article.
def preview():
    global wiki
    with open('wiki.txt', 'r', encoding='iso-8859-1') as f:
        titles = f.read().splitlines() #Splits lines.
    wiki = random.choice(titles) # Picks a random Wiki title.
    print(wiki)
#Upvoting and downvoting.
def upvote():
    if wiki not in scores: 
        scores[wiki] = 1
    else:
        scores[wiki] = scores[wiki] + 1
    print(scores)
    preview()
def downvote():
    if wiki not in scores:
        scores[wiki] = -1
    else:
        scores[wiki] = scores[wiki] - 1
    print(scores)
    preview()
while True:
    preview()
    root = Tk() 
    root.geometry('100x100')
    up = Button(root, text = 'Upvote', bd = '5', command = upvote) 
    down = Button(root, text = 'Downvote', bd = '5', command = downvote) 
    no = Button(root, text = 'Skip', bd = '5', command = preview) 
    up.pack()
    down.pack()
    no.pack()
    root.mainloop()