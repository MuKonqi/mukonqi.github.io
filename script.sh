#!/bin/bash
# "I did it to make the testing of Nottodbox even easier using DistroSea."

setxkbmap tr
sudo apt update
sudo apt install git pip ninja-build meson libxcb-cursor0 gettext -y
pip install PySide6 --break-system-packages
git clone https://github.com/mukonqi/nottodbox.git
meson setup nottodbox/builddir nottodbox
meson install -C nottodbox/builddir