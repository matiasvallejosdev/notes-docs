def divide():
    try: 
        op1=(float(input("Introduce el primer numero :  ")))
        op2=(float(input("Introduce el segundo numero :  ")))

        print("La division de " + str(op1) + " / " + str(op2) + " tiene como resultado.. " + str(op1/op2))
    except ValueError:
        print("El valor no es correcto!")
        print("Vuelve a intentarlo")
        print(str(ValueError))
        divide()
    except ZeroDivisionError:
        print("No se puede realizar una division por 0")
        print("Vuelva a intentarlo")
        print(str(ZeroDivisionError))
        divide()
    finally:
        print("<<<<<<<<<< FIN DE LA OPERACION >>>>>>>>>>")
        print("Desea realizar otra operacion?.. ")
        num=int(input("Seleccione el numero de la opcion 1- SI // 2- NO ..   "))
        if num == 1:
            print(">>>>>>>>>>>>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>>>>>>>>>>>")
            divide()                 
divide()