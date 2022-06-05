from tkinter import *
from tkinter import messagebox
import bd_sqlite_connect as class_db

# VARIABLES DATABASE
miDB=class_db.dataBase("Users")
# FUNCIONES
def close():
    valor=messagebox.askquestion("Close app", "Do you want close the app?")
    if valor=="yes":
        root.destroy()
def clearFields():
    miId.set(count()+1)
    miUser.set("")
    miPass.set("")
    miName.set("")
    miAdress.set("")
    miPhone.set("549")
def create():
    u = miUser.get()
    w = miPass.get()
    n = miName.get()
    a = miAdress.get()
    p = miPhone.get()
    miDB.insert_user(False,u,w,n,a,p)
    clearFields()
def read():
    user = miUser.get()
    passw = miPass.get()
    lst_info=miDB.read_user(user,passw)
    for u in lst_info:
        miId.set(u[0])
        miUser.set(u[1])
        miPass.set(u[2])
        miName.set(u[3])
        miAdress.set(u[4])
        miPhone.set(u[5])
def update():
    id_u = miId.get()
    n = miName.get()
    a = miAdress.get()
    p = miPhone.get()
    miDB.update_dataUser(id_u,n,a,p)
def delete():
    u = miUser.get()
    p = miPass.get()
    i = miId.get()
    miDB.delete_user(u,p,i)
    clearFields()
def count():
    return miDB.count()
# GRAFICA
root=Tk()
root.title("My first window")
root.resizable(0,0)
root.iconbitmap("Icon.ico")
root.config(cursor="pirate")
# Variables
# Field
miId=IntVar()
miUser=StringVar()
miPass=StringVar()
miName=StringVar()
miAdress=StringVar()
miPhone=IntVar()
#Menu superior
def menuTop():
    menu_Top=Menu(root)
    root.config(menu=menu_Top,width=300,height=300)

    m_bd=Menu(menu_Top, tearoff=0)
    m_bd.add_command(label="Connect DataBase",command=miDB.connect)
    m_bd.add_command(label="Close program",command=close)

    m_borrar=Menu(menu_Top, tearoff=0)
    m_borrar.add_command(label="Delete Fields", command=clearFields)

    m_crud=Menu(menu_Top, tearoff=0)
    m_crud.add_command(label="Create",command=create)
    m_crud.add_command(label="Read",command=read)
    m_crud.add_command(label="Update",command=update)
    m_crud.add_command(label="Delete",command=delete)

    m_help=Menu(menu_Top, tearoff=0)
    m_help.add_command(label="All rights reserved")
    m_help.add_command(label="Help me")

    menu_Top.add_cascade(label="DataBase", menu=m_bd)
    menu_Top.add_cascade(label="Delete fields", menu=m_borrar)
    menu_Top.add_cascade(label="Crud", menu=m_crud)
    menu_Top.add_cascade(label="Help", menu=m_help)
menuTop()
#Campos
def campos():
    # ----------------- text boxes ----------------------- #
    my_frame=Frame(root)
    my_frame.pack()

    cuadroID=Entry(my_frame,textvariable=miId,state="readonly")
    cuadroID.grid(row=0,column=1,padx=10,pady=10)
   
    cuadroUser=Entry(my_frame,textvariable=miUser)
    cuadroUser.grid(row=1,column=1,padx=10,pady=10)
    cuadroUser.config(fg="red")
    
    cuadroPass=Entry(my_frame,textvariable=miPass)
    cuadroPass.grid(row=2,column=1,padx=10,pady=10)
    cuadroPass.config(show="*")
    
    cuadroName=Entry(my_frame,textvariable=miName)
    cuadroName.grid(row=3,column=1,padx=10,pady=10)
    
    cuadroAdress=Entry(my_frame,textvariable=miAdress)
    cuadroAdress.grid(row=4,column=1,padx=10,pady=10)
    cuadroAdress.config(fg="blue")

    cuadroPhone=Entry(my_frame,textvariable=miPhone)
    cuadroPhone.grid(row=5,column=1,padx=10,pady=10)
    miPhone.set("549")

    # ----------------- labels ----------------------- #
    idLabel=Label(my_frame,text="Id:")
    idLabel.grid(row=0,column=0,sticky="e",padx=4,pady=10)

    userLabel=Label(my_frame,text="User:")
    userLabel.grid(row=1,column=0,sticky="e",padx=4,pady=10)

    passLabel=Label(my_frame,text="Password:")
    passLabel.grid(row=2,column=0,sticky="e",padx=4,pady=10)

    nameLabel=Label(my_frame,text="Name:")
    nameLabel.grid(row=3,column=0,sticky="e",padx=4,pady=10)
    
    adressLabel=Label(my_frame,text="Adress:")
    adressLabel.grid(row=4,column=0,sticky="e",padx=4,pady=10)

    phoneLabel=Label(my_frame,text="Phone:")
    phoneLabel.grid(row=5,column=0,sticky="e",padx=4,pady=10)
campos()
def buttons():
    my_frame2=Frame(root)
    my_frame2.pack()

    btn_crear=Button(my_frame2, text="Create",command=create)
    btn_crear.grid(row=1,column=0,sticky="e",padx=10,pady=10)

    btn_leer=Button(my_frame2, text="Read", command=read)
    btn_leer.grid(row=1,column=1,sticky="e",padx=10,pady=10)

    btn_actualizar=Button(my_frame2, text="Update", command=update)
    btn_actualizar.grid(row=1,column=2,sticky="e",padx=10,pady=10)
    
    btn_delete=Button(my_frame2, text="Delete", command=delete)
    btn_delete.grid(row=1,column=3,sticky="e",padx=10,pady=10)
buttons()

root.mainloop()
