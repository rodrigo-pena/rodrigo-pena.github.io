---
layout: post
title: Know your sources
description: A solution for a source localization problem on graphs
date: 2018-03-09
modified: 2018-03-12
image:
  feature:
  credit:
  creditlink:
categories: [inverse problems, graph signal processing]
tags: [l1-norm, graphs, spectrum, non-convex]
---

> <p style="text-align: center">
This is a recovered post from a blog I used to maintain. It was written right before I attended the 2016 IEEE IVMSP workshop in Bordeaux, France, where I presented the work described in this post. Enjoy.</p>

----

# Prologue

<!--excerpt.start-->

Picture yourself in London, 1857. Just a few years before, a sudden cholera outbreak left hundreds of people dead or terribly ill in the Soho area. Whenever the subject is brought up in conversation you always hear the self-proclaimed specialists blame the “bad airs” in the region for the tragedy brought upon the neighborhood. But you don’t really believe that, do you? Your inquisitive mind wants to figure out what really happened, and a map that you had laying around inspired you to pinpoint the locations and numbers of every casualty of the [1854 outbreak](https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak).

<!--excerpt.end-->

At first the data might not tell you much more than the fact that cholera really did kill a lot of people in Soho that year. But you are a creative physician, and you had been playing with the idea that cholera might be transmissible by water. The houses weren’t supplied with running water, and people had to bring water containers filled at nearby public pumps back home if they wanted to drink, cook, or shower. You finally decide you should pinpoint the locations of the water pumps on the Soho map as well, and lo and behold: all the deaths seem to cluster around the pump on Broad Street (see the red circle near the centre of the figure below).

I should have mentioned your name is [John Snow](https://en.wikipedia.org/wiki/John_Snow) (the one who knows something), a.k.a. the father of epidemiology. Although I recounted a fictionalized version of the story, the results are all real. Indeed, for dr. Snow, even more important than finding the source of the outbreak was having good evidence for his hypothesis that cholera is transmissible by water. Figure 1 below (made possible through the efforts of [Robin Wilson](http://blog.rtwilson.com/john-snows-famous-cholera-analysis-data-in-modern-gis-formats/)) shows a plot of the data gathered by dr. Snow. The red circles denote water pumps in the region. Take notice, in particular, of the Broad Street pump, near the center of the image.

<figure>
  <div class="container" style="float: center; width: 75%">
    <img src="{{ site.url }}/images/blog/2018-03-09/cholera_death_map.png">
    <figcaption style="text-align: center">
    Figure 1. Localized death counts for the 1854 cholera outbreak in London.
    </figcaption>
  </div>
</figure>

At this point, we should step back and dissect the problem that dr. Snow was trying to solve. He had a series of geo-referenced points with some signal living on it (the number of deaths at each place). How can you find the source of the outbreak from this input? At first, you might do as dr. Snow, and use his prior information to find the water pump that is closest to the center of mass of the “death points” (that’s how I’ll refer to them from now on). But what if we want to devise a recipe for solving all kinds of different problems that roughly look like this one? For example, we might be looking at the spread of another kind of disease, the spread of a rumor, or the spread of a chemical gas on the atmosphere. Is this a possible endeavor? And while we are at it, what if we have more than one source?

Well, we have to abstract from our motivating example to then attack the other versions of this problem.

# 1

First, let’s get rid of the assumption that the points we have are necessarily geographical. That is necessary because a rumor in a social network, for example, spreads from user to user, regardless of their spatial reference. This brings a problem however, because with spatial data we have a notion of how far one point is to another. In the social network example, we can overcome this by imagining that two users are "close together" if they have a friend/follower relationship. The mathematical object that generalizes this idea is what we call a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), $$G = (V, E, W)$$, which consists of a set of vertices (our points), a set of edges (expressing the connectivity between pairs of points), and a set of edge weights. In our convention, two points are "close" if the weight of the edge between them is large, and "far" if this weight is small.

# 2

Second, we have a signal that lies on this graph. In dr. Snow’s data, this corresponded to the number of deaths at each point, but in other cases it might as well be the number of retweets of a given user, or the concentration of a certain gas at a given measuring station, to name a few. From this perspective, we can consider the source localization problem as a signal recovery problem! I’ll explain. See, saying that vertices $$i$$ and $$j$$ are the sources of our "outbreak" is equivalent to saying that we want to recover a signal that is $$1$$ at vertices $$i$$ and $$j$$ and $$0$$ at every other node. In fact, we call this signal the [indicator function](https://en.wikipedia.org/wiki/Indicator_function) of vertices $$i$$ and $$j$$.

# 3

We also need a model for the diffusion process. To keep things simple, we assume any process of out interest behaves as [heat diffusion](https://en.wikipedia.org/wiki/Heat_equation), that is, what you would observe on the local temperatures on a metal plate through time if this plate made contact with very hot pointy objects. Mathematically, this can be expressed as a function of a very important operator, the [graph Laplacian](https://en.wikipedia.org/wiki/Laplacian_matrix). Many other diffusion processes can also be modeled in pretty much the same way. As we’ll see, this approximation is surprisingly not too restrictive, although I imagine application-specific modeling should give more robust results.

# 4

Finally, we need a restriction on the number of sources. In dr. Snow’s problem, he assumed there was only one infected pump, but other problems might have two, three, or more simultaneous sources. In general, we expect the number of sources to be small in comparison to the number of vertices we have. In terms of the indicator function described some paragraphs ago, we say that the source signal is sparse: we have mostly $$0$$'s and very few $$1$$'s. There are a couple of different ways to measure sparsity mathematically. The most direct way is through the [$$\ell_0$$ "norm"](https://en.wikipedia.org/wiki/Lp_space#When_p_=_0), which simply counts the number of non-zero entries in a vector. For computational reasons, we choose however its convex relaxation, the [$$\ell_1$$-norm](https://en.wikipedia.org/wiki/Taxicab_geometry).

# 5

With all those ingredients at hand, locating the sources of an outbreak reduces to solving an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem) in which we un-diffuse the observations while enforcing the $$\ell_1$$-norm of the signal to be small.

----

As an illustration, the next figure displays the data collected in the occasion of the [European Tracer Experiment](https://rem.jrc.ec.europa.eu/etex/) (ETEX) in 1994. Long story short, the Chernobyl disaster in the 80s brought about concern for the spread of bio-chemical-radioactive waste throughout Europe. One of the goals of ETEX was to observe how chemical gases could potentially transit once released in the European atmosphere. An easily traceable chemical gas was then released in Rennes, France, and its concentration was regularly measured for hours at other meteorological stations in Europe. Figure 2 shows the cumulative concentration of this tracer for the whole duration of the experiment. We see that the release station shows a higher concentration of the tracer, while this concentration tends to decrease as we move towards the stations is Eastern Europe.

<figure>
  <div class="container" style="float: center; width: 75%">
    <img src="{{ site.url }}/images/blog/2018-03-09/obs_gas_release.png">
    <figcaption style="text-align: center">
    Figure 2. ETEX cumulative tracer concentration
    </figcaption>
  </div>
</figure>

Figure 3 shows on the result of our optimization problem in un-diffusing the observed ETEX data: we correctly recover the indicator function of the Rennes station.

<figure>
  <div class="container" style="float: center; width: 75%">
    <img src="{{ site.url }}/images/blog/2018-03-09/solution_gas_release.png">
    <figcaption style="text-align: center">
    Figure 3. Identified release site
    </figcaption>
  </div>
</figure>

----

# Epilogue

For more details, you can access the full paper [here](https://arxiv.org/abs/1603.07584). For the computer-inclined, code for reproducing these figures is available [here](https://github.com/rodrigo-pena/src-localization-graphs)
