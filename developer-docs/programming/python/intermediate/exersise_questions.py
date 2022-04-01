# EJERCICIO
# Diccionarios
print('Ejercicio de preguntas y respuestas automaticas segun los datos ingresados')
# Defino variables
dicAmerica = {"Argentina":"Buenos Aires", "Brasil":"Brasilia", "Antigua y Barbuda" : "Saint John's", "Bahamas"	: "Nasáu", "Barbados" : "Bridgetown", "Belice" : "Belmopán", "Bolivia" : "Sucre", "Canadá" : "Ottawa", "Chile" : "Santiago de Chile", "Colombia" : "Bogotá", "Costa Rica" : "San José", "Cuba" : "La Habana", "Dominica" : "Roseau", "Ecuador" : "Quito", "El Salvador" : "San Salvador", "Estados Unidos" : "Washington D. C.", "Granada" : "Saint George", "Guatemala" : "Ciudad de Guatemala", "Guyana" : "Georgetown", "Haití" : "Puerto Príncipe", "Honduras" : "Tegucigalpa" , "Jamaica" : "Kingston", "México" : "Ciudad de México", "Nicaragua" : "Managua", "Panamá" : "Panamá", "Paraguay" : "Asunción", "Perú" : "Lima", "República Dominicana" : "Santo Domingo", "San Cristóbal y Nieves" : "Basseterre", "San Vicente y las Granadinas" : "Kingstown", "Santa Lucía" : "Castries", "Surinam" : "Paramaribo", "Trinidad y Tobago" : "Puerto España", "Uruguay" : "Montevideo", "Venezuela" : "Caracas"}
dicOceania = {"",}
dicAsia = {"",}
dicAfrica = {"",}
i = 1
name = ""
edad = 0
continente = ""
country = ""

# Defino funciones
def datosPersonales():
    print("What is your name?")
    name = input()
    print("Hello " + name)
    
    print("How old are you?")
    edad = input()
    print("Tu edad es de: " + edad)
    if int(edad) >= 18:
        print("You are of legal age")
    else:
        print("You are a minor")
datosPersonales()

def america():
    print("What is your country?")
    country= input()
    def find(nac, dic):
        return nac in dic
    auxBool = find(country, dicAmerica)
    if auxBool == True:
        #
        print("La capital de " + country + " es: " + dicAmerica[country])
    else:
        #
        print("No se encontro la capital de tu pais")
def oceania():
    print("What is your country?")
    country= input()
    def find(nac, dic):
        return nac in dic
    auxBool = find(country, dicOceania)
    if auxBool == True:
        #
        print("La capital de " + country + " es: " + dicOceania[country])
    else:
        #
        print("No se encontro la capital de tu pais")
def asia():
    print("What is your country?")
    country= input()
    def find(nac, dic):
        return nac in dic
    auxBool = find(country, dicAsia)
    if auxBool == True:
        #
        print("La capital de " + country + " es: " + dicAsia[country])
    else:
        #
        print("No se encontro la capital de tu pais")
def africa():
    print("What is your country?")
    country= input()
    def find(nac, dic):
        return nac in dic
    auxBool = find(country, dicAfrica)
    if auxBool == True:
        #
        print("La capital de " + country + " es: " + dicAfrica[country])
    else:
        #
        print("No se encontro la capital de tu pais")

def origen():
    print("What is your continet?")
    continente=input()
    continente=continente.lower()

    if continente == "america":
        #America establecido
        america()
    elif continente == "oceania":
        #Oceania establecido
        oceania()
    elif continente == "asia":
        #Asia establecido
        asia()
    elif continente == "africa":
        #Africa establecido
        africa()
    else:
        print("El continete ingresado es incorrecto")
        print("Por favor vuelva a ingresar uno valido")
        print("What is your continet?")
        continente=input()
        continente=continente.lower()
        origen()
origen()

opcion = True
def opciones():
    print("Que quieres hacer " + name + "? .."+ " Talvez podrias preguntarme algo.")
    print("Seleccione una opcion: \n Opcion 1: Cantidad de habitantes \n Opcion 2: Informacion sobre el pais \n Opcion 3: Moneda \n Opcion 4: Cuando fue fundado el pais?")
    num=input()
    print("Usted selecciono la opcion " + num + ".. Es correcto? (SI/NO)")
    a = input()
    if a.lower() == "si":
        opcion = True
        # find
        if num == "1":
            #BUSCAR OPCION UNO DEL PAIS INGRESADO
            print("Estamos buscando la informacion requerida sobre el pais ingresado.. Por favor espere un momento")
        elif num == "2":
            #BUSCAR OPCION DOS DEL PAIS INGRESADO
            print("Estamos buscando la informacion requerida sobre el pais ingresado.. Por favor espere un momento")
        elif num == "3":
            #BUSCAR OPCION TRES DEL PAIS INGRESADO
            print("Estamos buscando la informacion requerida sobre el pais ingresado.. Por favor espere un momento")
        elif num == "4":
            #BUSCAR OPCION CUATRO DEL PAIS INGRESADO
            print("Estamos buscando la informacion requerida sobre el pais ingresado.. Por favor espere un momento")
        else:
            print("Opcion fuera de rango por favor vuelva a ingresar el numero de la opcion requerida")
            opciones()
    else:
        opcion = False
        opciones()
opciones()