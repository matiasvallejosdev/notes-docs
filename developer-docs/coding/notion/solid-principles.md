# Solid Principles

Solid principles was created by the [Martin Fowler](https://en.wikipedia.org/wiki/Martin_Fowler) in his [book](https://www.amazon.com/dp/B00BXQXZ6E). They are a set of principles that are used to develop software. It's a kind of guide that is used to develop software.

**Useful links**

[Solid by Leiva](https://1drv.ms/b/s!AjfC66Iabtcp0F6V4DNDBtO4kLDm)

## Guide

- [Solid Principles](#solid-principles)
  - [Guide](#guide)
  - [Single responsability principle](#single-responsability-principle)
  - [Open / Closed](#open--closed)
  - [Liskov Substitution Principle](#liskov-substitution-principle)
  - [Interface Segregations](#interface-segregations)
  - [Inverted Dependencies](#inverted-dependencies)

## Single responsability principle

Only one thing. It could be better for testing less changes.

```python
class UserRegistry:
    def __init__(self):
        self.users = []
    
    def add_user(self, user):
        self.users.append(user)
    
    def get_user(self, user_id):
        return self.users[user_id]
    
    def set_password(self, user_id, password):
        password_encoder = PasswordEncoder().encode(password)
        self.users[user_id].password = password_encoder

# Static class that separates the logic of encoding and decoding passwords
class PasswordEncoder:
    @staticmethod
    def encode(password):
        return password
```

## Open / Closed

It's a principle developed Bertrard Mayer. Open to extensions and closed to changes. It's  useful use polimorfiism.

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class AreaCalculator:
    def __init__(self):
        self.rectangles = []
    
    def add_rectangle(self, rectangle):
        self.rectangles.append(rectangle)
    
    def calculate_area(self):
        return sum([rectangle.area() for rectangle in self.rectangles])
```

## Liskov Substitution Principle

It's a principle developed Barbara Liskov. Class father can be used in class daughter. It's refer in herence with interfaces. Methods can preserve the original behavior.

**class: T Father** >inherence> **class: S Daughter**

One class that inherince for class T should be able every object S with success.

## Interface Segregations

Redesign interfaces when they avoids null methods. It's better to get smaller an individual interfaces. It prevent fat interfaces.

## Inverted Dependencies

The most important principle of programming. High module hasn't dependece with low level module. Interfaces are created in order to supply this inversion.