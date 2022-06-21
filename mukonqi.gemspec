# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "mukonqi"
  spec.version       = "0.1.0"
  spec.authors       = ["mukonqi"]
  spec.email         = ["mukonqi04@protonmail.com"]

  spec.summary       = "."
  spec.homepage      = ""
  spec.license       = "GPLv3"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
