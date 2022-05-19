# Documentation

Code for generating my [personal website][personal-website].

## How to use this repository as a template for your website

You can follow the instructions below if you want to adapt this repository's contents to deploy your own [GitHub Pages][github-pages] website.

1. [Fork][fork] this repository.
2. Rename the repository you just forked to `YOUR-USER.github.io`, where `YOUR-USER` is your GitHub user name.
3. Clone your renamed repository into your computer.
4. Open a terminal window and navigate to the directory into which you cloned the repository.
5. Install [Bundler][bundler] by typing with `gem install bundler`.
6. (Delete Gemfile.lock if it exists and ) run `bundle install` to get [Jekyll](http://jekyllrb.com) and all the dependencies.
7. Edit `_config.yml` and `index.md` with your personal information.
8. Run the Jekyll server by typing `bundle exec jekyll serve --watch` into the terminal.
9. On your browser, go to `http://localhost:4000` and behold your new website.

## Acknowledgements

I started building the layout of this website by modifying the [compass] template.

## License

The content is released under the terms of the [MIT License](LICENSE.txt).

[bundler]: http://bundler.io
[compass]: https://github.com/excentris/compass
[fork]: https://github.com/rodrigo-pena/rodrigo-pena.github.io/fork
[github-pages]: https://pages.github.com/
[personal-website]: https://rodrigo-pena.github.io/