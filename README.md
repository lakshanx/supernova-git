
### How to check:
* Please open `index.html`. No installations are needed, all vendor libraries & frameworks are placed in vendor/ folder.
* If Sass compiling is needed, after `npm install` ,please run `npm run sassy`

### Some notes:
* Decided not to use a Bundler and keep it simple by only adding Node Sass as a dev dependancy.
* Since no Bundlers are used, thought this simple folder structure would be better for this specific task.
* `css` folder contains the compiled Sass from `scss` folder.
* Using Bootstrap v4.6.1
* Added `Sofia Pro` font as locally hosted WOFF2 just for testing purposes.
* Lazy loading is added only as loading=lazy. No external libraries are used as of yet.

Thank you!

The Figma design is beautiful, btw. :)


### To further improve, nice to have the following features:
* Touch events support.
* A more dynamic approach to handling different screen sizes and slide counts.

### Need to consider more:
* Regarding the product title HTML tags in each card, currently added `h3` tag, but depending on the information architecture of the site as a whole, other tags might also be worth considering.
