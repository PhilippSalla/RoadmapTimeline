# 🛣️ Milestone Roadmap & Timeline

A modern, minimalistic **horizontal & vertical roadmap & timeline component** — framework-free and supporting both light and dark modes.


## Preview

---

![Roadmap Preview](/assets/roadmap.gif)


## Features

---

- ✅ Responsive horizontal & vertical layout
- ✅ Pure JS and CSS, no framework
- ✅ Neutral coloring but easily customizable
- ✅ [Supported light and dark mode](#light-and-dark-mode)
- ✅ [Additional state coloring for success and failed state](#status-coloring)
- ✅ [Text area for a date value](#date)
- ✅ [Horizontal scrolling](#scrolling-behaviour)
- ✅ [No-select option](#no-select)


## Getting Started

---

To add the roadmap to your project, you need to include its stylesheet and js-script, so the classes in the 
html structure work properly.

### Include

**(1)** Copy the required files into your project and include them as follows:

```html
<link rel="stylesheet" href="css/roadmap.css">
<script src="js/roadmap.js" defer></script>
```

**(2)** Or include the required files via url:

```html
<link rel="stylesheet" href="https://philippsalla.de/roadmap/roadmap.css">
<script src="https://philippsalla.de/roadmap/roadmap.js" defer></script>
```

### Structure

Copy the following code into your code and add additional ``rm-item-container``s if you need more.

```html
<!-- RoadmapTimeline | © 2025 Philipp Salla | https://github.com/PhilippSalla/RoadmapTimeline | Distributed under MIT license-->
<div id="roadmap" class="rm-wrapper-light rm-no-select" data-scroll="true">
    <div class="rm-line">

        <!-- Element with success coloring and date in separate line -->
        <div class="rm-item-container rm-done">
            <div class="rm-dot"></div>
            <div class="rm-item">
                <p class="rm-item-title">Concept</p>
                <p class="rm-date">Nov 2025</p>
                <p class="rm-item-content">Developed the first concept for the project.</p>
            </div>
        </div>

        <!-- Element with fail coloring and date inline with the text -->
        <div class="rm-item-container rm-fail">
            <div class="rm-dot"></div>
            <div class="rm-item">
                <p class="rm-item-title">Design</p>
                <p class="rm-item-content"><span class="rm-date-inline">Q2 2026</span> — UI & prototypes</p>
            </div>
        </div>

        <!-- Element with basic color and no date -->
        <div class="rm-item-container">
            <div class="rm-dot"></div>
            <div class="rm-item">
                <p class="rm-item-title">Release</p>
                <p class="rm-item-content">Q3 2026 — initial release</p>
            </div>
        </div>
        
        <!-- Add additional rm-item-container as needed -->

    </div>
</div>
```

A single roadmap element is represented by:

````html
<div class="rm-item-container">
    <div class="rm-dot"></div>
    <div class="rm-item">
        <p class="rm-item-title">Release</p>
        <p class="rm-item-content">Q3 2026 — initial release</p>
    </div>
</div>
````

## Usage

---

### Light And Dark Mode

The roadmap component supports both, a light and dark mode. To select eiter of those use the following class on the
roadmap wrapper element:

- Dark Mode: ``.rm-wrapper-dark``
- Light Mode: ``.rm-wrapper-light``

### Status Coloring

To highlight certain elements in your roadmap you can use a success and fail coloring.
Add `rm-success` or `rm-fail` to the desired `rm-item-container` to apply the respective coloring.

The coloring can be customized using the following css variables:

#### In Light Mode

```css
/* Status coloring light mode */
--rm-clr-fail-light: #842029;
--rm-clr-fail-bg-light: #f8d7da;
--rm-clr-done-light: #0f5132;
--rm-clr-done-bg-light: #aeccbe;

/* Default coloring light mode */
--rm-clr-item-accent-light: #d0d3d8;
--rm-clr-item-bg-light: #f5f6f7;
--rm-clr-title-light: #1b1c1f;
--rm-clr-text-light: #4b4d52;
```

#### In Dark Mode

```css
/* Status coloring dark mode */
--rm-clr-fail-dark: #e07a7a;
--rm-clr-fail-bg-dark: #3c1f22;
--rm-clr-done-dark: #a3d9b1;
--rm-clr-done-bg-dark: #1f3d2f;

/* Default coloring dark mode */
--rm-clr-item-accent-dark: #6f727e;
--rm-clr-item-bg-dark: #484b52;
--rm-clr-title-dark: #f0f0f0;
--rm-clr-text-dark: #b0b0b5;
```

### Date

You can add a date (or any other text as you like) in two configurations.

#### Separate Line

The date will be displayed in its own line below the item's heading.
Add the class `rm-date` to the element that contains your date text

**Example:**

````html
<div class="rm-item-container rm-done">
    <div class="rm-dot"></div>
    <div class="rm-item">
        <p class="rm-item-title">Concept</p>
        <p class="rm-date">Nov 2025</p>
        <p class="rm-item-content">Developed the first concept for the project.</p>
    </div>
</div>
````

#### Inline

The date will be displayed inline with the element's main text block.
Add the class `rm-date-inline` to the element that contains your date text.

**Example:**

````html
<div class="rm-item-container rm-fail">
    <div class="rm-dot"></div>
    <div class="rm-item">
        <p class="rm-item-title">Design</p>
        <p class="rm-item-content"><span class="rm-date-inline">Q2 2026</span> — UI & prototypes</p>
    </div>
</div>
````

### Scrolling Behaviour

Add the `data-scroll` attribute to the `rm-wrapper-light` or `rm-wrapper-dark` and set its value to `true` to override
the default mouse wheel scroll behaviour. When enabled the mouse wheel scroll can be used to scroll the roadmap horizontally.

**Example:**

````html
<div id="roadmap" class="rm-wrapper-light" data-scroll="true">
    .
    .
    .
</div>
````

### No-Select

If you don't want any `user-select` on the roadmap's elements, you may use the class `rm-no-select` to the
roadmap's wrapper element (`rm-wrapper-light` or `rm-wrapper-dark`).

**Example:**

````html
<div id="roadmap" class="rm-wrapper-light rm-no-select">
    .
    .
    .
</div>
````

## License

---

Distributed under MIT License.

## Contact

---

<p align="center">

[Repo](https://github.com/philippsalla/roadmaptimeline) - [GitHub Profile](https://github.com/philippsalla) - [Homepage](https://philippsalla.de)

</p>
