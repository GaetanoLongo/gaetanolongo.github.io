---
title: "DAB converters: power transfer with single phase shift"
description: "How shifting one bridge against the other moves power in a Dual Active Bridge."
date: 2026-11-12
maturity: seedling
tags: [power electronics, DAB]
---

<p class="placeholder-note">Placeholder note: it exists to show the layout (maths, sidenotes, code). Replace it with your own text.</p>

A Dual Active Bridge (DAB) joins two full bridges through a high-frequency transformer. Each bridge produces a square wave, and the transformer's leakage inductance <span class="sn"><small>In practice an extra series inductor is often added to reach the target value of L.</small></span> sits between them as the energy-transfer element.

## Power transfer

If both square waves have the same frequency $f_s$ and one is delayed by a phase shift $\varphi$ (in radians), the average power is

$$
P = \frac{n\,V_1 V_2}{2\pi^2 f_s L}\;\varphi\,(\pi - |\varphi|), \qquad |\varphi| \le \pi
$$

where $L$ is the series inductance referred to the primary and $n$ the transformer turns ratio.<span class="sn"><small>Conventions differ on how $n$ is defined and on which side $L$ is referred to. Check this against your own reference before using it.</small></span> The power is largest at $\varphi = \pi/2$:

$$
P_\text{max} = \frac{n\,V_1 V_2}{8 f_s L}
$$

## A quick calculation

```python
import math

def dab_power(v1, v2, n, fs, L, phi):
    """Average power for single phase shift. phi in radians."""
    return n * v1 * v2 * phi * (math.pi - abs(phi)) / (2 * math.pi**2 * fs * L)
```

Soft switching (ZVS) depends on the voltage ratio as well as on the load,<span class="sn"><small>This note doesn't cover ZVS ranges yet.</small></span> which is where the more advanced modulation schemes come in.
