#!/bin/bash
# Compress all images in public/trips/ for web use
# Usage: bash compress-images.sh

DIR="public/trips"
COUNT=0

for img in "$DIR"/*.{jpeg,jpg,png,JPEG,JPG,PNG,HEIC,heic}; do
  [ -f "$img" ] || continue
  BEFORE=$(du -h "$img" | cut -f1)
  convert "$img" -resize '1920x1920>' -quality 80 -strip "${img%.*}.jpeg"
  # Remove original if it was a different format
  if [ "${img}" != "${img%.*}.jpeg" ]; then
    rm "$img"
  fi
  AFTER=$(du -h "${img%.*}.jpeg" | cut -f1)
  echo "✓ ${img##*/}: ${BEFORE} → ${AFTER}"
  COUNT=$((COUNT + 1))
done

echo ""
echo "Done! Compressed $COUNT image(s)."
echo "Run 'git add public/trips/ && git commit -m \"Add new trip images\"' to commit."
