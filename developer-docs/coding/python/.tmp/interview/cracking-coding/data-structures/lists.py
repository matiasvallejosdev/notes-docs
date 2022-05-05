
PATH_FILE = r"D:\Acer Hard Disk\MATIAS A. VALLEJOS\Learn\Bootcamps\Youtube\Code\cracking-coding\string.txt"

txt = str()
with open(PATH_FILE, 'r') as f:
    txt = f.read()

lst = txt.split(' ')

f = lambda x: x**2

def upper_list(items: list):
    for i in range(0,len(items)):
        items[i] = str(items[i]).upper() 
    return items

def capitalize_list(items: list):
    for i in range(0,len(items)):
        items[i] = str(items[i]).capitalize() 
    return items
