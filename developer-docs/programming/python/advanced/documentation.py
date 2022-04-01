import doctest
import math

class areas:
    """Calcula las areas de las figuras geometricas"""
    def area_cuadrado(self,lado):
        """Calculo el area de un cuadrado pasando como parametro al lado"""
        return "El area del cuadrado es: " + str(lado*lado)
    def area_triangulo(self,base,altura):
        """Calculo el area de un triangulo pasando como parametro la base y la altura"""
        return "El area del traingulo es: " + str((base*altura)/2)
    def area_circulo(self,radio):
        """Calculo el area de un circulo sabiendo el radio del mismo
        >>> area.area_circulo(0.5)
        'El area del circulo es: 0.785'
        >>> area.area_circulo(10)
        'El area del circulo es: 314.0'
        """
        pi = 3.14
        c = radio**2
        return "El area del circulo es: " + str(pi*c)
class math_op:
    def raiz_cuadrada(self,listNumbers):
            """ La funcion devuelve una lista con la raiz cuadrada
            de los elementos numericos pasados por parametros de otra lista 
            >>> op = math_op()
            >>> lst_num=[4,9,16]
            >>> op.raiz_cuadrada(lst_num)
            [2.0, 3.0, 4.0]

            >>> lst_num=[]
            >>> for n in [4,-9,16,-456,43,23]:
            ...     lst_num.append(n)
            >>> op.raiz_cuadrada(lst_num)
            Traceback (most recent call last):
            ...
            ValueError: math domain error


            """
            return [math.sqrt(n) for n in listNumbers]

def email_test(adress):
    """Test the correct email received for the user
    >>> email_test('mati@outlook.com')
    True
    >>> email_test('mati.outlook.es@')
    False
    >>> email_test('mati.outlook.es')
    False
    >>> email_test('mati@outlook@.es')
    False
    """
    arroba=adress.count('@')
    if arroba != 1 or adress.rfind('@')==(len(adress)-1) or adress.find('@')== 0:
        return False
    else:
        return True


# using CLASS AREA
area = areas()
op = math_op()
print(area.area_triangulo(2,4))
print(area.area_circulo(0.5))
print(op.raiz_cuadrada([9,16,25,36,64]))
# DOCUMENTACION EN PANTALLA
# Print __doc__ de una funcion o metodo 
print(areas.area_cuadrado.__doc__)
# Print help de una clase, un metodo o una funcion
help(areas.area_triangulo)
#help(areas)
# Print and test doc with doctest library
doctest.testmod()