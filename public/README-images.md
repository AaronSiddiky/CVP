# Adding Images to Your Website

## How to Add Your Speaker Image

1. **Add your image to this folder** (`/public/`)
   - Name it something like `speaker.jpg`, `hero-image.png`, or `event-photo.jpg`
   - Supported formats: JPG, PNG, WEBP, SVG

2. **Update the code** in `/app/page.tsx`
   - Find line 16-18 with the comment about replacing the image
   - Replace the `<HeroImage />` component with:
   ```jsx
   <Image 
     src="/your-image-name.jpg" 
     alt="Speaker at event" 
     width={600} 
     height={450} 
     className="rounded-2xl object-cover w-full aspect-[4/3]" 
   />
   ```

## Example

If you add a file called `speaker.jpg` to this folder, update the code to:

```jsx
<Image 
  src="/speaker.jpg" 
  alt="Entrepreneur speaking at Columbia Venture Partners event" 
  width={600} 
  height={450} 
  className="rounded-2xl object-cover w-full aspect-[4/3]" 
/>
```

## Tips

- **Optimize your images** - Keep file sizes under 1MB for best performance
- **Use good quality** - Recommended dimensions: 800x600px or higher
- **Alt text** - Always include descriptive alt text for accessibility
