# Flutter

Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.

## Useful links

- [Flutter Docs](https://docs.flutter.dev/)
- [Dart Docs](https://dart.dev/guides)
- [Flutter for react native dev](https://docs.flutter.dev/get-started/flutter-for/react-native-devs)

## Run Flutter

**Android Stuido Emulator**

1. C:\Users\matia\AppData\Local\Android\Sdk\emulator
2. emulator -list-avds
3. emulator -avd name

  
## Directory guides

- [Flutter](#flutter)
  - [Useful links](#useful-links)
  - [Run Flutter](#run-flutter)
  - [Directory guides](#directory-guides)
  - [Dart](#dart)
    - [Basic Syntax](#basic-syntax)
    - [Hot reload](#hot-reload)
    - [Widgets](#widgets)

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

### Widgets

Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const Center(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```
The runApp() function takes the given Widget and makes it the root of the widget tree. In this example, the widget tree consists of two widgets, the Center widget and its child, the Text widget. The framework forces the root widget to cover the screen, which means the text “Hello, world” ends up centered on screen. The text direction needs to be specified in this instance; when the MaterialApp widget is used, this is taken care of for you, as demonstrated later.

**Flutter comes with a suite of powerful basic widgets, of which the following are commonly used:**

```dart
import 'package:flutter/material.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({required this.title, Key? key}) : super(key: key);

  // Fields in a Widget subclass are always marked "final".

  final Widget title;

  @override
  Widget build(BuildContext context) {
    // Container Widget
    // The Container widget lets you create a rectangular visual element. A container can be decorated with a BoxDecoration, such as a background, a border, or a shadow. A Container can also have margins, padding, and constraints applied to its size. In addition, a Container can be transformed in three dimensional space using a matrix.
    return Container(
      height: 56.0, // in logical pixels
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      decoration: BoxDecoration(color: Colors.blue[500]),  
      // Row Widget and Column Widget
      // These flex widgets let you create flexible layouts in both the horizontal (Row) and vertical (Column) directions. The design of these objects is based on the web’s flexbox layout model.
      // Row is a horizontal, linear layout.
      child: Row(
        // <Widget> is the type of items in the list.
        children: [
          const IconButton(
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
            onPressed: null, // null disables the button
          ),
          // Expanded expands its child
          // to fill the available space.
          Expanded(
            child: title,
          ),
          const IconButton(
            icon: Icon(Icons.search),
            tooltip: 'Search',
            onPressed: null,
          ),
        ],
      ),
    );
  }
}

class MyScaffold extends StatelessWidget {
  const MyScaffold({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Material is a conceptual piece
    // of paper on which the UI appears.
    return Material(
      // Column is a vertical, linear layout.
      child: Column(
        children: [
          // Text Widget
          // The Text widget lets you create a run of styled text within your application.
          MyAppBar(
            title: Text(
              'Example title',
              style: Theme.of(context) //
                  .primaryTextTheme
                  .headline6,
            ),
          ),
          // Expanded Column Widget
          // The Expanded widget allows you to flexibly size its child widget to fill the available space in the parent.
          const Expanded(
            child: Center(
              child: Text('Hello, world!'),
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(
    const MaterialApp(
      title: 'My app', // used by the OS task switcher
      home: SafeArea(
        child: MyScaffold(),
      ),
    ),
  );
}
// Stack Widget
// Instead of being linearly oriented (either horizontally or vertically), a Stack widget lets you place widgets on top of each other in paint order. You can then use the Positioned widget on children of a Stack to position them relative to the top, right, bottom, or left edge of the stack. Stacks are based on the web’s absolute positioning layout model.
```

Many Material Design widgets need to be inside of a MaterialApp to display properly, in order to inherit theme data. Therefore, run the application with a MaterialApp.