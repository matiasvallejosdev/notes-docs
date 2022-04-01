def num_even(num):
    if num%2 == 0:
        return True

numeros=[17,24,3,4,8,42,65,43,21,30]
print(list(filter(num_even,numeros)))
# LAMBDA Y FILTER
# >>>>
numero_par=lambda num: num%2==0
print(list(filter(numero_par,numeros)))

# CLASES, FILTER Y LAMBDA
class employee:
    def __init__(self,name,job,salary):
        super().__init__()
        self.name = name
        self.job = job
        self.salaray= salary
    def __str__(self):
        return "{} que trabaja como {} con un salario de {} $".format(self.name,self.job,self.salaray)

list_employee = [
employee("Juan", "CEO", 100000),
employee("Emanuel", "Cadete", 55000),
employee("Matias", "Programador", 70000),
employee("Abelardo", "Futbolista", 150000),
employee("Olga", "Profesora", 65000),
employee("Amilcar", "Turismo", 80000),
employee("Noeli", "Abogada", 175000),
]

salarios = filter(lambda employee:employee.salaray>100000,list_employee)
for e in salarios:
    print(e)

