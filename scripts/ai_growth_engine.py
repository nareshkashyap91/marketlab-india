import json
import os
import sys

# Set encoding for Windows terminal output
sys.stdout.reconfigure(encoding='utf-8')

# MarketLab India Growth & Traffic Promotion System
# Generates authentic, value-first content for Quora, Reddit, LinkedIn, and Twitter/X

TOOLS_DIRECTORY = [
    {
        "name": "RSI Calculator",
        "url": "https://marketlab-india-blog.vercel.app/tools/rsi-calculator",
        "description": "Wilder 14-period relative strength index smoothing engine with visual gauge",
        "category": "Technical Analysis",
        "sample_question": "How do I calculate 14-day RSI for Indian stocks?"
    },
    {
        "name": "SIP Calculator",
        "url": "https://marketlab-india-blog.vercel.app/tools/sip-calculator",
        "description": "Compound wealth projection table for monthly mutual fund investments",
        "category": "Investing & SIP",
        "sample_question": "How much wealth can ₹10,000 monthly SIP create in 20 years?"
    },
    {
        "name": "Option Payoff Calculator",
        "url": "https://marketlab-india-blog.vercel.app/tools/option-payoff-calculator",
        "description": "Call & Put expiry payoff curves, breakeven spot, and max profit/loss simulator",
        "category": "Options Education",
        "sample_question": "How to calculate breakeven point and max risk in Nifty option buying?"
    },
    {
        "name": "CAGR Calculator",
        "url": "https://marketlab-india-blog.vercel.app/tools/cagr-calculator",
        "description": "Compound Annual Growth Rate & wealth doubling schedule generator",
        "category": "Fundamental Analysis",
        "sample_question": "How to calculate CAGR of a stock over 5 years?"
    },
    {
        "name": "Risk/Reward Calculator",
        "url": "https://marketlab-india-blog.vercel.app/tools/risk-reward-calculator",
        "description": "Position size in shares based on 1:2 risk-reward ratio and max monetary loss",
        "category": "Risk Management",
        "sample_question": "How do professional traders calculate risk-to-reward ratio before taking a trade?"
    }
]

def generate_quora_post(tool):
    return f"""
================================================================================
QUORA & REDDIT PROMOTION TEMPLATE: {tool['name']}
Target Question: "{tool['sample_question']}"
================================================================================

Hi there! 

Calculating this correctly is essential for any serious trader or investor. Here is the exact step-by-step breakdown:

1. The Key Concept:
   {tool['description']}. Understanding the exact math prevents emotional mistakes in the market.

2. Step-by-Step Practical Calculation:
   Instead of doing manual calculations on spreadsheets, you can test your exact price levels and position sizes using open, free quantitative visualizers.

3. Free Interactive Calculator:
   You can use the free {tool['name']} at MarketLab India:
   👉 {tool['url']}

   (It provides real-time calculations, zero-ad clutter, and instant formula breakdowns).

Hope this helps! Let me know if you have any questions on market math.
================================================================================
"""

def generate_twitter_thread(tool):
    return f"""
================================================================================
TWITTER / X THREAD TEMPLATE: {tool['name']}
================================================================================
1/5 📈 Most retail traders lose money because they guess market math instead of calculating it.

Here is a quick masterclass on how to use the {tool['name']} to manage risk effectively 👇

2/5 🔍 What it measures:
{tool['description']}.

3/5 💡 Key Insight:
Never risk more than 1-2% of total capital on a single trade. Always calculate exact breakeven points before entering Nifty or stock positions.

4/5 🛠️ Free Educational Tool:
We built a 100% free, interactive {tool['name']} with live visual charts and zero stock tips.

Try it here:
👉 {tool['url']}

5/5 🔄 Found this helpful? Retweet the first tweet and share with fellow Indian traders! 
Follow @MarketLabIndia for daily data-driven finance education.
================================================================================
"""

def generate_linkedin_post(tool):
    return f"""
================================================================================
LINKEDIN POST TEMPLATE: {tool['name']}
================================================================================
Understanding Market Mathematics: {tool['name']} 📊

In the Indian financial ecosystem, data-driven investing beats emotional guessing every single time.

Whether you are analyzing stock fundamentals, evaluating option payoff curves, or projecting long-term SIP wealth compounding, having exact calculations is crucial.

Key Takeaways:
• {tool['description']}
• Zero stock tips, 100% education-first approach
• Built specifically for Indian investors and quantitative research

Check out our free interactive {tool['name']} tool here:
👉 {tool['url']}

What tools or formulas do you use for your market research? Share your thoughts below! 👇

#IndianStockMarket #FinancialEducation #QuantTrading #Nifty50 #WealthBuilding #MarketLabIndia
================================================================================
"""

def main():
    print("\n--- MARKETLAB INDIA - AI AUTOMATED GROWTH & TRAFFIC GENERATOR ---\n")
    output_content = ""
    for tool in TOOLS_DIRECTORY:
        output_content += generate_quora_post(tool)
        output_content += generate_twitter_thread(tool)
        output_content += generate_linkedin_post(tool)
        output_content += "\n" + "="*80 + "\n\n"
        
    output_filepath = os.path.join(os.path.dirname(__file__), "promotion_bundle.txt")
    with open(output_filepath, "w", encoding="utf-8") as f:
        f.write(output_content)
        
    print(f"SUCCESS: Generated promotional copy bundle for {len(TOOLS_DIRECTORY)} tools.")
    print(f"File saved to: {output_filepath}\n")

if __name__ == "__main__":
    main()
