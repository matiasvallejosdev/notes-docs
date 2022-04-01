def area_triangulo(base,altura):
    return (base * altura) / 2

triangulo1 = area_triangulo(5,87)
triangulo2 = area_triangulo(9,6)

print(str(triangulo1) + "\n" + str(triangulo2))

print("Lambda!! >>")
area_triangle = lambda base,altura: (base*altura)/2
print(area_triangle(9,4))

al_cubo= lambda num,exp: num**exp
print(al_cubo(2,4))