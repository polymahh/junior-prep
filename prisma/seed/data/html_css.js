export const data = {
    language: "html_css",
    questions: [
        {
            id: 1,
            question: "What are HTML5 semantic elements, and why are they important?",
            answer: "HTML5 semantic elements, such as <header>, <footer>, <nav>, and <article>, provide meaning to the structure of a web page. They improve accessibility, SEO, and readability by clearly defining the purpose of each section.",
        },
        {
            id: 2,
            question: "Explain the difference between cookies, sessionStorage, and localStorage in HTML5.",
            answer: "Cookies are small pieces of data stored in the browser that can be accessed by both the server and client. sessionStorage and localStorage are newer mechanisms introduced in HTML5 for storing data locally in the browser. sessionStorage stores data for the duration of the page session, while localStorage stores data with no expiration date until explicitly cleared.",
        },
        {
            id: 3,
            question: "How does the 'data-' attribute work in HTML5?",
            answer: "The 'data-' attribute allows developers to store custom data attributes directly in HTML elements. These attributes can be accessed via JavaScript and are useful for passing additional information about an element without using non-standard attributes.",
        },
        {
            id: 4,
            question: "Explain the purpose of the HTML5 Canvas element and its usage.",
            answer: "The HTML5 Canvas element is used to draw graphics, animations, or interactive visualizations on a web page using JavaScript. It provides a bitmap-based rendering context that allows for dynamic rendering of shapes, images, and text.",
        },
        {
            id: 5,
            question: "What is Web Storage in HTML5, and how does it differ from cookies?",
            answer: "Web Storage is a mechanism introduced in HTML5 for storing data locally in the browser. Unlike cookies, which have a limited size and are sent with every HTTP request, Web Storage (sessionStorage and localStorage) allows for larger data storage and is not automatically sent to the server with every request.",
        },
        {
            id: 6,
            question: "What is the purpose of the HTML5 doctype declaration?",
            answer: "The HTML5 doctype declaration <!DOCTYPE html> informs the browser that the document is written in HTML5. It ensures that the browser renders the page in standards mode and follows the HTML5 specifications.",
        },
        {
            id: 7,
            question: "How does HTML5 Web Workers improve web applications?",
            answer: "HTML5 Web Workers allow web applications to run scripts in the background, separate from the main execution thread. This enables multitasking and improves performance by offloading heavy tasks, such as complex calculations or data processing, to background threads.",
        },
        {
            id: 8,
            question: "Explain the purpose of the 'async' and 'defer' attributes in HTML script tags.",
            answer: "The 'async' attribute in HTML script tags indicates that the script should be executed asynchronously, without blocking the rendering of the page. The 'defer' attribute indicates that the script should be executed after the document has been parsed, but before the DOMContentLoaded event.",
        },
        {
            id: 9,
            question: "What is the role of the HTML5 Drag and Drop API?",
            answer: "The HTML5 Drag and Drop API provides a standard way to handle drag-and-drop interactions within web applications. It allows users to drag elements and drop them onto designated drop zones, triggering custom JavaScript events for handling the drag-and-drop actions.",
        },
        {
            id: 10,
            question: "Explain the difference between the 'hidden' attribute and CSS 'display: none' property.",
            answer: "The 'hidden' attribute is an HTML attribute that can be applied to elements to hide them from view. It works similarly to 'display: none' in CSS, but the difference is that 'hidden' is a boolean attribute that can be toggled on and off, while 'display: none' is a CSS property that can be controlled via CSS styles.",
        },
        {
            id: 11,
            question: "What is the purpose of the <iframe> tag?",
            answer: "The <iframe> tag is used to embed another HTML document within the current document. It can be used to display web pages, videos, or other content from different sources.",
        },
        {
            id: 12,
            question: "What is the <meta> tag used for?",
            answer: "The <meta> tag provides metadata about the HTML document, such as the character set, author, description, and viewport settings.",
        },
        {
            id: 13,
            question: "What is the difference between block-level and inline elements?",
            answer: "Block-level elements start on a new line and take up the full width available, e.g., <div>, <p>, <h1>. Inline elements do not start on a new line and only take up as much width as necessary, e.g., <span>, <a>, <img>.",
        },
        {
            id: 14,
            question: "What is the purpose of the <!DOCTYPE> declaration?",
            answer: "The <!DOCTYPE> declaration defines the document type and version of HTML being used. It helps the browser understand how to render the page correctly.",
        },
        {
            id: 15,
            question: "What is HTML?",
            answer: "HTML stands for Hypertext Markup Language. It is the standard language used to create web pages. HTML elements form the building blocks of all websites.",
        },
        // css questions here -------------------------------------------------------------
        {
            id: 1,
            question: "Explain the difference between inline, block, and inline-block display properties in CSS.",
            answer: "Inline elements do not start on a new line and only take up as much width as necessary, such as <span>. Block elements start on a new line and take up the full width available, such as <div>. Inline-block elements are similar to inline elements but can have a width and height set, like <img>.",
        },
        {
            id: 2,
            question: "What is the box model in CSS, and how does it work?",
            answer: "The box model in CSS describes the layout of elements on a web page. It consists of content, padding, border, and margin. The total width of an element is calculated as: width + padding + border + margin.",
        },
        {
            id: 3,
            question: "Explain the concept of specificity in CSS and how it is calculated.",
            answer: "Specificity in CSS determines which style rules are applied to an element when multiple conflicting rules exist. Specificity is calculated based on the number of ID selectors, class selectors, and element selectors in a CSS rule. The more specific the selector, the higher its specificity.",
        },
        {
            id: 4,
            question: "What are CSS preprocessors, and why are they used?",
            answer: "CSS preprocessors, such as Sass and LESS, are tools that extend CSS with features like variables, mixins, nesting, and inheritance. They help improve code organization, maintainability, and reusability by allowing developers to write cleaner and more modular CSS code.",
        },
        {
            id: 5,
            question: "Explain the difference between margin collapsing and margin collapsing prevention in CSS.",
            answer: "Margin collapsing occurs when the top and bottom margins of adjacent elements are combined to form a single margin. Margin collapsing prevention can be achieved by adding padding, borders, or clearing floats to an element.",
        },
        {
            id: 6,
            question: "What is the difference between absolute and relative positioning in CSS?",
            answer: "Absolute positioning positions an element relative to its nearest positioned ancestor or to the initial containing block if there is no positioned ancestor. Relative positioning positions an element relative to its normal position in the document flow.",
        },
        {
            id: 7,
            question: "Explain the CSS 'float' property and its usage.",
            answer: "The 'float' property in CSS is used to specify whether an element should float to the left or right within its containing element. Floated elements are taken out of the normal flow of the document and can be used for creating multi-column layouts or wrapping text around images.",
        },
        {
            id: 8,
            question: "What is the purpose of CSS media queries, and how are they used?",
            answer: "CSS media queries allow developers to apply different styles based on the characteristics of the device, such as screen size, resolution, or orientation. They are used to create responsive designs that adapt to various devices and screen sizes.",
        },
        {
            id: 9,
            question: "Explain the difference between 'em' and 'rem' units in CSS.",
            answer: "'em' units are relative to the font size of the parent element, while 'rem' units are relative to the font size of the root element (usually the <html> element). 'rem' units provide a more predictable and consistent way to size elements.",
        },
        {
            id: 10,
            question: "What is CSS grid layout, and how does it work?",
            answer: "CSS grid layout is a two-dimensional layout system used to design complex grid-based layouts in CSS. It allows developers to create rows and columns of content with precise control over their size and alignment.",
        },
        {
            id: 11,
            question: "Explain the purpose of CSS pseudo-elements and provide examples.",
            answer: "CSS pseudo-elements allow developers to style certain parts of an element without adding extra markup to the HTML. Examples include ::before and ::after, which can be used to insert content before or after an element's content, and ::first-line, which styles the first line of text within an element.",
        },
        {
            id: 12,
            question: "What is the 'viewport' meta tag, and why is it used?",
            answer: "The 'viewport' meta tag is used in HTML to control the layout and scaling of the viewport on mobile devices. It enables responsive design by specifying the width of the viewport and initial scaling.",
        },
        {
            id: 13,
            question: "Explain the concept of 'CSS specificity wars' and how to avoid them.",
            answer: "CSS specificity wars occur when developers use overly specific selectors or rely too heavily on !important declarations, leading to unintended styling conflicts. To avoid them, use specific selectors only when necessary, keep styles modular and reusable, and avoid using !important unless absolutely necessary.",
        },
        {
            id: 14,
            question: "What is the 'clearfix' hack in CSS, and when is it used?",
            answer: "The 'clearfix' hack is a technique used to contain floated elements within a parent element. It prevents the parent element from collapsing when its children are floated. It is typically used in multi-column layouts or when dealing with floated elements.",
        },
        {
            id: 15,
            question: "Explain the 'transform' property in CSS and provide examples of its usage.",
            answer: "The 'transform' property in CSS is used to apply 2D or 3D transformations to elements, such as rotation, scaling, skewing, or translating. Examples include rotate(45deg), scale(1.5), skewX(30deg), and translate(50px, 100px).",
        },
        {
            id: 16,
            question: "Explain the difference between 'display: none' and 'visibility: hidden' in CSS.",
            answer: "'display: none' removes the element from the document flow, making it completely invisible and not taking up any space on the page. 'visibility: hidden' hides the element while still occupying space in the layout.",
        },
        {
            id: 17,
            question: "What is the CSS 'content' property used for, and in what context?",
            answer: "The 'content' property is used with pseudo-elements (::before and ::after) to insert content before or after an element's content. It is often used to add decorative elements or textual content dynamically using CSS.",
        },
        {
            id: 18,
            question: "Explain the concept of CSS sprites and their benefits.",
            answer: "CSS sprites combine multiple images into a single image file and use CSS background positioning to display specific parts of the image. They reduce the number of HTTP requests required to load multiple images, resulting in faster page loading times and improved performance.",
        },
        {
            id: 19,
            question: "What is the purpose of the CSS 'calc()' function, and how is it used?",
            answer: "The 'calc()' function in CSS is used to perform calculations to determine the value of a property. It allows developers to perform arithmetic operations, such as addition, subtraction, multiplication, or division, within CSS property values.",
        },
        {
            id: 20,
            question: "Explain the concept of CSS grid-template-areas and provide an example.",
            answer: "CSS grid-template-areas allow developers to define named grid areas within a CSS grid layout. By assigning specific names to grid cells, developers can create complex layouts with precise control over the placement of content. For example:\n\n.grid-container {\n  display: grid;\n  grid-template-areas:\n    'header header header'\n    'sidebar content content'\n    'footer footer footer';\n}",
        },
        {
            id: 21,
            question: "What is the purpose of the CSS 'object-fit' property, and how is it used?",
            answer: "The 'object-fit' property in CSS is used to specify how an <img>, <video>, or <object> element should be resized to fit its content box. It allows developers to control whether the content is scaled, stretched, or cropped to fit the container.",
        },
        {
            id: 22,
            question: "Explain the concept of CSS specificity and the cascade.",
            answer: "CSS specificity determines which style rules take precedence when multiple conflicting rules apply to the same element. Specificity is calculated based on the number of ID selectors, class selectors, and element selectors in a CSS rule. The cascade refers to the process of determining which styles to apply based on specificity, inheritance, and order of appearance.",
        },
        {
            id: 23,
            question: "What are vendor prefixes in CSS, and why are they used?",
            answer: "Vendor prefixes are prefixes added to CSS properties to specify which browser engine the property is intended for. They are used to apply experimental or proprietary CSS features that may not be supported by all browsers or may require vendor-specific prefixes to work correctly.",
        },
        {
            id: 24,
            question: "Explain the difference between CSS Grid Layout and CSS Flexbox.",
            answer: "CSS Grid Layout is a two-dimensional layout system used for creating grid-based layouts with rows and columns, providing precise control over their size and alignment. CSS Flexbox is a one-dimensional layout system used for laying out items in a single row or column, allowing for flexible and responsive designs.",
        },
        {
            id: 25,
            question: "What is the purpose of the CSS 'will-change' property, and how is it used?",
            answer: "The 'will-change' property in CSS is used to inform the browser that an element's properties are likely to change in the future, allowing the browser to optimize rendering performance. It is used to indicate which properties will be animated or transitioned.",
        },
        {
            id: 26,
            question: "Explain the concept of CSS variables (custom properties) and their advantages.",
            answer: "CSS variables, also known as custom properties, allow developers to define reusable values in CSS that can be used throughout a stylesheet. They offer several advantages, including easier maintenance, improved readability, and dynamic value changes using JavaScript.",
        },
        {
            id: 27,
            question: "What is the purpose of the CSS 'transition' property, and how is it used?",
            answer: "The 'transition' property in CSS is used to create smooth transitions between different states of an element, such as changes in size, color, or position. It specifies the duration, timing function, delay, and property to transition.",
        },
        {
            id: 28,
            question: "Explain the difference between CSS animations and transitions.",
            answer: "CSS transitions are short-lived animations that occur when an element changes from one state to another, such as hovering over a button. CSS animations, on the other hand, are more complex and allow for greater control over timing, keyframes, and iteration.",
        },
        {
            id: 29,
            question: "What are CSS blend modes, and how are they used?",
            answer: "CSS blend modes allow developers to blend the colors of overlapping elements in different ways, creating interesting visual effects. Blend modes are applied using the 'mix-blend-mode' property and can be used to achieve effects such as overlay, multiply, screen, and more.",
        },
        {
            id: 30,
            question: "Explain the concept of responsive typography in CSS and how it can be implemented.",
            answer: "Responsive typography in CSS involves adjusting the size, spacing, and layout of text to ensure readability and legibility across different screen sizes and devices. This can be achieved using relative units like ems or rems, viewport units like vw or vh, media queries, and fluid typography techniques.",
        },
        {
            id: 31,
            question: "What is the CSS 'filter' property used for, and what are some common filter functions?",
            answer: "The 'filter' property in CSS is used to apply graphical effects like blur, grayscale, contrast, and brightness to elements. Some common filter functions include blur(), grayscale(), brightness(), contrast(), sepia(), and hue-rotate().",
        },
        {
            id: 32,
            question: "Explain the concept of CSS grid auto-placement and its usage.",
            answer: "CSS grid auto-placement automatically places grid items into available grid cells, following a specified grid template. Items are placed sequentially according to the order in the source code and automatically flow into subsequent rows or columns as needed.",
        },
        {
            id: 33,
            question: "What are CSS pseudo-classes and pseudo-elements, and provide examples of each.",
            answer: "CSS pseudo-classes and pseudo-elements are selectors that target specific parts of elements based on their state or position in the document. Examples of pseudo-classes include :hover, :active, :focus, and :nth-child(). Examples of pseudo-elements include ::before, ::after, ::first-line, and ::first-letter.",
        },
        {
            id: 34,
            question: "What is the purpose of the CSS 'box-shadow' property, and how is it used?",
            answer: "The 'box-shadow' property in CSS is used to add shadows to elements, creating depth and dimensionality. It specifies the horizontal and vertical offsets of the shadow, blur radius, spread radius, and color.",
        },
        {
            id: 35,
            question: "Explain the concept of CSS aspect ratio boxes and how they can be created.",
            answer: "CSS aspect ratio boxes are containers that maintain a fixed aspect ratio regardless of their content. They can be created using techniques like padding-based intrinsic ratios or the aspect-ratio property introduced in CSS.",
        },
        {
            id: 36,
            question: "Explain the concept of CSS specificity and inheritance, and how they interact.",
            answer: "CSS specificity determines which styles take precedence when multiple conflicting rules apply to the same element. Specificity is calculated based on the number of ID selectors, class selectors, and element selectors in a CSS rule. Inheritance refers to the process by which styles are passed from parent elements to their children. Specificity and inheritance interact such that more specific styles override inherited styles.",
        },
        {
            id: 37,
            question: "What is the purpose of the 'currentColor' keyword in CSS, and how is it used?",
            answer: "The 'currentColor' keyword in CSS is used to represent the computed value of the 'color' property. It can be used to set other properties, such as 'border-color' or 'box-shadow', to the same color as the text color without explicitly specifying the color value.",
        },
        {
            id: 38,
            question: "Explain the concept of CSS aspect-ratio boxes and how they can be implemented.",
            answer: "CSS aspect-ratio boxes are containers that maintain a fixed aspect ratio, ensuring that their height is proportional to their width. They can be implemented using the 'aspect-ratio' property introduced in CSS, allowing developers to specify the desired aspect ratio for an element.",
        },
        {
            id: 39,
            question: "What is the purpose of the CSS 'contain' property, and how is it used?",
            answer: "The 'contain' property in CSS is used to isolate an element's styles from the rest of the document, creating a new CSS containment context. It can be used to optimize rendering performance by limiting the scope of CSS calculations and reducing layout thrashing.",
        },
        {
            id: 40,
            question: "Explain the difference between the 'clip-path' and 'mask' properties in CSS.",
            answer: "The 'clip-path' property in CSS is used to define a clipping region that masks out portions of an element's content, hiding them from view. The 'mask' property, on the other hand, is used to apply an alpha mask to an element, allowing certain parts of the element to be transparent or semi-transparent.",
        },
    ],
}
