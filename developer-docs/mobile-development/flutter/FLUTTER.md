# Flutter

Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.

**Useful links:**

- [Flutter Docs](https://docs.flutter.dev/)
- [Dart Docs](https://dart.dev/guides)
- [Flutter for React Native](https://docs.flutter.dev/get-started/flutter-for/react-native-devs)

## Guide

- [Flutter](#flutter)
  - [Guide](#guide)
  - [Android Stuido Emulator](#android-stuido-emulator)
  - [Widgets](#widgets)
    - [Scaffold](#scaffold)

## Android Stuido Emulator

Android studio emulator is running on port 8081. It's useful for debugging. You can run android studio emulator from command line.

1. C:\Users\matia\AppData\Local\Android\Sdk\emulator
2. emulator -list-avds
3. emulator -avd name

## Widgets

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

### Scaffold

[Scaffold Docs](https://api.flutter.dev/flutter/material/Scaffold-class.html)

Scaffold is a widget that provides Material Design visual layout, scaffolding, and navigation.

```dart
Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sample Code'),
      ),
      body: Center(child: Text('You have pressed the button $_count times.')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++),
        tooltip: 'Increment Counter',
        child: const Icon(Icons.add),
      ),
    );
```

You can define the follow properties of Scaffold:

- AppBar, which is a horizontal bar typically shown at the top of an app using the appBar property.
- BottomAppBar, which is a horizontal bar typically shown at the bottom of an app using the bottomNavigationBar property.
- FloatingActionButton, which is a circular button typically shown in the bottom right corner of the app using the floatingActionButton property.
- Drawer, which is a vertical panel that is typically displayed to the left of the body (and often hidden on phones) using the drawer property.
- BottomNavigationBar, which is a horizontal array of buttons typically shown along the bottom of the app using the bottomNavigationBar property.
- BottomSheet, which is an overlay typically shown near the bottom of the app. A bottom sheet can either be persistent, in which case it is shown using the ScaffoldState.showBottomSheet method, or modal, in which case it is shown using the showModalBottomSheet function.
- ScaffoldState, which is the state associated with this widget.
- Cookbook: Add a Drawer to a screen

