---
layout: page
title: Coding
description: Development and contributions
header-img: images/software-0.jpg
comments: false
date: 2018-03-08
modified: 2018-03-09
---

<div markdown="0">
    <a href="https://github.com/rodrigo-pena" class="btn btn-info">github</a>
</div>

This page compiles a selection of coding projects which I developed or contributed to. Please visit my [github page](https://github.com/rodrigo-pena) for a more comprehensive list.

## [PyUNLocBoX](https://github.com/epfl-lts2/pyunlocbox)
-----

A python package implementing [proximal splitting methods](https://en.wikipedia.org/wiki/Proximal_gradient_method) to solve convex optimization problems. My most relevant contributions to the package were in its primal-dual solvers, and its acceleration schemes.

### Features

* [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), [FISTA](https://people.rennes.inria.fr/Cedric.Herzet/Cedric.Herzet/Sparse_Seminar/Entrees/2012/11/12_A_Fast_Iterative_Shrinkage-Thresholding_Algorithmfor_Linear_Inverse_Problems_(A._Beck,_M._Teboulle)_files/Breck_2009.pdf), Douglas-Rachford, and others.
* Acceleration schemes.
* Modularized design, allowing for ease of customization.

### Getting Started

PyUNLocBoX is available on [PyPI](https://pypi.python.org/pypi/pyunlocbox):

    $ pip install pyunlocbox

You can also find it on [conda-forge](https://github.com/conda-forge/pyunlocbox-feedstock):

    $ conda install -c conda-forge pyunlocbox

For more information, check the links below.

### Useful Links

* PyUNLocBoX [GitHub repository](https://github.com/epfl-lts2/pyunlocbox)
* Documentation on [Read the Docs](https://pyunlocbox.readthedocs.io/en/stable/).
* "Proximal Splitting Methods in Signal Processing", Combettes and Pesquet, 2010. [arXiv](https://arxiv.org/abs/0912.3522)


## [PyGSP](https://github.com/epfl-lts2/pygsp)
-----

A python package implementing tools to perform [signal processing on graphs](https://arxiv.org/abs/1211.0053).

### Features

* Wide range of implemented graphs
* Spectral filtering.
* Plotting.
* Ease of customization.

### Getting Started

PyGSP is available on [PyPI](https://pypi.python.org/pypi/PyGSP):

    $ pip install pygsp

You can also find it on [conda-forge](https://github.com/conda-forge/pygsp-feedstock):

    $ conda install -c conda-forge pygsp

For more information, check the links below.

### Useful Links

* PyGSP [GitHub repository](https://github.com/epfl-lts2/pygsp)
* Documentation on [Read the Docs](https://pygsp.readthedocs.io/).
* "The Emerging Field of Signal Processing on Graphs: Extending High-Dimensional Data Analysis to Networks and Other Irregular Domains", Shuman **et al.**, 2013. [arXiv](https://arxiv.org/abs/1211.0053)
