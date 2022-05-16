# Dart

Dart is a programming language that is used to create programs that run on the web. Dart is a general-purpose language that is used to create web apps. Dart is a hot language, and it is used by many companies and organizations.

**Caracteristicas Principales:**

- AOT (Ahead of time) Compilation fast to native code.
- JIT (Just in time) Compilation to a really fast application using hot-reload.
- Make great animations in 60fps.
- Compilation in native code.
- Delete XML or separeted interfaces.

**Useful links:**

- [Dart Docs](https://dart.dev/guides)

## Guide

- [Dart](#dart)
  - [Guide](#guide)
  - [Basic Syntax](#basic-syntax)
  - [Hot reload](#hot-reload)
  - [Final vs Const](#final-vs-const)
    - [Final](#final)
    - [Const](#const)


## Basic Syntax

[The Dart Language](https://dart.dev/guides)

```dart
// Main instruction
void Main()
{
  // Code here
}

// Bucle
for(int i = 0; i < 10; i++)
{
  // Code here
}

// Classes
class Hero
{
    // Code here
}

// Variables
String name;
var spiderman = new Hero();

```

## Hot reload

Flutter’s hot reload feature helps you quickly and easily experiment, build UIs, add features, and fix bugs. Hot reload works by injecting updated source code files into the running Dart Virtual Machine (VM). After the VM updates classes with the new versions of fields and functions, the Flutter framework automatically rebuilds the widget tree, allowing you to quickly view the effects of your changes.

## Final vs Const

### Final 

The **final** keyword in Dart is used to create constants or objects that are immutable in nature. The only difference between the final and const keyword is that final is a runtime-constant, which in turn means that its value can be assigned at runtime instead of the compile-time that we had for the const keyword.

```dart
void main(){
   final int xy = 10;
   print(xy);
}
```

### Const

A variable that is declared using the **const** keyword cannot be assigned any other value. Also, the variable is known as a compile-time constant, which in turn means that its value must be declared while compiling the program.

```dart
void main(){
   const name = "mukul";
   print(name);

   const marsGravity = 3.721;
}
```

