---
title: Using a html img tag
date: 2020-06-18
snippet: Let's learn how html images work! The common image types (such as png and jpg) are supported in most browsers. There are lots of css properties that can be applied to images to make them look even better.
---

# Working with images is simple!

The `<img>` tag is used to embed an image in an HTML page.

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

The `<img>` tag has two required attributes:

1. src - Specifies the path to the image
2. alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed

**Note:** Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.

**Tip:** To link an image to another document, simply nest the `<img>` tag inside an `<a>` tag, here's an example of this:

```html
<!-- here's a code example -->
<a href="https://www.w3schools.com/tags/tag_img.asp">
  <img src="#" alt="this image will be a link to w3schools" />
</a>
```

## CSS properties

There are lots of ways you can edit images using highly supported css properties to make them look great.

Of course you can use a lot of the positioning properties on images, such as `margin`. You can use borders aswell to make images pop! This can also be achieved by using drop shadows.

![A random image of code from unsplash](https://source.unsplash.com/800x800?code 'A random image of a code from unsplash')

Images help make your website look more attractive, get on it!
