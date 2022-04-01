import sqlite3

class connect_db():
    def __init__(self):
        try:
            conn=sqlite3.connect("practica_DB")
            miCursor=conn.cursor()
            miCursor.execute('''
            CREATE TABLE USUARIOS (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Nombre_Usuario VARCHAR(50), 
                Password VARCHAR(50), 
                Nombre_Completo VARCHAR(40),
                Direccion VARCHAR(50),
                Telefono INTEGER(25))
                ''')
            print("Base de datos creada con exito! Continuando con la ejecucion del programa")
        except sqlite3.OperationalError:
            print("sqlite3.OperationalError: table USUARIOS already exists")
            print("La base de datos USUARIOS ya existe, y continua la ejecucion del programa")
        finally:
            conn.commit()
            conn.close()
    # INSERTANDO DATOS
    def insert_user(self,i,user,password,name,adress,phone):
        try:
            conn=sqlite3.connect("practica_DB")
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
        except:
            print("Ha ocurrido un error con la carga del nuevo usuario! \nVerifique la informacion y vuelva a intentarlo" )
        finally:
            print("...")
            conn.commit()
            conn.close()
    # LEYENDO LOS DATOS
    def read_user(self,user,password):
        try:
            conn=sqlite3.connect("practica_DB")
            miCursor=conn.cursor()
            lista_users=[]
            u = user
            p = password
            miCursor.execute("SELECT * FROM USUARIOS WHERE Nombre_Usuario='"+u+"' AND Password='"+p+"'")
            lista_users=miCursor.fetchall()
            for p in lista_users:
                for e in p:
                    print("- " + str(e))
            cont=len(lista_users)
            if cont==0:
                print("No se ha encontrado el usuario solicitado, verifique los datos ingresados y vuelva a intentarlo!")
            else:
                print("La lectura del usuario ingresado se a llevado a cabo con exito!")
        except:
            print("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
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
    def update_dataUser(self,user,new_name,new_adress,new_phone):
        try:
            conn=sqlite3.connect("practica_DB")
            miCursor=conn.cursor()
            u = user
            n = new_name
            a = new_adress
            p = new_phone
            miCursor.execute("UPDATE USUARIOS SET Nombre_Completo='"+n+"', Direccion='"+a+"', Telefono="+p+" WHERE Nombre_Usuario='"+u+"'")
            print("El programa la informa a " +str(u)+ " que sus datos fueron actualizados correctamente! ")
            conn.commit()
            conn.close()
        except:
            print("Ha ocurrido un error al leer la informacion del usuario ingresado! \nPor favor verifique los datos y vuelva a intentarlo!")
        finally:
            print("...")
            conn.commit()
            conn.close()
    # COUNT por usuarios
    def count(self):
        conn=sqlite3.connect("practica_DB")
        miCursor=conn.cursor()
        miCursor.execute("SELECT COUNT (*) FROM USUARIOS")
        resultado = miCursor.fetchone()[0]
        conn.commit()
        conn.close()
        return resultado

miDb=connect_db()