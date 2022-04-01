"""
Dada un string de palabras devolver el numero de veces que 
se repite cada palabra.
"""

from torch import norm_except_dim


s = "Hello World. Hello, my name is Matias!. My favorite car's name is Matias, but the name original is World!"

bad_character = ('*', '!', '.', ':', ';', ',')

def normalize(word: str):
    word_norm = word.lower()
    word_norm = word_norm.strip("".join(bad_character))
    # for elem in bad_character:
    #     word_norm = word_norm.replace(elem, '')
    return word_norm

def wordRepetition(txt: str):
    words = txt.split(' ')
    words_normalized = list(map(normalize, words))
    
    dic = {}
    for elem in words_normalized:
        if elem in dic:
            dic[elem] += 1
        else:
            dic[elem] = 1
    
    return dic