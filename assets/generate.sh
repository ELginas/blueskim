#!/usr/bin/sh

mkdir -p icons
fd . inkscape -x inkscape -l -o icons/{/} {}
svgo -i icons