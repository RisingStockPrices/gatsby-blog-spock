---
title: "[Papers] Nerf: Representing Scenes as Nerual Radiance Fields for View
  Synthesis"
date: 2022-07-16 12:45
tags:
  - papers
  - neural-rendering
description: Studied Nerf. A brief summary of the key ideas and questions I had,
  along with some experimentations.
---
## Key Idea

Given a sparse set of input images of a scene, NeRF aims to learn a continuous volumetric scene function implemented as a neural network.

It is capable of generating views of the scene at previously unseen viewing directions

Given a viewing direction and spatial location within the scene, the network outputs the emitted radiance for that location along with the volume density. These values are aggregated to compute the final pixel values using classic volume rendering techniques.

## Details & Questions

### How is emitted radiance computed?

TBW

### What do you mean by "Classic Volume Rendering Techniques"?

TBW

## Experiments

## Thoughts