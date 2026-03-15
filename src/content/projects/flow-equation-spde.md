---
title: "Flow Equation Approach to a Singular SPDE"
description: "An overview of the regularization and renormalization techniques required to give rigorous meaning to singular Stochastic Partial Differential Equations, specifically analyzing a fractional variant of the dynamical $\Phi^4$ model."
url: "/projects/flow-equation-spde"
pubDate: 2026-01-13
draft: false
---

This presentation outlines the project I developed for my 4th-year colloquium (*coloquio di passaggio d'anno*) at the **Scuola Normale Superiore (SNS)**. It was subsequently expanded and presented as the final exam for the **Introduction to Stochastic PDEs** course at the **University of Pisa**.

### Motivation

Many SPDEs originating from physics are singular, meaning standard tools from probability and analysis cannot be directly applied. An example of this is the **Dynamical $\Phi^4$ model**:
$$
(\partial_{t}+1-\Delta)\Phi=\xi-\lambda\Phi^{3}.
$$
This equation is typically posed in $\mathbb{R}_{+}\times\mathbb{R}^{d}$ for dimensions $d \in \{2,3\}$. In the linear case ($\lambda=0$) we can solve the equation and the solution $\Phi$ turns out to be a distribution rather than a classical function. We may expect that for sufficiently small $\lambda$ the equation is just a perturbation of the linear case above, meaning we still expect $\Phi$ to be a distribution. But then the non-linear term $\Phi^{3}$ is classically not well-defined, and so it is not clear what it means for a distribution $\Phi$ to solve the equation.

To understand how we can give meaning to such equations, we focus  instead on a simpler variant:
$$
(1-\Delta)^{\sigma/2}\Phi=\xi+\lambda\Phi^{3}.
$$

### The Flow Equation Approach

How do we rigorously define a solution to this? We proceed via a two-step regularization and renormalization procedure.

First, we regularize the driving noise $\xi$ using a mollifier. We define a smooth noise approximation:
$$
\xi_{\kappa}=\theta_{\kappa}*\xi \in C^{\infty}(\mathbb{R}^{d})
$$
where $\theta_{\kappa} \to \delta$ when $\kappa \to 0$.

Using the regularized noise, we attempt to define a sequence of smooth solutions $\Phi_{k}$:
$$
\Phi_{k}=G*F_{k}[\Phi_{k}]
$$
where $G$ is the Green function of the fractional operator $(1-\Delta)^{\sigma/2}$, and 
$$
F_{k}[\varphi](x)=\xi_{k}(x)+\lambda\varphi(x)^{3}.
$$
However, simply hoping for the convergence of $\Phi_{\kappa}$ as $\kappa \to 0$ does not work.

### The Main Theorem

To achieve convergence, we must introduce **counterterms** into our sequence to control the diverging quantities. The modified non-linearity becomes:
$$
F_{\kappa}[\varphi](x)=\xi_{k}(x)+\lambda\varphi(x)^{3}+\sum_{i=2}^{N}\lambda^{i}c_{k}^{(i)}\varphi(x).
$$
This procedure is formally denoted as solving 
$$
(1-\Delta)^{\sigma/2}\Phi=\xi+\lambda\Phi^{3}-\infty\Phi.
$$
With the proper counterterms in place, we arrive at the main result:

**Theorem:** Let $\sigma\in(\frac{d}{3},\frac{d}{2}]$. There exists a choice of the counterterms, a random variable $\lambda_{*}\in[0,1]$, and a distribution $\Phi \in \mathcal{S}'(\mathbb{R}^{d})$ such that for every $\lambda < \lambda_{*}$, there exists a $\Phi_{k}$ that solves the renormalized equation. Furthermore, $\Phi_{k} \rightarrow \Phi$ almost surely in the $\mathcal{S}'(\mathbb{R}^{d})$ topology. 

We define this limiting distribution $\Phi$ as the rigorous solution to the original singular SPDE.

---

<div class="flex flex-wrap gap-4 not-prose mt-8">
  <a href="/docs/flow-approach.pdf" target="_blank" class="btn btn-outline btn-primary">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    View Presentation Slides
  </a>
</div>

---

**Selected Bibliography:**
* **Duch, P.**, *Lecture notes on flow equation approach to singular stochastic PDEs.* arXiv preprint [arXiv:2511.07120](https://arxiv.org/abs/2511.07120), 2025.
* **Duch, P.**, *Renormalization of singular elliptic stochastic PDEs using flow equation* Probability and Mathematical Physics, Vol. 6 (2), 111-138, 2025.