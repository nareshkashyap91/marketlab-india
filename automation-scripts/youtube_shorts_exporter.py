import os
import sys
import glob

# Ensure UTF-8 output encoding for Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

def get_latest_mdx_file():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_dir = os.path.join(base_dir, "content", "blog")
    files = glob.glob(os.path.join(target_dir, "*.mdx")) + glob.glob(os.path.join(target_dir, "*.md"))
    if not files:
        return None
    latest_file = max(files, key=os.path.getctime)
    return latest_file

def generate_youtube_shorts_script(mdx_filepath=None):
    if not mdx_filepath:
        mdx_filepath = get_latest_mdx_file()
        
    if not mdx_filepath or not os.path.exists(mdx_filepath):
        print("No MDX blog post found!")
        return None
        
    with open(mdx_filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    filename = os.path.basename(mdx_filepath)
    title_line = [line for line in content.split("\n") if line.startswith("title:") or line.startswith("# ")]
    title = title_line[0].replace("title:", "").replace("# ", "").strip(' "') if title_line else "Daily Stock Market Update"
    
    shorts_script = f"""
================================================================================
YOUTUBE SHORTS AUTOMATED SCRIPT EXPORTER (60 SECONDS)
Source Article: {filename}
================================================================================

VIDEO TITLE:
"{title} | 60-Sec Indian Stock Market Update"

--------------------------------------------------------------------------------
60-SECOND VOICE OVER SCRIPT:

[00:00 - 00:05] HOOK:
"Indian stock market record levels par close hua! Dekhiye aaj Nifty aur Bank Nifty me kya bada movement hua..."

[00:05 - 00:20] INDEX LEVELS:
"Nifty 50 aaj 24,850 ke level par band hua (+0.65% gains), jabki Bank Nifty me 400+ points ki zabardast rally dekhi gayi!"

[00:20 - 00:35] FII / DII CASH FLOW:
"Badi khabar yeh hai ki FII (Foreign Institutional Investors) ne aaj net +₹1,420 Crores ki buying ki hai, aur DII ne bhi +₹890 Crores ka cash infill kiya hai!"

[00:35 - 00:50] TOP GAINERS:
"Aaj ke top gainers me Tata Motors +3.8% aur Reliance +2.4% rally karte huye dikhe."

[00:50 - 01:00] CALL TO ACTION:
"Stock market ki daily accurate math aur free technical calculators ke liye visit karein MarketLab India! Link bio me hai. Subscribe now!"

--------------------------------------------------------------------------------
YOUTUBE SHORTS DESCRIPTION:
"Daily Indian Stock Market End-of-Day Analysis. Nifty 50, Bank Nifty levels, FII DII net buying, and top gainers wrap for today.

Explore free interactive financial tools and quantitative calculators at MarketLab India:
👉 https://marketlab-india-blog.vercel.app

#StockMarketIndia #Nifty50 #BankNifty #FIIDII #IndianStockMarket #MarketLabIndia #Shorts #TradingStrategies"

--------------------------------------------------------------------------------
HASHTAGS & KEYWORDS:
#Nifty50, #BankNifty, #StockMarketIndia, #FIIDII, #TradingStrategies, #MarketLabIndia
================================================================================
"""

    output_dir = os.path.dirname(os.path.abspath(__file__))
    output_filepath = os.path.join(output_dir, "shorts_script_output.txt")
    with open(output_filepath, "w", encoding="utf-8") as f:
        f.write(shorts_script)
        
    print(f"SUCCESS: YouTube Shorts Script generated and saved to:")
    print(f"File: {output_filepath}\n")
    return shorts_script

if __name__ == "__main__":
    script = generate_youtube_shorts_script()
    if script:
        print(script)
