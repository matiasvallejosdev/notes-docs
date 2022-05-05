
from ntpath import join


a = "abcd"
b = "aaaa"
c = "aaabbb"
d = None
e = ""

def remove_duplicates(txt: str):
    if txt == None:
        return ""
    return "".join(list(set(list(txt))))