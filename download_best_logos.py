import os
import requests
from duckduckgo_search import DDGS
from urllib.parse import urlparse

hospitals = [
    # Central
    "Bệnh viện Bạch Mai",
    "Bệnh viện Hữu nghị Việt Đức",
    "Bệnh viện Chợ Rẫy",
    "Bệnh viện Trung ương Quân đội 108",
    "Bệnh viện 103",
    "Bệnh viện 175",
    "Bệnh viện K",
    "Bệnh viện Phổi Trung ương",
    
    # Provincial
    "Sở Y tế Hà Nội",
    "Sở Y tế TP.HCM",
    "Sở Y tế Đà Nẵng",
    "Sở Y tế Nghệ An",
    "Bệnh viện Đa khoa tỉnh Thanh Hóa",
    "Bệnh viện Đa khoa tỉnh Quảng Nam",
    "Bệnh viện Đa khoa tỉnh Bình Dương",
    "Bệnh viện Đa khoa Đồng Nai",
    
    # Private
    "Hệ thống Bệnh viện Tâm Anh",
    "Hệ thống y tế Vinmec",
    "Tập đoàn Y khoa Hoàn Mỹ",
    "Bệnh viện Đa khoa Quốc tế Thu Cúc",
    "Phòng khám Medlatec"
]

out_dir = "public/assets/images/partners_new"
os.makedirs(out_dir, exist_ok=True)

def download(url, dest):
    try:
        r = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        r.raise_for_status()
        with open(dest, "wb") as f:
            f.write(r.content)
        return True
    except Exception as e:
        return False

with DDGS() as ddgs:
    for h in hospitals:
        print(f"Searching logo for {h}...")
        results = ddgs.images(
            keywords=f'"{h}" logo transparent -chi-nhanh -khoa -phong',
            region="vn-vi",
            safesearch="off",
            size="Wallpaper", # filter for good size
            type_image="transparent", # force transparent
            max_results=3
        )
        found = False
        if results:
            for res in results:
                img_url = res.get("image")
                if img_url:
                    ext = img_url.split(".")[-1].split("?")[0].lower()
                    if ext not in ["png", "jpg", "jpeg", "svg", "webp"]:
                        ext = "png"
                    
                    filename = h.replace(" ", "_").replace("Bệnh_viện", "BV") + f".{ext}"
                    filepath = os.path.join(out_dir, filename)
                    
                    print(f"  -> Found: {img_url}")
                    if download(img_url, filepath):
                        found = True
                        break
        
        if not found:
            print(f"  -> Attempt 2 without strict filters")
            results = ddgs.images(f'{h} logo', region="vn-vi", max_results=3)
            for res in results:
                img_url = res.get("image")
                if img_url:
                    ext = img_url.split(".")[-1].split("?")[0].lower()
                    if ext not in ["png", "jpg", "jpeg", "svg", "webp"]:
                        ext = "png"
                    filename = h.replace(" ", "_").replace("Bệnh_viện", "BV") + f".{ext}"
                    filepath = os.path.join(out_dir, filename)
                    print(f"  -> Found (fallback): {img_url}")
                    if download(img_url, filepath):
                        found = True
                        break
