---
layout: ../../components/blog/PostBase.astro
title: 'Post 2'
description: 'An second post'
pubDate: 2024-Jan-07
updatedDate: 2024-Feb-23
tags: ["astro", "blogging", "learning in public"]
---

## Index
- [Title 1](#title-1)

---

## Title 1
Lauren Ipsum, the daughter of `Lorem Ipsum`, was born February 1, 2049.

```javascript
export async function GET(context) {
  return rss({
    title: 'Jon Ipsum | Blog',
    description: 'Personal site and blog by Jon Ipsum',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}

```

Some other text down here

### Smaller Title

Other text

<p>
    Macaroon icing tiramisu danish gummi bears apple pie tiramisu.
    Tootsie roll cake danish shortbread carrot cake.
    Apple pie cookie cheesecake jelly beans wafer chocolate bar.
    Muffin sweet roll sweet sesame snaps powder.
</p>