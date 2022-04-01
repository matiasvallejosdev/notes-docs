from POOdos import *

class Coche():
    def __init__(self):
        self.largo_Chasis = 250
        self.ancho_Chasis = 120
        self.ruedas = 4
        self.estado_ON_OFF=False

    def __check_component(self):
        print("Realizando chequeo interno")
        self.gasolina="Ok"
        self.aceite="Ok"
        self.puertas="Closed"
        if self.gasolina=="Ok" and self.aceite=="Ok" and self.puertas=="Closed":
            print("Chequeo realizado con exito! Procediendo al encendido.. .. .. .. ..")
            return True
        else: 
            print("Fallo el sistema de arranque, por favor verifique la gasolina, el aceite y si estan correctamente cerradas las puertas")
            return False
    
    def arrancar(self,estado):
        #Arrancar o Apagar
        if estado:
            #Chequeo interno
            check=self.__check_component()
            if check:
                self.estado_ON_OFF=True
                return "El coche esta encendido"
            else:
                self.estado_ON_OFF=False
                return "Uno de los componentes esta fallando, por favor verifique y vuelva a intentarlo.. "
        else:
            self.estado_ON_OFF=False
            return "El coche esta apagado"
    def mover_adelante(self):
        pass
    def mover_atras(self):
        pass
    def doblar_derecha(self):
        pass
    def doblar_izquierda(self):
        pass

miC=Coche()
e = False
print(miC.arrancar(e))
print("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
miC2=Coche()
e = True
print(miC2.arrancar(e))

miBicicleta=bikeElectric("BMW", "VXC2","90 km/h", "1 km/h")
miBicicleta.arrancar(True)
miBicicleta.cargarEnergia(True)
estadoVehiculo(miBicicleta)