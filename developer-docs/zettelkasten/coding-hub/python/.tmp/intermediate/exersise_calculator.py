#CALCULADORA
import operator
import math

print("Bienvenido a la calculadora!")
print(">>>>>>>>>>>>>>>>>>>")
print("En esta seccion usted podra sumar, restar, dividir, multiplicar y sacar el exponente de cada numero")
print(">>>>>>>>>>>>>>>>>>>")

programLimit = 21
i = 0
listaNumeros = []
resultados = []
aux = 0
opcion = 0

def operacion(op):
    res = 0
    string_op=""
    if op == 1:
        contador = 0
        string_op = ""
        for num in listaNumeros:
            if contador == 0:
                res = num
                string_op = str(num)
                contador+=1
            else:
                res += num
                string_op += " + " + str(num) 
        print("La operacion a realizar es..    " + string_op)
        print("Su resultado total de la suma es:  " + str(res))
    elif op == 2:
        contador = 0
        string_op = ""
        for num in listaNumeros:
            if contador == 0:
                res = num
                string_op = str(num)
                contador+=1
            else:
                res -= num
                string_op += " - " + str(num) 
        print("La operacion a realizar es..    " + string_op)
        print("Su resultado total de la resta es:  " + str(res))
    elif op == 3:
        contador = 0
        string_op = ""
        for num in listaNumeros:
            if contador == 0:
                res = num
                string_op = str(num)
                contador+=1
            else:
                res *= num
                string_op += " * " + str(num) 
        print("La operacion a realizar es..    " + string_op)
        print("Su resultado total de la multiplicacion es:  " + str(res))
    elif op == 4:
        try:
            contador = 0
            string_op = ""
            for num in listaNumeros:
                if contador == 0:
                    res = num
                    string_op = str(num)
                    contador+=1
                else:
                    res //= num
                    string_op += " // " + str(num) 
            print("La operacion a realizar es..    " + string_op)
            print("Su resultado total de la division entera es:  " + str(res))
        except ZeroDivisionError:
            print("No se puede dividir un numero por 0!")
            print("Atencion error detectado->")
            print("Error!")
            print("ZeroDivisionError: division by zero")
            repeatC()
    elif op == 5:
        try:
            contador = 0
            string_op = ""
            for num in listaNumeros:
                if contador == 0:
                    res = num
                    string_op = str(num)
                    contador+=1
                else:
                    res /= num
                    string_op += " / " + str(num) 
            print("La operacion a realizar es..    " + string_op)
            print("Su resultado total de la division decimal es:  " + str(res))
        except ZeroDivisionError:
            print("No se puede dividir un numero por 0!")
            print("Atencion error detectado->")
            print("Error!")
            print("ZeroDivisionError: division by zero")
            repeatC()
    elif op == 6:
        contador = 0
        string_op = ""
        for num in listaNumeros:
            if contador == 0:
                res = math.sqrt(num)
                string_op = str(num)
                contador+=1
        print("La operacion a realizar es la raiz del primer numero ingresado..    " + string_op)
        print("Su resultado total de la raiz cuadrada es:  " + str(res))
    resultados.append(string_op + " = " + str(res))
    repeatC()

def inicializando(cantidad):
    i = 0
    error = 0
    while i < cantidad:
        try:
            i+=1
            listaNumeros.append(int(input("Ingrese el numero " + str(i) + ":  ")))
        except ValueError:
            i-=1
            error+=1
            print("Atencion error detectado->")
            print("Tienes que introducir un numero entero")
            print("Vuelva a introducir los datos")
            if error==3:
                repeatC()
                break
    


def calculadora():
    print("Seleccione la opcion a utilizar")
    print("1-   SUMA '+'\n2-   RESTA '-'\n3-   MULTIPLICACION 'x'\n4-   DIVISION ENTERA '//'\n5-   DIVISION DECIMAL '/'\n6-   RAIZ CUADRADA (Un solo numero) '-/'")
    opcion=int(input("Ingrese aqui el numero de la opcion deseada..   "))
    aux = int(input("Cuantos numeros involucra la operacion que deseas realizar?..  "))
    listaNumeros = []
    inicializando(aux)    
    operacion(opcion)

def repeatC():
        listaNumeros.clear()
        print(">>>>>>>>>>>> OPERACION EXITOSA >>>>>>>>>>>>")        
        print("Usted desea realizar una nueva opeacion?   ...")
        print("1-   SI! \n2-   NO, GRACIAS! ")
        num=int(input("Introduzca el numero para continuar..  "))
        if num == 1:
            print(">>>>>>>>>>>>>>>>>>>\n>>>>>>>>>>>>>>>>>>>")
            calculadora()
        else: 
            print(">>>>>>>>>>>>>>>>>>>\n>>>>>>>>>>>>>>>>>>>")
            print("MUCHAS GRACIAS POR UTILIZAR ESTE SISTEMA DE CALCULADORA DIGITAL!")
            print(">>>>>>>>>>>>>>>>>>>\n>>>>>>>>>>>>>>>>>>>")
            print("Estos fueron los resultados! .. ")
            i = 1
            for res in resultados:                
                print("#" + str(i) + "- " + res, end=" | " )
                i+=1


# Calculadora!! 
calculadora()