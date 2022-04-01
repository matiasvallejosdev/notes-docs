# MANEJO DE ARCHIVOS, Tools from streams
from io import open

# APERTURA Y ESCRITURA
archivo_txt = open("archivo_prueba.txt","w")
i = 0
text=""
while i < 5:
    i+=1 
    text = "El dia de la semana es: " + str(i)
    archivo_txt.write(text+'\n')

archivo_txt.close()
# APERTURA Y LECTURA
archivo_txt = open("archivo_prueba.txt","r")
lineas=""
i = 0
lens=5
while i < lens:
    lineas=archivo_txt.readline()
    if len(lineas) != 0:
        print(lineas)
    i+=1
archivo_txt.close()