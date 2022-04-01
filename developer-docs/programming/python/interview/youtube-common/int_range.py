"""
Imprimir un rango del 1 al 15.
Para ese rango si es multiplo de 3 -> print('FIZZ') sino el numero
y para los multiplos de 5 -> print('BUZZ')
Para numeros cuales son multiplos entre 3 y 5 -> print('FizzBuzz)
"""

def numberFizzBuzz(arr):
    # 1. Delete duplicates
    arr = list(set(arr))
    # 2. Multiplos
    for i in range(0, len(arr)):
        m_3 = arr[i] % 3
        m_5 = arr[i] % 5
        if m_3 == 0 and m_5 == 0:
            print('Fizz and Buzz')
            break
        elif m_3 == 0:
            print('Fizz')
        elif m_5 == 0:
            print('Bizz')
        else:
            print('{}'.format(arr[i]))
    

arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
numberFizzBuzz(arr)
    
