
### Where to start:
* Please open `index.html`. No npm installations are required. All vendor libraries & frameworks are placed in 'vendor/' folder.
* If Sass compiling is needed, after doing `npm install` ,please run `npm run sassy`

### Some notes:
* Decided not to use a Bundler and keep it simple by only adding Node Sass as a dev dependency.
* Since no Bundlers are used, thought this simple folder structure would be better for this specific task.
* `css` folder contains the compiled Sass from `scss` folder.
* Using Bootstrap v4.6.1 (Bootstrap and its dependencies are located in `vendor/` )
* Added `Sofia Pro` font as locally hosted WOFF2 just for testing purposes.
* Lazy loading is added only as loading=lazy. No external libraries are used as of yet.
* Haven't tested on older browsers yet.

The coding patterns you see are the guides I loosely follow, but I'm always totally flexible and adaptable to the way the team is gonna do things.
Usually I configure `.stylelintrc` + `.eslintrc` to keep a consistent coding pattern, but to keep things simple, haven't added any to this project.

Thank you.

The Figma design is beautiful, btw. :)

### To further improve the features of the carousel, I would do:
* Touch events support.
* Implement a more dynamic approach to handling different screen sizes and slide counts.

### Need to consider more:
* Regarding the product title HTML tags in each card, currently added `h3` tag, but depending on the information architecture of the site as a whole, other tags might also be worth considering.
