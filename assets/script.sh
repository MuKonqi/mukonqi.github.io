#!/bin/bash
# "I maded this for make it easier testing using DistroSea."
# "I'm publishing this for using when I can't use computer."

setxkbmap tr
sudo apt install git pip ninja-build meson libxcb-cursor0 -y
pip install PyQt6 --break-system-packages
git clone https://github.com/mukonqi/nottodbox.git
cd nottodbox
meson setup . builddir
ninja -C builddir
sudo ninja -C builddir install
cd ..
rm -rf nottodbox