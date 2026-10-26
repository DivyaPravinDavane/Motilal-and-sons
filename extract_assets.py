from PIL import Image
import os

mockup_path = "public/images/reference-mockup.jpg"
img = Image.open(mockup_path)
W, H = img.size
print(f"Reference mockup size: {W}x{H}")

os.makedirs("public/images/extracted", exist_ok=True)

# 1. Hero Bride (Exact bride from prototype)
# In prototype: right side from x~300 to 682, y: 0 to 220
hero_bride = img.crop((300, 0, 682, 220))
hero_bride.save("public/images/extracted/hero-bride-exact.jpg", quality=95)

# 2. Heritage Vintage Craftsman (Left photo with 'Our Heritage' script)
# x~40 to 250, y~245 to 375
heritage_craft = img.crop((40, 240, 250, 375))
heritage_craft.save("public/images/extracted/heritage-craft.jpg", quality=95)

# 3. Signature Collections (6 cards)
# y range: 410 to 510
# Card width roughly (645 - 35)/6 = ~100px each
col_y1, col_y2 = 410, 510
col_cards = [
    ("col-01-bridal", (35, col_y1, 135, col_y2)),
    ("col-02-pearls", (138, col_y1, 238, col_y2)),
    ("col-03-diamonds", (241, col_y1, 341, col_y2)),
    ("col-04-polki", (344, col_y1, 444, col_y2)),
    ("col-05-gold", (447, col_y1, 547, col_y2)),
    ("col-06-gifting", (550, col_y1, 650, col_y2)),
]
for name, box in col_cards:
    c = img.crop(box)
    c.save(f"public/images/extracted/{name}.jpg", quality=95)

# 4. Featured Pieces (6 product items)
# y range: 535 to 630
feat_y1, feat_y2 = 535, 630
feat_cards = [
    ("feat-01-solitaire", (35, feat_y1, 135, feat_y2)),
    ("feat-02-pearls", (138, feat_y1, 238, feat_y2)),
    ("feat-03-polki-choker", (241, feat_y1, 341, feat_y2)),
    ("feat-04-emerald-earrings", (344, feat_y1, 444, feat_y2)),
    ("feat-05-ruby-bracelet", (447, feat_y1, 547, feat_y2)),
    ("feat-06-kundan-ring", (550, feat_y1, 650, feat_y2)),
]
for name, box in feat_cards:
    c = img.crop(box)
    c.save(f"public/images/extracted/{name}.jpg", quality=95)

# 5. Bridal Atelier Bride (Left oxblood panel)
bridal_panel = img.crop((35, 635, 340, 755))
bridal_panel.save("public/images/extracted/bridal-atelier-panel.jpg", quality=95)

# Bridal bride photo
bridal_bride = img.crop((35, 635, 150, 755))
bridal_bride.save("public/images/extracted/bridal-bride-photo.jpg", quality=95)

# 6. Craftsmanship stages (5 items)
craft_y1, craft_y2 = 775, 830
craft_stages = [
    ("craft-01-design", (35, craft_y1, 105, craft_y2)),
    ("craft-02-casting", (115, craft_y1, 185, craft_y2)),
    ("craft-03-setting", (195, craft_y1, 265, craft_y2)),
    ("craft-04-finishing", (275, craft_y1, 345, craft_y2)),
    ("craft-05-hallmarking", (355, craft_y1, 425, craft_y2)),
]
for name, box in craft_stages:
    c = img.crop(box)
    c.save(f"public/images/extracted/{name}.jpg", quality=95)

# 7. Showroom interior photo
showroom = img.crop((245, 868, 355, 938))
showroom.save("public/images/extracted/showroom.jpg", quality=95)

# 8. Certification logos in footer (BIS, GIA, IGI)
certifications = img.crop((530, 955, 650, 980))
certifications.save("public/images/extracted/certifications.jpg", quality=95)

print("All exact mockup assets successfully extracted!")
