// Model for citrus-peel liqueurs (limoncello and cousins).
// Based on the method and the numbers in Dario Bressanini's post
// "Le ricette scientifiche: il limoncello (anche veloce)", Le Scienze, 2015,
// with two refinements: real ethanol/water densities, and the volume of the sugar.

// Density of ethanol/water mixtures at 20 °C by ethanol mass fraction (standard tables, 10 % steps).
const W = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
const D = [0.99823, 0.98187, 0.96864, 0.95382, 0.93518, 0.91384, 0.89113, 0.86766, 0.84344, 0.81797, 0.78934];

export const RHO_ETHANOL = 0.78945; // g/ml at 20 °C, the value used by Bressanini

export const DEFAULTS = {
  strength: 95, // % vol of the alcohol
  zestPer100: 30, // g of zest per 100 ml of alcohol
  peelWaterPct: 70, // % of water in the peel
  sugarPct: 80, // g of sugar per 100 g of added water
  sugarMlPerG: 0.63, // volume added by each gram of dissolved sugar
  contraction: true, // use real mixture densities (ethanol + water shrink a little when mixed)
};

function rhoMix(w) {
  const x = Math.min(1, Math.max(0, w)) * 10;
  const i = Math.min(9, Math.floor(x));
  return D[i] + (D[i + 1] - D[i]) * (x - i);
}

/** Volume (ml) of a given mass of ethanol and water (g). */
function volume(mEth, mWater, contraction) {
  if (!contraction) return mEth / RHO_ETHANOL + mWater;
  const m = mEth + mWater;
  return m <= 0 ? 0 : m / rhoMix(mEth / m);
}

/** Masses of ethanol and water (g) in `ml` of alcohol at `strength` % vol. */
function alcoholMasses(ml, strength, contraction) {
  const phi = strength / 100;
  const mEth = ml * phi * RHO_ETHANOL;
  if (!contraction) return { mEth, mWater: ml * (1 - phi) };
  let w = phi;
  for (let k = 0; k < 60; k++) w = (phi * RHO_ETHANOL) / rhoMix(w);
  return { mEth, mWater: ml * rhoMix(w) - mEth };
}

/** Density (g/ml) of the alcohol at `strength` % vol, to convert between weighing and measuring it. */
export function alcoholDensity(strength, contraction = true) {
  const { mEth, mWater } = alcoholMasses(1, strength, contraction);
  return mEth + mWater;
}

/**
 * Final liqueur for the given amounts.
 * alcoholMl: ml of alcohol, zestG: g of zest, waterMl: ml of water added with the sugar.
 */
export function liqueur({ alcoholMl, zestG, waterMl }, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const { mEth, mWater: mWaterAlc } = alcoholMasses(alcoholMl, o.strength, o.contraction);
  const peelWater = (o.peelWaterPct / 100) * zestG; // g (= ml)
  // Peel water mixes with the alcohol; the liquid left inside the peel is thrown away with it.
  const mWaterTot = mWaterAlc + peelWater;
  const vTot = volume(mEth, mWaterTot, o.contraction);
  const kept = vTot > 0 ? Math.max(0, (vTot - peelWater) / vTot) : 0;
  const eth = mEth * kept;
  const wat = mWaterTot * kept;
  const sugarG = (o.sugarPct / 100) * waterMl;
  const vFinal = volume(eth, wat + waterMl, o.contraction) + o.sugarMlPerG * sugarG;
  const mFinal = eth + wat + waterMl + sugarG;
  return {
    abv: vFinal > 0 ? (eth / RHO_ETHANOL / vFinal) * 100 : 0,
    finalMl: vFinal,
    sugarG,
    sugarPctW: mFinal > 0 ? (sugarG / mFinal) * 100 : 0,
    ethanolMl: eth / RHO_ETHANOL, // pure ethanol that ends up in the liqueur
    infusionMl: vTot - peelWater, // extract recovered after removing the peel
  };
}

/** Water (ml) to add so that the liqueur reaches `targetAbv` % vol. Returns null if it cannot. */
export function waterFor(targetAbv, { alcoholMl, zestG }, opts = {}) {
  const at = (w) => liqueur({ alcoholMl, zestG, waterMl: w }, opts).abv;
  if (!(targetAbv > 0) || !(alcoholMl > 0)) return null;
  if (at(0) < targetAbv) return { waterMl: 0, tooHigh: true };
  let lo = 0, hi = Math.max(10, alcoholMl * 50);
  for (let k = 0; k < 80; k++) {
    const mid = (lo + hi) / 2;
    if (at(mid) > targetAbv) lo = mid; else hi = mid;
  }
  return { waterMl: (lo + hi) / 2, tooHigh: false };
}
