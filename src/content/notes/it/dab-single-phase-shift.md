---
title: "Convertitori DAB: trasferimento di potenza con sfasamento singolo"
description: "Come lo sfasamento tra i due ponti muove la potenza in un Dual Active Bridge."
date: 2026-11-12
maturity: seedling
tags: [elettronica di potenza, DAB]
---

<p class="placeholder-note">Nota segnaposto: serve a mostrare il layout (formule, note a margine, codice). Sostituiscila con un tuo testo.</p>

Un Dual Active Bridge (DAB) collega due ponti interi tramite un trasformatore ad alta frequenza. Ogni ponte genera un'onda quadra, e l'induttanza di dispersione del trasformatore <span class="sn"><small>In pratica si aggiunge spesso un'induttanza serie per raggiungere il valore di L desiderato.</small></span> fa da elemento di trasferimento dell'energia.

## Trasferimento di potenza

Se le due onde quadre hanno la stessa frequenza $f_s$ e una è ritardata di uno sfasamento $\varphi$ (in radianti), la potenza media è

$$
P = \frac{n\,V_1 V_2}{2\pi^2 f_s L}\;\varphi\,(\pi - |\varphi|), \qquad |\varphi| \le \pi
$$

dove $L$ è l'induttanza serie riportata al primario e $n$ il rapporto spire.<span class="sn"><small>Le convenzioni su $n$ e sul lato a cui si riporta $L$ variano. Verifica sul tuo riferimento prima di usare la formula.</small></span> La potenza è massima per $\varphi = \pi/2$:

$$
P_\text{max} = \frac{n\,V_1 V_2}{8 f_s L}
$$

## Un calcolo rapido

```python
import math

def dab_power(v1, v2, n, fs, L, phi):
    """Potenza media con sfasamento singolo. phi in radianti."""
    return n * v1 * v2 * phi * (math.pi - abs(phi)) / (2 * math.pi**2 * fs * L)
```

La commutazione dolce (ZVS) dipende dal rapporto di tensione oltre che dal carico,<span class="sn"><small>Questa nota non tratta ancora i range di ZVS.</small></span> ed è qui che entrano in gioco le modulazioni più avanzate.
