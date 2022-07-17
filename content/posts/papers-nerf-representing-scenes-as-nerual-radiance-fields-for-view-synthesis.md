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

Given a sparse set of input images of a scene, NeRF aims to learn a continuous volumetric scene function implemented as a neural network. It is capable of generating views of the scene at previously unseen viewing directions

Given a viewing direction and spatial location within the scene, the network outputs the emitted radiance for that location along with the volume density. These values are aggregated to compute the final pixel values using classic volume rendering techniques.

## Details & Questions

### How is emitted radiance computed?

When rendering a scene, a ray is cast to from the camera position to each pixel location. The color value of each pixel is computed by evaluating a numerical estimation of the following integral. Each term of the integrand represent the accumulated transmittance, volume density, and emitted radiance at the sampled point along the ray. 

![](/media/nerf_radiance.png "Expected color formula")

At first I was confused about the two terms - volume density and accumulated transmittance. They seemed to represent quite similar concepts, and looking at the formula of the latter, things got more confusing. But accumulated transmittance is there because in order to see a particle, it must not be occluded by things in between the particle itself and the camera. Volume density represents the probability that the particle actually exists at that location. Two quite different things indeed.

Another question regarded why the transmittance functions looks the way it does - an exponential function with volume density in the integrand. Well, in the referenced paper (rendering review by Max \[26]), they imagine a short cylinder with particles that absorb the incoming light parallel to the height of the cylinder. 

![](/media/kakaotalk_20220717_230317260.jpg)

The intensity of light is reduced by this occlusion, hence the above differential equation. Solving this gives us the exponential form in the paper.

### Positional Encoding & Hierarchical Sampling

The authors used two other methods to achieve state-of-the-art results - positional encoding and hierarchical sampling. 

**Positional Encoding** aims to map the input coordinate and viewing direction into a high frequency function before passing it to the MLP. It was empirically found that MLPs, although universal approximators, are not so good at learning complex functions with great detail. This sort of positional encoding aims to alleviate this issue.

The idea behind **hierarchical sampling** is that some samples are more... relevant than others! It would be a waste if we sampled a bunch of points in free space (with nothing but air) or in occluded regions. Two networks - coarse and fine - are maintained. Locations are intially sampled evaluated on the coarse network, where the output color of the coarse network is computed as a weighted sum of all sampled colors along the ray. When sampling points for the next "fine" network, these weights are normalized and used as a PDF.

## Experiments

TBW

## Thoughts

TBW