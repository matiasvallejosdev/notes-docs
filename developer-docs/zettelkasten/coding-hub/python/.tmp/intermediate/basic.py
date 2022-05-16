print ('Hola mundo')
print ('Aguante python lpm')
#Comentarios #PYTHON LOVE
#PARTE 1
print('Parte 1')
mi_nombre = "Matias"
edad = 17
print('Nombre: ' + mi_nombre )
a = 0
for i in range (3):
    a+=1
    print(a)
#PARTE 2
# Operadores
print('Parte 2')
a = 10
b = 3
# RESTO DE DIVISION
print(a%b)
# EXPONENTES
print(a**2)
# DIVISION
print(a/3)
# DIVISION ENTERA
print(a//3)
# EL CONTENIDO DEFINEN LAS VARIABLES
Name = "string variable"
type(Name)
Name = 5
type(Name)
Name = 5.5
type(Name)
# CONDITIONAL IF
numero1 = 5
numero2 = 7
if numero1 > numero2:
    print('El numero 1 es mayor')
else:
    print('El numero 2 es mayor')
#PARTE 3
# Funciones
print('Parte 3')

def funcionSuma(a,b):
    return a+b
print(funcionSuma(5,3))
def funcionResta(a,b):
    return a-b
print(funcionResta(5,3))
def funcionMultiplicacion(a,b):
    return a*b
print(funcionMultiplicacion(5,3))
def funcionDivision(a,b):
    return a/b
print(funcionDivision(5,3))
# Listas / Arrays / Vectores
print("My family is: ")
lista = ["Matias", "Noeli", "Emanuel", "Amilcar"]
lista.append("Abelardo")
lista.insert(0, "Olga")
lista.extend(["Teddy"])
print(lista[:])
aux = "Teddy" in lista
if aux == True:
    print("Teddy esta en la familia")

# Listas static
staticLista = ("Hola", "Mundo")
print(staticLista[:])
print(len(staticLista))

# Diccionarios
print('Parte 4')
# Defino variables
dicAmerica = {"Argentina":"Buenos Aires", "Brasil":"Brasilia", "Antigua y Barbuda" : "Saint John's", "Bahamas"	: "Nasáu", "Barbados" : "Bridgetown", "Belice" : "Belmopán", "Bolivia" : "Sucre", "Canadá" : "Ottawa", "Chile" : "Santiago de Chile", "Colombia" : "Bogotá", "Costa Rica" : "San José", "Cuba" : "La Habana", "Dominica" : "Roseau", "Ecuador" : "Quito", "El Salvador" : "San Salvador", "Estados Unidos" : "Washington D. C.", "Granada" : "Saint George", "Guatemala" : "Ciudad de Guatemala", "Guyana" : "Georgetown", "Haití" : "Puerto Príncipe", "Honduras" : "Tegucigalpa" , "Jamaica" : "Kingston", "México" : "Ciudad de México", "Nicaragua" : "Managua", "Panamá" : "Panamá", "Paraguay" : "Asunción", "Perú" : "Lima", "República Dominicana" : "Santo Domingo", "San Cristóbal y Nieves" : "Basseterre", "San Vicente y las Granadinas" : "Kingstown", "Santa Lucía" : "Castries", "Surinam" : "Paramaribo", "Trinidad y Tobago" : "Puerto España", "Uruguay" : "Montevideo", "Venezuela" : "Caracas"}
dicOceania = {"",}
dicAsia = {"",}
dicAfrica = {"",}
