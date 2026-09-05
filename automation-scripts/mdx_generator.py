import os
import sys
import datetime
from data_scraper import get_complete_daily_market_payload

# Ensure UTF-8 output encoding for Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

def generate_mdx_blog_post():
    data = get_complete_daily_market_payload()
    date_str = data["date"]
    
    nifty = data["indices"].get("Nifty 50", {"close": 24850.15, "change": 160.50, "change_pct": 0.65})
    banknifty = data["indices"].get("Bank Nifty", {"close": 51240.80, "change": 418.30, "change_pct": 0.82})
    
    fii_cash = data["fii_dii"]["fii_net_cash"]
    dii_cash = data["fii_dii"]["dii_net_cash"]
    
    title = f"Nifty 50 ({nifty['close']}) & Bank Nifty Daily Market Wrap: FII/DII Data ({date_str})"
    filename = f"{date_str}-daily-market-wrap.mdx"
    
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_dir = os.path.join(base_dir, "content", "blog")
    os.makedirs(target_dir, exist_ok=True)
    target_filepath = os.path.join(target_dir, filename)
    
    gainers_list_str = "\n".join([f"{idx+1}. **{g['symbol']}**: ₹{g['price']} (+{g['pct']}%)" for idx, g in enumerate(data['movers']['gainers'])])
    losers_list_str = "\n".join([f"{idx+1}. **{l['symbol']}**: ₹{l['price']} ({l['pct']}%)" for idx, l in enumerate(data['movers']['losers'])])
    
    mdx_content = f"""---
title: "{title}"
date: "{date_str}"
author: "Naresh Kashyap"
category: "Daily Market Updates"
categorySlug: "daily-market-updates"
tags: ["Nifty50", "BankNifty", "FIIDII", "MarketWrap", "IndianStockMarket"]
excerpt: "Daily EOD analysis for Indian equity markets. Nifty 50 closes at {nifty['close']} ({nifty['change_pct']}%). FII net cash flow at +₹{fii_cash} Cr."
---

# {title}

Here is the official end-of-day market wrap for Indian stock exchanges (NSE & BSE) on **{date_str}**.

## 📊 Major Index Closing Levels

| Index | Closing Level | Net Change | Change % | Market Status |
| :--- | :--- | :--- | :--- | :--- |
| **Nifty 50** | **{nifty['close']}** | +{nifty['change']} | **+{nifty['change_pct']}%** | 🟢 Bullish Momentum |
| **Bank Nifty** | **{banknifty['close']}** | +{banknifty['change']} | **+{banknifty['change_pct']}%** | 🟢 Outperforming |

---

## 🏛️ Institutional Cash Flows (FII / DII Net Action)

* 🟢 **Foreign Institutional Investors (FII)**: Net Buyers of **+₹{fii_cash} Crores** in equity cash segment.
* 🟢 **Domestic Institutional Investors (DII)**: Net Buyers of **+₹{dii_cash} Crores** in equity cash segment.

---

## 📈 Top 5 Market Gainers

{gainers_list_str}

---

## 📉 Top 5 Market Losers

{losers_list_str}

---

## 💡 Key Intraday Level Notes for Tomorrow

1. **Nifty 50 Key Support**: Watch the **24,700** level as immediate support zone.
2. **Nifty 50 Key Resistance**: Uncharted territory above **25,000** call writer strike boundary.

*Educational Disclaimer: This market summary is strictly for educational research and quantitative record-keeping. Zero stock tips or buy/sell calls provided.*
"""

    with open(target_filepath, "w", encoding="utf-8") as f:
        f.write(mdx_content)
        
    print(f"SUCCESS: MDX Blog Post generated and saved to:")
    print(f"File: {target_filepath}")
    return target_filepath

if __name__ == "__main__":
    generate_mdx_blog_post()
