
s = "Hello world!"

def replace_all_spaces(a: str):
    norm_txt = a.strip()
    return norm_txt.replace(' ', '%20')