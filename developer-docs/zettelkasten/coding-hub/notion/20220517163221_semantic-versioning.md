# Semantic Versioning

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [..]()

**Links**
- [Semantic Versioning](https://semver.org/)
- [Medium article](https://medium.com/@jameshamann/a-brief-guide-to-semantic-versioning-c6055d87c90e)

## Content

Versioning our apps helps us keep track of what’s been added/removed at what point. It can get real hectic, real fast, especially in the early stages when you’re releasing new features and fixing bugs. You’re gonna want to reference things that have been added or things that have been fixed.

You can tag your releases on Github using git tag. Essentially, you just tag a version number to a specific commit, like a merge, push it and this appears on the repository under “releases”, with any notes you’d like to add. It’s best to keep track of all these changes in a CHANGELOG, there’s a nice format to follow outlined here. 

### Versioning 

<img src="https://www.baeldung.com/wp-content/uploads/sites/4/2021/03/Screenshot-2021-03-06-at-20.27.22-2048x715-1-1536x536.png" style="height:120px">

### Stages

**Stage Development: Pre-Alpha**

At this stage, you’re developing your app and still building towards an MVP. There’s no real point differentating between versions here because it’s not a useable product yet. During this period, the version will remain at 0.

**Stage 1: Major.Minor.Patch**

Once you reach your MVP, you might iterate over this and create Alpha/Beta releases for users to test and supply feedback on.

- Major Release — Increment the first digit by 1 if the new features break backwards compatibility/current features. It's the breaking change. _(e.g. new version of a library, change api, change that can break existing code)_
- Minor Release — Increment the middle digit by 1 if the new features don’t break any existing features and are compatible with the app in it’s current state. It's retrocompatibility. _(e.g. new feature, new feature that is compatible with the current state of the app, new methods, new classes)_
- Patch Release — Increment the last digit by 1 if you’re publishing bug/patch fixes to your app. (e.g. fix a bug, fix a bug that breaks the app, fix a bug that breaks the app in a specific way)

### Metadata

After the patch version, there are some optional labels we can add to our versions, such as a pre-release label or a build number.

For example, to mark a package as a pre-release, we must add a hyphen then the pre-release label, which can be a dot-separated identifier, e.g., 1.0.0-alpha.1 tells us that this project is a pre-release version of 1.0.0 labeled alpha.1. A pre-release label indicates that this version is unstable and has a high risk if we use it. When considering version precedence, a pre-release version is always of lower precedence than the normal version.

If we want to indicate the build of that release, we can add a dot-separated identifier of the build appended after the patch (or pre-release) with a + sign. For example, 1.0.0-alpha.1+001. Build meta-data does not factor in precedence, so we can consider two versions that only differ in build number to be of the same precedence.

### Other versioning

- [CalVer](https://calver.org/) – this scheme relies on the date of the release. It is not as specific as the SemVer scheme but is used by projects such as Pip the Python package manager and Ubuntu
- [Python Versioning Scheme](https://peps.python.org/pep-0440/) – a scheme defined to identify distributions of Python. The scheme uses five segments called epoch, release, pre-release, post-release, and development
- [Named Versions](https://en.wikipedia.org/wiki/Android_version_history) – some projects opt to name their releases with a unique name. For example, Android has an interesting collection of version names which started off with Cupcake, Donut, and Eclair! We can see a full list of Android releases if needed
- [Spring Project Version Naming](https://www.baeldung.com/spring-projects-version-naming) – this is a common method in Spring Framework and Sprint Boot projects and expands on SemVer with some additional labels such as RC for release candidates and BUILD-SNAPSHOT for a development release