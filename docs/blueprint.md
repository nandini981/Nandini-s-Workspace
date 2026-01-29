# **App Name**: Andynocode AI Canvas

## Core Features:

- Customizable Hero Section: Allow users to change the community name, tagline, short intro description, and theme accent color directly within the single-page design. Saves configuration to the other database.
- WebP Parallax Hero: Implement a full-screen WebP parallax sequence in the hero section, where scrolling advances frames and reverses them, providing a smooth, cinematic animation. Accepts a link from user such as 'https://ekmepjadtgoemytvbpnk.supabase.co/storage/v1/object/public/Webp%20Sequence/frame_000_delay-0.042s.webp' as a source. All the images from the specified source will be downloaded and loaded during app start, and after load is completed, the hero section is revealed.
- Themed Learning Path Sections: Showcase featured learning paths, like Animated Websites or AI App Development, using a grid layout with thumbnails and descriptions. Enables to set custom values for these through settings page, and save this values into other database.
- AI Content Assistant: A tool powered by generative AI that assists users in crafting engaging descriptions and taglines for their community, featured learning paths, testimonials, and FAQs, tailoring content to match the desired theme and target audience.
- Dynamic Theme and Mode: Offer a default dark cinematic aesthetic with a dark mode option, controlled with a toggle.  Allow the user to switch the theme accent color which affects various visual elements. The color saves configuration to the other database.
- Interactive FAQ: Implement an FAQ section using an accordion style to answer common questions like 'Do I need coding skills?'
- Smooth Loading Experience: Ensure a full-screen loading overlay with the Andynocode logo and a loading bar appears before the hero section is revealed, ensuring all frames are fully loaded and displayed after loading completion.

## Style Guidelines:

- Background: Dark charcoal (#121212) providing a stark, modern contrast.
- Primary color: Vibrant orange (#FF4500), for calls to action and highlight elements.
- Accent color: Deep red (#B82600), used sparingly for hover states.
- Headline font: 'Space Grotesk' sans-serif for headlines, reflecting a tech-forward aesthetic; body text: 'Inter' sans-serif to provide optimal readability.
- Use minimal, monochrome social icons centered at the bottom of the hero, enhancing the focus on content and visual parallax.
- Employ a single-page parallax design with a full-screen hero section, ensuring the text is well-organized into left (identity) and right (value proposition) blocks to maximize readability.
- The animation will support a horizontal loading bar for a clean user experience during content transitions.