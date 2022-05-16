import sqlite3
# CREANDO TABLAS
def create_productos():
    conn=sqlite3.connect("SecondDB")
    miCursor=conn.cursor()
    miCursor.execute('''
    CREATE TABLE PRODUCTOS (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Nombre_Articulo VARCHAR(50), 
        Precio INTEGER, 
        Categoria VARCHAR(20))
        ''')
    conn.commit()
    conn.close()
# INSERTANDO DATOS
def insert_productos(i):
    conn=sqlite3.connect("SecondDB")
    miCursor=conn.cursor()
    lista_productos=[]
    insert=i
    while insert:
        #codigoProducto=input("Ingrese el codigo del articulo (Maximo 5 caracteres): ")
        nombreProducto=input("Ingrese el nombre del articulo: ")
        precioProducto=int(input("Ingrese el precio del articulo: "))
        categoriaProducto=input("Ingrese la categoria del articulo: ")
        producto=(nombreProducto,precioProducto,categoriaProducto)
        lista_productos.append(producto)
        aux=str(input("Desea realizar otra operacion? introduzca la opcion correcta (SI/NO) >> "))
        if aux == "si":
            print("Continuando con la carga de productos.. ")
        else:
            print("Fin de la carga de productos")
            insert=False
    miCursor.executemany("INSERT INTO PRODUCTOS VALUES (null,?,?,?)", lista_productos)
    conn.commit()
    conn.close()
# LEYENDO LOS DATOS
def read_productos():
    conn=sqlite3.connect("SecondDB")
    miCursor=conn.cursor()
    lista_db=[]
    aux=input("Ver productos con precio menores a >> ")
    miCursor.execute("SELECT * FROM PRODUCTOS WHERE Precio<="+aux+"")
    lista_db=miCursor.fetchall()
    conn.commit()
    conn.close()
    for p in lista_db:
        for e in p:
            print("- " + str(e))
# ACTUALIZAR LOS DATOS
def update_productos():
    conn=sqlite3.connect("SecondDB")
    miCursor=conn.cursor()
    aux = input("Introduzca el numero del producto que desea realizar un cambio de precio >> ")
    precio= input("El nuevo precio del articulo es... ")
    miCursor.execute("UPDATE PRODUCTOS SET Precio="+precio+" WHERE Id="+aux+"")
    conn.commit()
    conn.close()

#create_productos()
insert_productos(False)
update_productos()
read_productos()