from tkinter import messagebox
import sqlite3
class dataBase():
    def __init__(self, name_DB):
        self.db=name_DB
        super().__init__()
    # CONEXION A LA DB
    def connect(self):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            miCursor.execute('''
            CREATE TABLE USUARIOS (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Nombre_Usuario VARCHAR(50) UNIQUE, 
                Password VARCHAR(50), 
                Nombre_Completo VARCHAR(40),
                Direccion VARCHAR(50),
                Telefono INTEGER(25))
                ''')
            messagebox.showinfo("Excelente!","Base de datos creada con exito! Continuando con la ejecucion del programa")
        except sqlite3.OperationalError:
            print("sqlite3.OperationalError: table USUARIOS already exists")
            messagebox.showwarning("Atencion! SQLITE3.OperationalError","La base de datos USUARIOS ya existe, y continua la ejecucion del programa")
        finally:
            conn.commit()
            conn.close()
    # INSERTANDO DATOS
    def insert_user(self,i,user,password,name,adress,phone):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            lista_usuarios=[]
            insert=i
            if insert==False:
                nombre_usuario= user
                Password=password
                Nombre_Completo=name
                Direcccion=adress
                Telefono=phone
                user=(nombre_usuario,Password,Nombre_Completo,Direcccion,Telefono)
                lista_usuarios.append(user)
            else:
                while insert:
                    #codigoProducto=input("Ingrese el codigo del articulo (Maximo 5 caracteres): ")
                    nombre_usuario=input("Ingrese el nombre del usuario: ")
                    Password=input("Ingrese la contrasena del usuario: ")
                    Nombre_Completo=input("Ingrese el nombre completo del usuario: ")
                    Direcccion=input("Ingrese la direccion donde vive el usuario: ")
                    Telefono=int(input("Ingrese el telefono del usuario: "))
                    user=(nombre_usuario,Password,Nombre_Completo,Direcccion,Telefono)
                    lista_usuarios.append(user)
                    aux=str(input("Desea anadir un nuevo usuario? Introduzca.. (SI/NO) >> "))
                    if aux == "si":
                        print("Continuando con la carga de productos.. ")
                    else:
                        print("Fin de la carga de el/los usuarios")
                        insert=False
            miCursor.executemany("INSERT INTO USUARIOS VALUES (null,?,?,?,?,?)", lista_usuarios)
            messagebox.showinfo("Excelent!", "Data was added succesful!")
        except:
            messagebox.showerror("Error al cargar!","Ha ocurrido un error con la carga del nuevo usuario! \nVerifique la informacion y vuelva a intentarlo" )
        finally:
            print("...")
            conn.commit()
            conn.close()
    # LEYENDO LOS DATOS
    def read_user(self,user,password):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            info_user=[]
            u = user
            p = password
            miCursor.execute("SELECT * FROM USUARIOS WHERE Nombre_Usuario='"+u+"' AND Password='"+p+"'")
            info_user=miCursor.fetchall()
            cont=len(info_user)
            if cont==0:
                messagebox.showwarning("Atention!","No se ha encontrado el usuario solicitado, verifique los datos ingresados y vuelva a intentarlo!")
                return info_user
            else:
                messagebox.showinfo("Read succesful!","La lectura del usuario ingresado se a llevado a cabo con exito!")
                return info_user
        except:
            messagebox.showerror("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # ACTUALIZAR el usuario
    def update_user(self,user,password,new_user):
        try:
            conn=sqlite3.connect("practica_DB")
            miCursor=conn.cursor()
            u = user
            p = password
            n = new_user
            miCursor.execute("UPDATE USUARIOS SET Nombre_Usuario='"+n+"' WHERE Nombre_Usuario='"+u+"' AND Password='"+p+"'")
        except:
            print("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # ACTUALIZAR la contrasena
    def update_pass(self,user,password,new_pass):
        try:
            conn=sqlite3.connect("practica_DB")
            miCursor=conn.cursor()
            u = user
            p = password
            n = new_pass
            miCursor.execute("UPDATE USUARIOS SET Password='"+n+"' WHERE Nombre_Usuario='"+u+"' AND Password='"+p+"'")
        except:
            print("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # ACTUALIZAR los otros datos
    def update_dataUser(self,idu,new_name,new_adress,new_phone):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            data = new_name,new_adress,str(new_phone)
            id_user=str(idu)
            miCursor.execute("UPDATE USUARIOS SET Nombre_Completo=?, Direccion=?, Telefono=? WHERE Id='"+id_user+"'", data)
            messagebox.showinfo("Update succesful!","El programa la informa al usuario numero " +str(id_user)+ " que sus datos fueron actualizados correctamente! ")
        except:
            messagebox.showerror("Error detected!","Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # ELIMINAR usuarios
    def delete_user(self,user,password, id_u):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            u = user
            p = password
            id_user = str(id_u)
            miCursor.execute("DELETE FROM USUARIOS WHERE Nombre_Usuario='"+u+"' AND Password='"+p+"' AND Id='"+id_user+"' ")
            messagebox.showinfo("Delete succesful!","La eliminacion del usuario ingresado se a llevado a cabo con exito!")  
        except:
            messagebox.showwarning("Atention!","No se ha encontrado el usuario solicitado, verifique los datos ingresados y vuelva a intentarlo!")
            messagebox.showerror("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # COUNT por usuarios
    def count(self):
        try:
            conn=sqlite3.connect(self.db)
            miCursor=conn.cursor()
            miCursor.execute("SELECT COUNT (*) FROM USUARIOS")
            resultado = miCursor.fetchone()[0]
            return resultado
        except:
            messagebox.showerror("","Error al intentar acceder a la base de datos!")
        finally:
            conn.commit()
            conn.close()