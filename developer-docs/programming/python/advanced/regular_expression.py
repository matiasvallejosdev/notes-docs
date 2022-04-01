import re
cadena = "Vamos a aprender expresiones regulares"
text_find="m"
if re.search(text_find, cadena) is not None:
    print("El texto se ha encontrado!")
    print(len(re.findall(text_find, cadena)))
else:
    print("El texto no existe!")

list_names=[
    'Ana Gomez',
    'Matias Vallejos',
    'Matias Alejedro',
    'Matias Sanchez',
    'Matias Funes',
    'Martin Apostolo',
    'Olga Meyer',
    'Amilcar Apostolo'
]
print(">>")
for e in list_names:
    if re.findall('Matias', e):
        print(e)
print(">>")
for e in list_names:
    if re.findall('Funes$', e):
        print(e)

print("Dominios!")
list_domain=[
    'http://pidorasinformaticas.es',
    'ftp://pidorasinformaticas.es',
    'http://pidorasinformaticas.com',
    'ftp://pidorasinformaticas.com',
]
for e in list_domain:
    if re.findall('ftp', e):
        print(e)

print("Rangos!")
list_articulos=[
    'MA-1',
    'SE-1',
    'BA-1',
    'MA-2',
    'MA/3',
    'VA-1',
    'VA-2',
    'MA-4',
    'MA-5',
    'MA-6',
    'MA-A',
    'MA-C',
]
for e in list_articulos:
    if re.findall('MA[-/][0-3A-C]',e):
        print(e)
print("Funtion Match!")
match = 0
for e in list_names:
    if re.match(".a",e,re.IGNORECASE):
        match += 1
        if match == 1:
            print("Hemos encontrado los siguientes nombres:")
        print(e, end=" ")
print("Funtion Search!")
match = 0
for e in list_names:
    if re.search("apostol.$",e,re.IGNORECASE):
        match += 1
        if match == 1:
            print("Hemos encontrado los siguientes apellidos:")
        print(e, end=" ")