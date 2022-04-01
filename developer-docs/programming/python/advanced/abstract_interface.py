from abc import abstractclassmethod, ABCMeta
import json
import random as r

class IPerson(metaclass=ABCMeta):
    @abstractclassmethod
    def get_name():
        """You can get person name"""

class Student(IPerson):
    def __init__(self, name, age, college):
        self.name = name
        self.age = age
        self.college = college
        self.type = "Student"
    
    def __str__(self) -> str:
        return f"{self.type.capitalize()} {self.name}"
    
    def __repr__(self) -> str:
        return f"{self.name} ({self.age}, {self.college})"
    
    def get_name(self):
        return self.name
    
class Teacher(IPerson):
    def __init__(self, name, age, college):
        self.name = name
        self.age = age
        self.college = college
        self.type = "Teacher"
    
    def __str__(self) -> str:
        return f"{self.type.capitalize()} {self.name}"
    
    def __repr__(self) -> str:
        return f"{self.name} ({self.age}, {self.college})"
    
    def get_name(self):
        return self.name

class PersonFactory:
    @staticmethod
    def build_person(person_type, name, age, college):
        if person_type == "Student":
            return Student(name,age,college)
        elif person_type == "Teacher":
            return Teacher(name,age,college)
        else:
            print("Invalid type of Person")
            return -1

st = []
     
def get_persons():
    with open('persons.json', 'r') as file:
        students = json.load(file)
    return students

def create_students(types, students):
    res = []
    for k,e in students.items():
        i = r.randint(0,len(types)-1)
        person = PersonFactory.build_person(types[i], e['name'], e['age'], e['college'])
        res.append(person)
    return res

