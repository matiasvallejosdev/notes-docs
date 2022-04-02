# Flutter

Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.

## Useful links

- [Flutter Docs](https://docs.flutter.dev/)
- [Dart Docs](https://dart.dev/guides)
- [Flutter for react native dev](https://docs.flutter.dev/get-started/flutter-for/react-native-devs)
  
## Directory guides

- [Flutter](#flutter)
  - [Useful links](#useful-links)
  - [Directory guides](#directory-guides)
  - [Dart](#dart)
    - [Basic Syntax](#basic-syntax)
    - [Hot reload](#hot-reload)

## Dart

**Caracteristicas Principales:**

- AOT (Ahead of time) Compilation fast to native code.
- JIT (Just in time) Compilation to a really fast application using hot-reload.
- Make great animations in 60fps.
- Compilation in native code.
- Delete XML or separeted interfaces.


### Basic Syntax

[The Dart Language](https://www.toptal.com/dart/dartlang-guide-for-csharp-java-devs#:~:text=It%20runs%20on%20everything%2C%20and,so%20it's%20quick%20to%20learn.)

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

### Hot reload

Flutter’s hot reload feature helps you quickly and easily experiment, build UIs, add features, and fix bugs. Hot reload works by injecting updated source code files into the running Dart Virtual Machine (VM). After the VM updates classes with the new versions of fields and functions, the Flutter framework automatically rebuilds the widget tree, allowing you to quickly view the effects of your changes.





