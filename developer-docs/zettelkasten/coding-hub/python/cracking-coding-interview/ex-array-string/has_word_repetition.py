

from pickle import TRUE
from bleach import clean


rep_ex = "Hola mundo!"
no_rep_ex = "Hola.."

bad_character = ('*', '!', '.', ':', ';', ',')

def clean_str(txt: str):
    clean_txt = txt.lower()
    clean_txt = clean_txt.strip("".join(bad_character))
    clean_txt = clean_txt.replace(' ', '')
    return clean_txt

def has_letter_repetition(txt: str) -> bool:
    #dict = {}
    #clean_txt = clean_str(txt)
    #letters = list(clean_txt)
    #
    #for index, elem in enumerate(letters):
    #    if elem not in dict:
    #        dict[elem] = index
    #    else:
    #        return True
    # return False
       
    clean_txt = clean_str(txt)
    clean_txt = list(clean_txt)
    clean_txt.sort()
    
    for i in range(0,len(clean_txt)-1):
        if clean_txt[i] == clean_txt[i+1]:
            return True
    return False