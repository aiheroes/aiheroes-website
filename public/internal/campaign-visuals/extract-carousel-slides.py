#!/usr/bin/env python3
"""
Extract individual slides from carousel HTML files.
Creates standalone HTML files for each slide that can be saved as images.
"""

import re
from pathlib import Path

def extract_slides(carousel_file):
    """Extract individual slides from a carousel HTML file."""
    input_path = Path(carousel_file)

    # Read the carousel file
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the head section
    head_match = re.search(r'<head>(.*?)</head>', content, re.DOTALL)
    if not head_match:
        print(f"No head section found in {input_path.name}")
        return

    head_content = head_match.group(1)

    # Find all slide divs - these are direct children of carousel-container
    # Split by the carousel container and work from there
    container_match = re.search(r'<div class="carousel-container">(.*?)</div>\s*</body>', content, re.DOTALL)
    if not container_match:
        print(f"No carousel container found in {input_path.name}")
        return

    container_content = container_match.group(1)

    # Now find slide divs more carefully - match complete slide blocks
    # Each slide starts with <div class="slide..."> and ends after slide-footer div closes
    slides = []
    pattern = r'(<!-- Slide \d+.*?<div class="slide[^"]*">.*?<div class="slide-footer">.*?</div>\s*</div>)'
    matches = re.findall(pattern, container_content, re.DOTALL)

    if matches:
        slides = matches
    else:
        # Try alternative pattern without comments
        pattern = r'(<div class="slide[^"]*">.*?</div>\s*</div>\s*</div>(?=\s*(?:<div class="slide|</div>)))'
        slides = re.findall(pattern, container_content, re.DOTALL)

    if not slides:
        print(f"No slides found in {input_path.name}")
        return

    # Get carousel name from filename
    carousel_name = input_path.stem

    print(f"\nProcessing {input_path.name} - Found {len(slides)} slides")

    # Create individual HTML file for each slide
    for i, slide_html in enumerate(slides, 1):
        standalone_html = create_standalone_slide(head_content, slide_html, carousel_name, i, len(slides))

        # Create output filename
        output_filename = f"{carousel_name}-slide-{i}.html"
        output_path = input_path.parent / output_filename

        # Write the standalone slide
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(standalone_html)

        print(f"  Created: {output_filename}")

def create_standalone_slide(head_content, slide_html, carousel_name, slide_num, total_slides):
    """Create a standalone HTML document for a single slide."""

    # Update CSS for clean 1080x1080 output
    updated_head = f'''  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide {slide_num}/{total_slides} - {carousel_name}</title>
{head_content}'''

    # Remove body padding
    updated_head = re.sub(
        r'body\s*\{[^}]*?\}',
        '''body {
      font-family: 'Inter', sans-serif;
      background: #1C1917;
      margin: 0;
      padding: 0;
      width: 1080px;
      height: 1080px;
      overflow: hidden;
    }''',
        updated_head,
        flags=re.DOTALL
    )

    # Replace carousel-container - no centering, just fill
    updated_head = re.sub(
        r'\.carousel-container\s*\{[^}]+\}',
        '''.carousel-container {
      width: 1080px;
      height: 1080px;
      background: #1C1917;
      margin: 0;
      padding: 0;
    }''',
        updated_head,
        flags=re.DOTALL
    )

    # Update slide - remove border-radius and make it fill exactly
    updated_head = re.sub(
        r'\.slide\s*\{[^}]*?\}',
        '''.slide {
      width: 1080px;
      height: 1080px;
      background: #1C1917;
      border-radius: 0;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }''',
        updated_head,
        flags=re.DOTALL
    )

    # Create the full HTML
    html = f'''<!DOCTYPE html>
<html lang="nl">
<head>
{updated_head}
</head>
<body>
  <div class="carousel-container">
    {slide_html}
  </div>
</body>
</html>'''

    return html

def main():
    """Process all carousel HTML files."""
    script_dir = Path(__file__).parent

    # Find all carousel files (excluding slides)
    files = sorted([
        f for f in script_dir.glob('carousel-*.html')
        if 'slide-' not in f.stem
    ])

    if not files:
        print("No carousel files found")
        return

    print(f"Found {len(files)} carousel files to process")

    for file in files:
        extract_slides(file)

    print(f"\nExtraction complete!")

if __name__ == '__main__':
    main()
