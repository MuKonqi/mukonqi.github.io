---
layout: post
title: Ubuntu Telemetriyi Kapatma
---
Merhaba, bugün Ubuntu'da nasıl telemetriyi devre dışı bırakabileceğinizi anlatacağım.

Şu komutu uçbirimi açın ve çalıştırın:
Not: Bazen sizden şifrenizi isteyecektir, lütfen şifreniz istendiğinde onu girin.

```pkexec apt install git -y ; git clone https://github.com/LamdaLamdaLamda/disable-ubuntu-telemetry.git ; cd disable-ubuntu-telemetry ; chmod +x disableUbuntuOptOut.sh ; pkexec bash ./disableUbuntuOptOut.sh ; cd ; rm -rf ~/disable-ubuntu-telemetry```

Yararlandığım yerler:

[Telemetriyi Kapatan Betik](https://github.com/LamdaLamdaLamda/disable-ubuntu-telemetry)

[Kaynak](https://www.silicone-forum.com/konu/ubuntu-iyi-mi.11585/page-2#post-186153)
