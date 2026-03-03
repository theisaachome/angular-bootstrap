# AngularBoostrap

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Override Boostrap theme and styles

Define your colors in src/styles/_variables.scss:

```bash
$my-primary: #6a11cb;
$my-danger: #ff416c;

// Create your custom map
$custom-theme-colors: (
  "primary": $my-primary,
  "danger":  $my-danger,
  // If you omit others, Bootstrap will use its defaults for the rest
);
```

Inject them in src/styles/styles.scss:
```bash
@use 'variables' as vars;
@use 'bootstrap/scss/bootstrap' with (
  $theme-colors: vars.$custom-theme-colors
);
```


## Approach 2: The Classic Way (@import)
If your project is set up with @import, the order is slightly different. You must define the map before importing Bootstrap.

In src/styles/styles.scss:
```bash
// 1. Define individual variables
$primary: #6a11cb;
$success: #00b09b;

// 2. Define the map (Bootstrap will see this and skip its own !default map)
$theme-colors: (
  "primary":    $primary,
  "secondary":  #6c757d,
  "success":    $success,
  "info":       #17a2b8,
  "warning":    #ffc107,
  "danger":     #dc3545,
  "light":      #f8f9fa,
  "dark":       #343a40
);

// 3. Now import Bootstrap
@import 'bootstrap/scss/bootstrap';
```


## Important: Adding vs. Overriding
If you want to keep Bootstrap's default colors but just add one or two of your own (like a "brand" color), you use the map-merge function.

Example of adding a new color:
```bash
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";

$custom-colors: (
  "brand": #712cf9
);

// Merge your new color into the existing map
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "bootstrap/scss/bootstrap";
```
