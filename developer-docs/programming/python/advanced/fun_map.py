# CLASES, MAP Y LAMBDA
class employee:
    def __init__(self,name,job,salary):
        super().__init__()
        self.name = name
        self.job = job
        self.salaray= salary
    def __str__(self):
        return "{} que trabaja como {} con un salario de {} $".format(self.name,self.job,self.salaray)

list_employee = [
employee("Juan", "CEO", 10000),
employee("Emanuel", "Cadete", 1500),
employee("Matias", "Programador", 3400),
employee("Abelardo", "Futbolista", 6500),
employee("Olga", "Profesora", 1200),
employee("Amilcar", "Turismo", 1700),
employee("Noeli", "Abogada", 2150),
]

def comisiones(employee):
    if employee.salaray <=3000:
        employee.salaray = employee.salaray * 1.04
    return employee

listEmplados_comision=map(comisiones,list_employee)
for e in listEmplados_comision:
    print(e)

