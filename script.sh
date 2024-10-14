#!/bin/bash
# "I did it to make the testing of Nottodbox even easier using DistroSea."

setxkbmap tr
sudo apt update
sudo apt install git pip ninja-build meson libxcb-cursor0 -y
pip install PySide6
git clone https://github.com/mukonqi/nottodbox.git
cd nottodbox
meson setup . builddir
ninja -C builddir
sudo ninja -C builddir install
cd ..
rm -rf nottodbox