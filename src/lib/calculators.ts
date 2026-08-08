// Educational financial calculator formulas for MarketLab India

export interface RsiResult {
  rsi: number;
  rs: number;
  avgGain: number;
  avgLoss: number;
  status: 'Overbought' | 'Oversold' | 'Neutral';
  history: { day: number; price: number; gain: number; loss: number; rsi: number }[];
}

export function calculateRSI(prices: number[], period: number = 14): RsiResult {
  if (!prices || prices.length <= period) {
    return {
      rsi: 50,
      rs: 1,
      avgGain: 0,
      avgLoss: 0,
      status: 'Neutral',
      history: []
    };
  }

  let gains = 0;
  let losses = 0;

  const history: { day: number; price: number; gain: number; loss: number; rsi: number }[] = [];

  for (let i = 1; i <= period; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff >= 0) gains += diff;
    else losses += Math.abs(diff);
  }

  let avgGain = gains / period;
  let avgLoss = losses / period;

  let rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
  let rsi = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));

  history.push({ day: period, price: prices[period], gain: avgGain, loss: avgLoss, rsi: Math.round(rsi * 100) / 100 });

  for (let i = period + 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    const currentGain = diff >= 0 ? diff : 0;
    const currentLoss = diff < 0 ? Math.abs(diff) : 0;

    avgGain = (avgGain * (period - 1) + currentGain) / period;
    avgLoss = (avgLoss * (period - 1) + currentLoss) / period;

    rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    rsi = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));

    history.push({
      day: i,
      price: prices[i],
      gain: Math.round(avgGain * 100) / 100,
      loss: Math.round(avgLoss * 100) / 100,
      rsi: Math.round(rsi * 100) / 100
    });
  }

  const finalRsi = Math.round(rsi * 100) / 100;
  let status: 'Overbought' | 'Oversold' | 'Neutral' = 'Neutral';
  if (finalRsi >= 70) status = 'Overbought';
  else if (finalRsi <= 30) status = 'Oversold';

  return {
    rsi: finalRsi,
    rs: Math.round(rs * 100) / 100,
    avgGain: Math.round(avgGain * 100) / 100,
    avgLoss: Math.round(avgLoss * 100) / 100,
    status,
    history
  };
}

export interface CagrResult {
  cagr: number;
  totalGain: number;
  totalPercentage: number;
  multiplier: number;
  projections: { year: number; value: number }[];
}

export function calculateCAGR(initial: number, finalValue: number, years: number): CagrResult {
  if (initial <= 0 || finalValue <= 0 || years <= 0) {
    return { cagr: 0, totalGain: 0, totalPercentage: 0, multiplier: 1, projections: [] };
  }

  const cagrDecimal = Math.pow(finalValue / initial, 1 / years) - 1;
  const cagr = cagrDecimal * 100;
  const totalGain = finalValue - initial;
  const totalPercentage = ((finalValue - initial) / initial) * 100;
  const multiplier = finalValue / initial;

  const projections = [];
  for (let y = 0; y <= Math.ceil(years); y++) {
    projections.push({
      year: y,
      value: Math.round(initial * Math.pow(1 + cagrDecimal, y))
    });
  }

  return {
    cagr: Math.round(cagr * 100) / 100,
    totalGain: Math.round(totalGain),
    totalPercentage: Math.round(totalPercentage * 100) / 100,
    multiplier: Math.round(multiplier * 100) / 100,
    projections
  };
}

export interface RiskRewardResult {
  rrRatio: number;
  riskAmountPerShare: number;
  rewardAmountPerShare: number;
  positionSizeShares: number;
  totalInvestmentNeeded: number;
  totalMaxLoss: number;
  totalPotentialProfit: number;
  riskPercentOfCapital: number;
  status: 'Excellent R:R' | 'Acceptable' | 'Poor R:R (Fails 1:2 Rule)';
}

export function calculateRiskReward(
  entry: number,
  stopLoss: number,
  target: number,
  totalCapital: number = 100000,
  maxRiskPercent: number = 2
): RiskRewardResult {
  const isLong = target > entry;
  const riskPerShare = isLong ? entry - stopLoss : stopLoss - entry;
  const rewardPerShare = isLong ? target - entry : entry - target;

  if (riskPerShare <= 0 || rewardPerShare <= 0) {
    return {
      rrRatio: 0,
      riskAmountPerShare: 0,
      rewardAmountPerShare: 0,
      positionSizeShares: 0,
      totalInvestmentNeeded: 0,
      totalMaxLoss: 0,
      totalPotentialProfit: 0,
      riskPercentOfCapital: 0,
      status: 'Poor R:R (Fails 1:2 Rule)'
    };
  }

  const rrRatio = rewardPerShare / riskPerShare;
  const maxRiskAmount = (totalCapital * maxRiskPercent) / 100;
  const positionSizeShares = Math.floor(maxRiskAmount / riskPerShare);
  const totalInvestmentNeeded = positionSizeShares * entry;
  const totalMaxLoss = positionSizeShares * riskPerShare;
  const totalPotentialProfit = positionSizeShares * rewardPerShare;

  let status: 'Excellent R:R' | 'Acceptable' | 'Poor R:R (Fails 1:2 Rule)' = 'Acceptable';
  if (rrRatio >= 3) status = 'Excellent R:R';
  else if (rrRatio < 2) status = 'Poor R:R (Fails 1:2 Rule)';

  return {
    rrRatio: Math.round(rrRatio * 100) / 100,
    riskAmountPerShare: Math.round(riskPerShare * 100) / 100,
    rewardAmountPerShare: Math.round(rewardPerShare * 100) / 100,
    positionSizeShares,
    totalInvestmentNeeded: Math.round(totalInvestmentNeeded),
    totalMaxLoss: Math.round(totalMaxLoss),
    totalPotentialProfit: Math.round(totalPotentialProfit),
    riskPercentOfCapital: maxRiskPercent,
    status
  };
}

export interface SipResult {
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
  schedule: { year: number; invested: number; returns: number; total: number }[];
}

export function calculateSIP(monthly: number, annualReturn: number, durationYears: number): SipResult {
  if (monthly <= 0 || annualReturn <= 0 || durationYears <= 0) {
    return { totalInvestment: 0, estimatedReturns: 0, totalValue: 0, schedule: [] };
  }

  const i = annualReturn / 12 / 100;
  const n = durationYears * 12;
  
  // Future Value Formula for SIP: FV = P × [ (1 + i)^n - 1 ] × (1 + i) / i
  const totalValue = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const totalInvestment = monthly * n;
  const estimatedReturns = totalValue - totalInvestment;

  const schedule = [];
  for (let year = 1; year <= durationYears; year++) {
    const months = year * 12;
    const fv = monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    const invested = monthly * months;
    schedule.push({
      year,
      invested: Math.round(invested),
      returns: Math.round(fv - invested),
      total: Math.round(fv)
    });
  }

  return {
    totalInvestment: Math.round(totalInvestment),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue),
    schedule
  };
}

export interface OptionPayoffPoint {
  spotPrice: number;
  payoff: number;
}

export function calculateOptionPayoff(
  type: 'call' | 'put',
  action: 'buy' | 'sell',
  strike: number,
  premium: number,
  lotSize: number = 50
): {
  maxProfit: number | string;
  maxLoss: number | string;
  breakeven: number;
  points: OptionPayoffPoint[];
} {
  const isCall = type === 'call';
  const isBuy = action === 'buy';

  const breakeven = isCall ? strike + premium : strike - premium;

  const minSpot = Math.max(0, strike - premium * 4);
  const maxSpot = strike + premium * 4;
  const step = (maxSpot - minSpot) / 40;

  const points: OptionPayoffPoint[] = [];

  for (let s = minSpot; s <= maxSpot; s += step) {
    let intrinsic = 0;
    if (isCall) {
      intrinsic = Math.max(0, s - strike);
    } else {
      intrinsic = Math.max(0, strike - s);
    }

    let payoffPerUnit = 0;
    if (isBuy) {
      payoffPerUnit = intrinsic - premium;
    } else {
      payoffPerUnit = premium - intrinsic;
    }

    points.push({
      spotPrice: Math.round(s * 10) / 10,
      payoff: Math.round(payoffPerUnit * lotSize)
    });
  }

  let maxProfit: number | string = 0;
  let maxLoss: number | string = 0;

  if (isBuy) {
    maxLoss = premium * lotSize; // Max loss is premium paid
    maxProfit = isCall ? 'Unlimited' : (strike - premium) * lotSize;
  } else {
    maxProfit = premium * lotSize; // Max profit is premium collected
    maxLoss = isCall ? 'Unlimited' : (strike - premium) * lotSize;
  }

  return {
    maxProfit,
    maxLoss,
    breakeven: Math.round(breakeven * 100) / 100,
    points
  };
}
