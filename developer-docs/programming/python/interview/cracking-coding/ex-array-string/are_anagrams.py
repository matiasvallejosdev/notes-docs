
a = "listen"
b = "silent"
c = "nothing"

def are_anagrams(a:str, b:str):
    if sorted(a) == sorted(b):
        return True
    return False