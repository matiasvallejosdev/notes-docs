
from unicodedata import name


class Animal:
    def __init__(self, name, edad):
        self.name = name
        self._edad = edad
    
    def getDescription(self) -> str:
        return f"It's a {self.name}"

class Dog(Animal):
    def __init__(self, name, edad):
        super().__init__(name, edad)
        
    def getDescription(self) -> str:
        print("I am a dog!")
        return super().getDescription()
    
class Cat(Animal):
    def __init__(self, name, edad):
        super().__init__(name, edad)
        
    def getDescription(self) -> str:
        print("I am a cat!")
        return super().getDescription()
    
class Elephant(Animal):
    def __init__(self, name, edad, food):
        super().__init__(name, edad)
        self.food = food