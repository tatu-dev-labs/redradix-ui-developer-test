# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
activate :i18n, :langs => [:es, :en], :mount_at_root => :es

compass_config do |config|
  config.output_style = :expanded #:nested :compact :expanded :compressed
  config.sass_options = { :line_comments => false, :debug_info => false }
end

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload

activate :breadcrumbs, separator: ' > ', wrapper: :li

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Lanza la tarea de Gulp que se encarga
# de concatenar, minificar y ofuscar el
# todos los archivos JS en uno unico
# y de optimizar el peso de las imagenes
class JsOptimize < Middleman::Extension
  def after_build(builder)
    builder.thor.run 'gulp jsoptimize'
  end
end

::Middleman::Extensions.register(:jsoptimize, JsOptimize)

class ImgOptimize < Middleman::Extension
  def after_build(builder)
    builder.thor.run 'gulp imgoptimize'
  end
end

::Middleman::Extensions.register(:imgoptimize, ImgOptimize)

config[:js_dir] = 'js'
config[:css_dir] = 'css'


# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :jsoptimize
  activate :imgoptimize
#   activate :minify_css
#   activate :minify_javascript
end
