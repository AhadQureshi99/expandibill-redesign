// In-house vs. Expandibill — modeled on BellMedEx's cost-comparison framing,
// using rough U.S. industry averages and rephrased.
export const pricing = {
  scenario:
    'Mid-size practice · ~$1M annual collections · 1 biller + 1 coder in-house',
  inHouse: {
    label: 'In-house billing',
    rows: [
      { k: 'Fully-loaded billing salaries', v: 84_000 },
      { k: 'Software, clearinghouse & training', v: 14_000 },
      { k: 'Hiring, turnover & PTO coverage', v: 9_000 },
    ],
    note: 'Plus the hidden cost of denied claims, AR > 90 days, and missed charges.',
  },
  expandibill: {
    label: 'Expandibill (full service)',
    rows: [
      { k: 'Flat % of net collections (≈2.99%)', v: 29_900 },
      { k: 'Software & clearinghouse',           v: 0 },
      { k: 'Coverage / hiring / turnover',       v: 0 },
    ],
    note: 'Everything included — no hidden fees, no lock-in contracts.',
  },
  savingsLabel: 'Average annual savings',
}
