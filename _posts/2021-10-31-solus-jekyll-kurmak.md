---
layout: post
title: Solus'a Jekyll Kurmak
tag: GNU/Linux
---
Selam, bugün Solus'a nasıl Jekyll kurulacağını antalacağım.

### Kısaca Jekyll nedir?

Jekyll, düz metinleri statik internet sitelerine ya da bloglara dönüştürmemizi sağlar. 
Şuan da benim sitem de Jekyll kullanıyor.

### Jekyll'i Solus hariç diğer çoğu işletim sistemine nasıl kurarım?

Jekyll'i Solus hariç diğer işletim sistemlerine kurmak için [buraya](https://jekyllrb.com/docs/installation/) tıklayabilirsiniz.

### Jekyll'i Solus'a nasıl kurarım?

Jekyll'i Solus'a kurmak için şu komutları uçbirimi açıp çalıştırmanız lazım:

İlk komut:

`sudo eopkg install -c system.devel ruby ruby-devel`

İkinciler:

`echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc`

`echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc`

`echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc`

`source ~/.bashrc`

Üçüncü komut:

`gem install jekyll bundler`

Artık Solus'a Jekyll kurmuş olmanız gerekmektedir, iyi günler dilerim.

Kaynak: [Installing Jekyll On Solus](https://mukhtharcm.github.io/linux/jekyll-in-solus/)