---
title: "Analysis on Gaussian Spaces"
description: "A seminar on the infinite-dimensional generalization of the Malliavin derivative and its link to stochastic analysis."
pubDate: 2025-01-08
heroImage: "../../assets/images/projects/gauss-hero.jpg"
imageCredit: "Photo by Martin Martz / Unsplash"
url: "/projects/gaussian-spaces"
#badge: "Stochastic Analysis"
draft: false
---

This project is a seminar I held as the final exam for the course *Analysis on Gaussian Spaces*. It studies the extension of classical *Malliavin calculus* to infinite-dimensional spaces, in the case of Gaussian measures $\mu$ on a separable Hilbert space $H$.

### 1. Gaussian Measures on Hilbert Spaces

A probability measure $\mu$ on a Hilbert space $(H, \mathcal{B}(H))$ is *Gaussian* if its Fourier transform (characteristic function) is given by:

$$
\hat{\mu}(h) = \int_{H} e^{i\langle h,x \rangle} \mu(dx) = e^{i\langle m,h \rangle} e^{-\frac{1}{2}\langle Qh,h \rangle}, \quad \forall h \in H
$$

If $\text{Ker}(Q) = \{0\}$, the measure is non-degenerate. A crucial result in this setting is that $Q$ is a *compact, symmetric, and positive operator*, allowing for an orthonormal basis $\{e_k\}$ of eigenvectors such that:

$$
Q e_k = \lambda_k e_k.
$$

### 2. The White Noise Function

We define the white noise mapping $W: H \to L^2(H, \mu)$. For $f \in H$, $W_f$ is a Gaussian random variable with mean $0$ and variance $\|f\|^2$. 

In the specific case where $H = L^2([0, 1])$, the process defined by $B_t = W_{\mathbb{1}_{[0,t]}}$ is a **Standard Brownian Motion**. This links abstract Hilbert space theory back to classical stochastic calculus, via the formula:

$$
W_f = \int_{0}^{1} f_s dB_s.
$$

### 3. The Malliavin Derivative

The core of the seminar was the definition of the **Malliavin Derivative operator** $M$. We start with the space of "exponential" functions $\mathcal{E}(H)$ and define:

$$
M: \mathcal{E}(H) \subseteq L^2(H, \mu) \to L^2(H, \mu; H)
$$
$$
\varphi \mapsto Q^{1/2} D\varphi.
$$

#### Integration by Parts
The closability of $M$ relies on the fundamental integration by parts formula. For functions $\varphi, \psi \in \mathcal{E}(H)$ and $z \in H$:

$$
\int_{H} \langle M\varphi, z \rangle \,\psi \ d\mu = -\int_{H} \langle M\psi, z \rangle \, \varphi \ d\mu + \int_{H} W_z \, \varphi \, \psi \ d\mu.
$$

The domain of the closure of $M$ is the **Malliavin-Sobolev space** $\mathbb{D}^{1,2}(H, \mu)$.

### 4. Key Results

* **White Noise Derivative:** For any $f \in H$, $M(W_f) = f$.
* **Brownian Motion:** The derivative of a Brownian path is $M_\tau B_t = \mathbb{1}_{[0,t]}(\tau)$.
* **Stochastic Interpretation:** The Malliavin derivative of a random variable is a stochastic process.

### Resources & Materials

<div class="flex flex-col md:flex-row gap-4 my-8">
  <a href="https://drive.google.com/file/d/14i2yctu1kZDdWOtmhbynCft3XEACtyKn/view?usp=sharing" target="_blank" class="btn btn-outline btn-primary text-lg capitalize">
    View Full Seminar PDF
  </a>
</div>

---

**References:**
* **Giuseppe Da Prato**, *Introduction to Stochastic Analysis and Malliavin Calculus*, Scuola Normale Superiore, 2009.