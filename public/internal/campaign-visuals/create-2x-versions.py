#!/usr/bin/env python3
"""
Create @2x (high-DPI) versions of all LinkedIn posts and carousels.
Doubles all pixel values for crisp rendering when uploaded to LinkedIn.
"""

import re
import os
from pathlib import Path

def double_px_value(match):
    """Double a pixel value, preserving the 'px' suffix."""
    value = float(match.group(1))
    doubled = value * 2
    # Keep as integer if it was originally an integer
    if doubled == int(doubled):
        return f"{int(doubled)}px"
    return f"{doubled}px"

def create_2x_version(input_file):
    """Create a @2x version of an HTML file by doubling all pixel values."""
    input_path = Path(input_file)

    # Skip if already a @2x file
    if '@2x' in input_path.stem:
        print(f"Skipping {input_path.name} (already @2x)")
        return

    # Read original file
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Double all pixel values (e.g., "16px" -> "32px", "1080px" -> "2160px")
    # Matches patterns like: 16px, 1.5px, etc.
    content_2x = re.sub(r'(\d+(?:\.\d+)?)px', double_px_value, content)

    # Update title to indicate @2x
    content_2x = re.sub(
        r'(<title>.*?)(</title>)',
        r'\1 @2x (High-DPI)\2',
        content_2x
    )

    # Create output filename
    output_path = input_path.parent / f"{input_path.stem}@2x{input_path.suffix}"

    # Write @2x version
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content_2x)

    print(f"Created: {output_path.name}")

def main():
    """Process all post and carousel HTML files."""
    script_dir = Path(__file__).parent

    # Find all posts and carousels
    files = []
    files.extend(sorted(script_dir.glob('post-*.html')))
    files.extend(sorted(script_dir.glob('carousel-*.html')))

    # Filter out existing @2x versions
    files = [f for f in files if '@2x' not in f.stem]

    print(f"Found {len(files)} files to process\n")

    for file in files:
        create_2x_version(file)

    print(f"\n✓ Created {len(files)} @2x versions")

if __name__ == '__main__':
    main()
