const products = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    description:
      "A soft, breathable, and eco-friendly T-shirt made from 100% organic cotton. A versatile staple for any wardrobe.",
    review: 4,
    price: 30,
    material: "100% Cotton",
    stock: 140,
    color: 3, // Gris claro (#F2F2F2)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220475/fashion-4056729_1280_tdvmuh.jpg",
  },
  {
    id: 2,
    name: "Orange Bomber Jacket",
    description:
      "Minimalist solid orange bomber jacket with a modern silhouette — perfect for bold streetwear looks.",
    review: 4,
    price: 80,
    material: "Recycled Polyester",
    stock: 60,
    color: 8, // Naranja (#FF7000)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220495/tobias-tullius-Fg15LdqpWrs-unsplash_bicncd.jpg",
  },
  {
    id: 3,
    name: "Recycled Polyester Joggers",
    description:
      "Comfortable joggers made from 100% recycled polyester, offering flexibility and style while being environmentally friendly.",
    review: 4,
    price: 60,
    material: "100% Recycled Polyester",
    stock: 120,
    color: 5,
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220475/frank-flores-eyFcZLLYvfA-unsplash_fq3yav.jpg",
  },
  {
    id: 4,
    name: "Recycled Fabric Sweatpants",
    description:
      "Sustainable sweatpants made from 100% recycled fabric, offering comfort and eco-conscious style for lounging or casual outings.",
    review: 4,
    price: 55,
    material: "100% Recycled Fabric",
    stock: 130,
    color: 10,
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220482/luis-sanchez-XShgRpGVd9w-unsplash_pni3mo.jpg",
  },
  {
    id: 5,
    name: "Crew Neck Basic T-Shirt",
    description:
      "Soft and comfortable crew neck T‑shirt in a warm cream hue. Perfect for everyday wear.",
    review: 4,
    price: 29,
    material: "100% Cotton",
    stock: 150,
    color: 12, // Beige (#DEDEB0)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220469/andrew-davie-h0qUAPHoXmE-unsplash_s09ov1.jpg",
  },
  {
    id: 6,
    name: "Floral Patterned Shirt",
    description:
      "Lightweight short‑sleeve shirt with vibrant floral print, ideal for casual and summer outings.",
    review: 4,
    price: 45,
    material: "100% Viscose",
    stock: 80,
    color: 6, // Terracota (#D35400) como acento más fuerte
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220470/charles-robert-PL31ZDaj13A-unsplash_xo1bfo.jpg",
  },
  {
    id: 7,
    name: "Black Graphic Tee",
    description:
      "Classic black T‑shirt featuring subtle text design, perfect for versatile styling.",
    review: 5,
    price: 32,
    material: "100% Cotton",
    stock: 120,
    color: 2, // Negro carbón (#1A1A1A)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220473/faith-yarn-hgtWvsq5e2c-unsplash_sh8pdc.jpg",
  },

  {
    id: 8,
    name: "Blue Printed Back Tee",
    description:
      "Modern T-shirt in navy blue with a bold back print, combining casual style with artistic flair.",
    review: 4,
    price: 38,
    material: "100% Organic Cotton",
    stock: 100,
    color: 5, // Azul marino (#2C3E50)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220472/don-delfin-almonte-ebTNU_YTWgc-unsplash_qghotf.jpg",
  },
  {
    id: 9,
    name: "Black Graphic Back T-Shirt",
    description:
      "Classic black T-shirt featuring bold artwork on the back — perfect for urban styling.",
    review: 5,
    price: 42,
    material: "100% Cotton",
    stock: 95,
    color: 2, // Negro carbón (#1A1A1A)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220494/tj-sedisa-aH6Fj6i6CxA-unsplash_nexvkw.jpg",
  },
  {
    id: 10,
    name: "Elegant White Crop Top",
    description:
      "A sleek and refined white crop top, ideal for layering or wearing solo on warm days.",
    review: 5,
    price: 34,
    material: "Organic Cotton Blend",
    stock: 110,
    color: 1, // Blanco puro (#FFFFFF)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220467/ana-itonishvili-iM0_ZkaexlI-unsplash_cjjbkh.jpg",
  },
  {
    id: 11,
    name: "Oversized Smile Tee",
    description:
      "Relaxed oversized white tee with a cheerful smiley print on the front. Fun and comfy.",
    review: 4,
    price: 33,
    material: "100% Organic Cotton",
    stock: 130,
    color: 1, // Blanco puro (#FFFFFF)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220494/the-graphic-space-FTrGeAy0RW4-unsplash_we1o1k.jpg",
  },
  {
    id: 12,
    name: "Classic White Button-Up Shirt",
    description:
      "A timeless white button-up shirt for both formal and casual looks. Crisp and breathable.",
    review: 5,
    price: 48,
    material: "100% Organic Linen",
    stock: 90,
    color: 1, // Blanco puro (#FFFFFF)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220485/man-8163603_1280_vfy2tw.jpg",
  },
  {
    id: 13,
    name: "Long Brown Winter Coat",
    description:
      "Classic long brown winter coat, perfect for layering in cold weather with elegant London-inspired tailoring.",
    review: 5,
    price: 120,
    material: "Recycled Wool Blend",
    stock: 45,
    color: 11, // Marrón (#8B4513)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220486/man-9182458_1280_wurhdr.jpg",
  },
  {
    id: 14,
    name: "Olive Nylon Windbreaker",
    description:
      "Lightweight nylon windbreaker in olive green — water-resistant and ideal for transitional weather.",
    review: 4,
    price: 70,
    material: "100% Recycled Nylon",
    stock: 80,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220480/kyle-loftus-6TIoPIpMvLc-unsplash_vyrnlo.jpg",
  },
  {
    id: 15,
    name: "Red Overshirt Jacket",
    description:
      "Thick red overshirt-style jacket with buttons, combining warmth and structure for cooler seasons.",
    review: 5,
    price: 75,
    material: "Organic Cotton Twill",
    stock: 55,
    color: 9, // Rojo (#B30000)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220478/joshua-rondeau-QuEKZs3JDvY-unsplash_q86p4b.jpg",
  },
  {
    id: 16,
    name: "Heavy Olive Jacket",
    description:
      "Heavyweight olive green jacket without hood — rugged and warm for outdoor comfort.",
    review: 4,
    price: 90,
    material: "Recycled Canvas",
    stock: 65,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220477/iam_os-9wM5SCjhsOM-unsplash_uhmqzn.jpg",
  },
  {
    id: 17,
    name: "Striped Green Blazer",
    description:
      "Modern striped blazer in earthy green tones — lightweight yet stylish for formal or smart casual wear.",
    review: 4,
    price: 95,
    material: "Organic Cotton Blend",
    stock: 50,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220470/dan-asaki-CqwVcsOZil4-unsplash_zjm7zp.jpg",
  },
  {
    id: 18,
    name: "Classic Blue Denim Jacket",
    description:
      "Timeless denim jacket in deep blue, ideal for layering through seasons with a rugged edge.",
    review: 5,
    price: 85,
    material: "Organic Denim",
    stock: 70,
    color: 5, // Azul marino (#2C3E50)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/adrian-dascal-1QOsJGbNIgk-unsplash_ylpdb2.jpg",
  },
  {
    id: 19,
    name: "Olive Gray Bucket Hat",
    description:
      "A stylish bucket hat in an olive-gray tone, perfect for sun protection and everyday wear.",
    review: 4,
    price: 28,
    material: "Recycled Cotton Blend",
    stock: 90,
    color: 4, // Gris pizarra (#7D7D7D)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/aedrian-salazar-RlnvkAjO7mM-unsplash_ain73p.jpg",
  },
  {
    id: 20,
    name: "Mint Tree Baseball Cap",
    description:
      "Minimalist baseball cap in a light mint tone with a front tree print. Fresh and eco-friendly.",
    review: 4,
    price: 30,
    material: "Organic Cotton",
    stock: 85,
    color: 12, // Beige (#DEDEB0), por ser menta muy claro casi blanco
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/ahmed-syed-6NVrH0HB_DE-unsplash_sa56mw.jpg",
  },
  {
    id: 21,
    name: "Dark Gray Ivy Cap",
    description:
      "Classic ivy cap in dark gray for a vintage-inspired, elegant casual look.",
    review: 5,
    price: 35,
    material: "Recycled Wool Blend",
    stock: 60,
    color: 4, // Gris pizarra (#7D7D7D)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220482/man-6625945_1280_jrrfhz.jpg",
  },
  {
    id: 22,
    name: "Beige Text Baseball Cap",
    description:
      "Trendy beige baseball cap with bold front text — a clean, sporty finish to any outfit.",
    review: 4,
    price: 30,
    material: "100% Organic Cotton",
    stock: 75,
    color: 12, // Beige (#DEDEB0)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220491/sara-zivic-bphd4YyYXjE-unsplash_qrkhks.jpg",
  },
  {
    id: 23,
    name: "Light Orange Trilby Hat",
    description:
      "Light orange trilby hat — a modern take on a vintage classic. Bold, stylish, and lightweight.",
    review: 4,
    price: 40,
    material: "Organic Linen",
    stock: 50,
    color: 8, // Naranja (#FF7000)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220493/soroush-alavi-PVvoEQH6cOI-unsplash_ygs6wt.jpg",
  },
  {
    id: 24,
    name: "Patched Skinny Jeans",
    description:
      "Skinny-fit distressed jeans with unique patchwork details — modern and edgy.",
    review: 4,
    price: 68,
    material: "Organic Cotton Denim",
    stock: 80,
    color: 5, // Azul marino
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220467/alicia-petresc-BciCcl8tjVU-unsplash_hhpo9g.jpg",
  },
  {
    id: 25,
    name: "Wide Leg Loose Jeans",
    description:
      "Relaxed-fit wide-leg jeans for a comfortable and laid-back streetwear look.",
    review: 4,
    price: 65,
    material: "Recycled Denim",
    stock: 85,
    color: 5, // Azul marino
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220476/happy-face-emoji-5ervPMKFr50-unsplash_ppgucb.jpg",
  },
  {
    id: 26,
    name: "Modern Loose Jeans",
    description:
      "Modern cut jeans with a refined wide silhouette — lightweight and stylish.",
    review: 5,
    price: 72,
    material: "Organic Cotton Blend",
    stock: 70,
    color: 5, // Azul marino
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220478/kai-s-photography-2s3GhhJz2uY-unsplash_k5sdua.jpg",
  },
  {
    id: 27,
    name: "Black Utility Cargo Pants",
    description:
      "Black utility pants with oversized pockets — rugged and functional.",
    review: 4,
    price: 60,
    material: "Recycled Polyester",
    stock: 65,
    color: 2, // Negro carbón
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220481/kyle-loftus-d5GlpSOAzzg-unsplash_rm0rln.jpg",
  },
  {
    id: 28,
    name: "Black Cropped Polyester Pants",
    description:
      "Slim-fit cropped pants in black polyester — minimal and breathable.",
    review: 4,
    price: 55,
    material: "100% Recycled Polyester",
    stock: 75,
    color: 2, // Negro carbón
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220488/napat-saeng-Iing2lv2WBw-unsplash_wvuozc.jpg",
  },
  {
    id: 29,
    name: "Beige Cuffed Pants",
    description:
      "Neutral beige pants with an elastic cuffed finish — clean, soft, and versatile.",
    review: 5,
    price: 58,
    material: "Organic Cotton",
    stock: 90,
    color: 12, // Beige
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220491/redd-francisco-jC7nVH_Sw8k-unsplash_vgd9mf.jpg",
  },
  {
    id: 30,
    name: "Light Blue Skinny Jeans",
    description:
      "Slim-fit light blue jeans with a clean, minimal design — everyday denim essential.",
    review: 4,
    price: 64,
    material: "Organic Cotton",
    stock: 85,
    color: 5, // Azul marino
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220493/skinny-2593347_1280_cetbq8.jpg",
  },
  {
    id: 31,
    name: "Red Plaid Wide Pants",
    description:
      "Formal wide-leg trousers with red plaid pattern — stylish and bold.",
    review: 5,
    price: 70,
    material: "Recycled Cotton Blend",
    stock: 60,
    color: 9, // Rojo
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220493/stephanie-tuohy-hrzqFwpsFkA-unsplash_be47c6.jpg",
  },
  {
    id: 32,
    name: "Colorful Everyday Beanie",
    description:
      "Classic knit beanie available in a variety of earth-tone colors. Comfortable, warm, and eco-conscious.",
    review: 4,
    price: 28,
    material: "Organic Cotton",
    stock: 100,
    color: 4, // Gris pizarra (#7D7D7D) como tono neutro base para la variedad
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220473/fabio-alves-MNzyXXfnnCg-unsplash_smllbb.jpg",
  },
  {
    id: 33,
    name: "Black Beanie with Red Patch",
    description:
      "Minimalist black beanie featuring a bold red patch — cozy and expressive for cooler days.",
    review: 5,
    price: 30,
    material: "Organic Hemp Blend",
    stock: 70,
    color: 2, // Negro carbón (#1A1A1A) como color base
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220494/toa-heftiba-ua9ReZlzcIE-unsplash_dkjwih.jpg",
  },
  {
    id: 34,
    name: "Classic White Sweater",
    description:
      "A soft, elegant white sweater — minimalist, breathable, and perfect for layering.",
    review: 4,
    price: 60,
    material: "Organic Cotton",
    stock: 90,
    color: 1, // Blanco puro (#FFFFFF)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/alessia-marusova-KlkfFwXXbXc-unsplash_eksai1.jpg",
  },
  {
    id: 35,
    name: "Soft Pink Sweater",
    description:
      "Delicate pink sweater with a soft touch — cozy and versatile for every season.",
    review: 5,
    price: 62,
    material: "Organic Cotton Blend",
    stock: 75,
    color: 7, // Rosa palo (#EEC9C9)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220467/alex-perri-At__EKm5PGE-unsplash_vt8p65.jpg",
  },
  {
    id: 36,
    name: "Athletic Fit Street Sweater",
    description:
      "Sporty and casual sweater designed for streetwear comfort with durable fabric.",
    review: 4,
    price: 58,
    material: "Recycled Cotton Blend",
    stock: 85,
    color: 3, // Gris claro (#F2F2F2) — color base típico de streetwear
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220469/andrew-valdivia-0Wc1xvxm-U0-unsplash_baj6hf.jpg",
  },
  {
    id: 37,
    name: "Dark Green Knit Sweater",
    description:
      "High-neck sweater in deep green tone — warm and sophisticated for colder weather.",
    review: 5,
    price: 70,
    material: "Recycled Wool",
    stock: 60,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220471/david-suarez-4a1nNlrS5ZI-unsplash_xcpzue.jpg",
  },
  {
    id: 38,
    name: "Loose Fit Light Green Sweater",
    description:
      "Relaxed-fit sweater in a soft, light green hue. Lightweight, cozy, and ideal for casual looks.",
    review: 4,
    price: 64,
    material: "Organic Cotton",
    stock: 80,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220472/elizeu-dias-mcdao5RP4hI-unsplash_a8mqxz.jpg",
  },
  {
    id: 39,
    name: "Beige Summer Sweater",
    description:
      "Lightweight summer sweater in neutral beige tone — ideal for breezy evenings.",
    review: 4,
    price: 55,
    material: "Organic Linen Blend",
    stock: 95,
    color: 12, // Beige (#DEDEB0)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220477/jonathan-zerger-O7heAa5fYj4-unsplash_etbao3.jpg",
  },
  {
    id: 40,
    name: "Chunky Red Knit Sweater",
    description:
      "Bold, thick-knit red sweater — warm and eye-catching for winter layering.",
    review: 5,
    price: 72,
    material: "Recycled Wool Blend",
    stock: 65,
    color: 9, // Rojo (#B30000)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220493/spencer-davis-_-pNeo5uDBs-unsplash_fnwhfd.jpg",
  },
  {
    id: 41,
    name: "White V-Neck Button Sweater",
    description:
      "Elegant white V-neck sweater with button detail — feminine and timeless.",
    review: 4,
    price: 63,
    material: "Organic Cotton",
    stock: 85,
    color: 1, // Blanco puro (#FFFFFF)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220493/supermarket-8375344_1280_nuavdo.jpg",
  },
  {
    id: 42,
    name: "Multicolor Open Knit Sweater",
    description:
      "Open-front sweater with a vibrant multicolor pattern. Cozy and artistic for unique style.",
    review: 5,
    price: 68,
    material: "Recycled Yarn",
    stock: 50,
    color: 6, // Terracota (#D35400) como tono base predominante del patrón
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220494/tandem-x-visuals-cnkfZ8GujBg-unsplash_uhotdy.jpg",
  },
  {
    id: 43,
    name: "London Style Brown Sweater",
    description:
      "Refined brown sweater inspired by classic London fashion — warm and rich in texture.",
    review: 5,
    price: 70,
    material: "Recycled Wool",
    stock: 70,
    color: 11, // Marrón (#8B4513)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220497/woman-6771288_1280_i36sn7.jpg",
  },
  {
    id: 44,
    name: "Black Stretch Polyester Shorts",
    description:
      "Long, stretchy black shorts made from breathable polyester — ideal for workouts and summer activities.",
    review: 4,
    price: 48,
    material: "Recycled Polyester",
    stock: 85,
    color: 2, // Negro carbón (#1A1A1A)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/aj-alao-1UpSKFSOhKg-unsplash_axxmbj.jpg",
  },
  {
    id: 45,
    name: "Brown Denim Shorts",
    description:
      "Short-cut denim shorts in a rich brown tone — rugged and perfect for casual days.",
    review: 4,
    price: 52,
    material: "Organic Denim",
    stock: 70,
    color: 11, // Marrón (#8B4513)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220467/andrei-koscina-jKMdDvs1Kdw-unsplash_yu23gu.jpg",
  },
  {
    id: 46,
    name: "Dark Green Denim Shorts",
    description:
      "Dark green jean shorts with a fitted design — durable and fresh for warm weather.",
    review: 5,
    price: 50,
    material: "Recycled Cotton",
    stock: 65,
    color: 10, // Verde (#6B8E23)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220477/jasmin-chew-IvqEWtgttXI-unsplash_eru8gm.jpg",
  },
  {
    id: 47,
    name: "Multicolor Swim Shorts",
    description:
      "Vibrant multicolor swim shorts with a dominant blue tone — lightweight and quick-drying.",
    review: 4,
    price: 46,
    material: "Recycled Nylon",
    stock: 90,
    color: 5, // Azul marino (#2C3E50) como color predominante
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220486/marcel-strauss-DZR8ZchGhaM-unsplash_u7mudb.jpg",
  },
  {
    id: 48,
    name: "Gold Chain Necklace",
    description:
      "Bold gold chain necklace — minimal yet powerful for everyday or statement wear.",
    review: 5,
    price: 40,
    material: "Recycled Brass with Gold Finish",
    stock: 100,
    color: 13, // Golden (#DAA520)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220466/alberto-rodriguez-santana-EU-KuIDEbKU-unsplash_hakxkp.jpg",
  },
  {
    id: 49,
    name: "Gold Drop Pendant Necklace",
    description:
      "Delicate gold chain featuring a teardrop-shaped pendant — elegant and timeless.",
    review: 5,
    price: 42,
    material: "Recycled Brass with Gold Finish",
    stock: 90,
    color: 13, // Golden (#DAA520)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220470/baptista-ime-james-__JzpzhTTWY-unsplash_rbgy6g.jpg",
  },
  {
    id: 50,
    name: "Silver Circle Pendant Necklace",
    description:
      "Refined silver chain with a round pendant — perfect for layering or wearing alone.",
    review: 4,
    price: 38,
    material: "Recycled Stainless Steel",
    stock: 80,
    color: 4, // Gris pizarra (#7D7D7D) como metálico neutral
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220472/diogo-brandao-iZQasxibkjE-unsplash_nbm3z0.jpg",
  },
  {
    id: 51,
    name: "Gold Star Earrings",
    description:
      "Statement star-shaped earrings in gold finish — bold and playful for standout looks.",
    review: 4,
    price: 36,
    material: "Recycled Brass with Gold Finish",
    stock: 95,
    color: 13, // Golden (#DAA520)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220475/gabrielle-henderson-XTp4ZzD76Xw-unsplash_ydvnuv.jpg",
  },
  {
    id: 52,
    name: "Geometric Gold Bracelets",
    description:
      "Set of large geometric bracelets in gold — strong and artistic pieces.",
    review: 5,
    price: 45,
    material: "Recycled Alloy",
    stock: 85,
    color: 13, // Golden (#DAA520)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220487/mike-von-qsJ5itg93WY-unsplash_gxsjdw.jpg",
  },
  {
    id: 53,
    name: "Silver Street Chain",
    description:
      "Chunky silver street-style chain — inspired by urban fashion and hip-hop culture.",
    review: 4,
    price: 50,
    material: "Recycled Steel",
    stock: 70,
    color: 4, // Gris pizarra (#7D7D7D)
    image_url:
      "https://res.cloudinary.com/drylkx2mg/image/upload/v1741220492/sirio-HXaMrVsIrVI-unsplash_l5eup8.jpg",
  },
];

const categories = [
  {
    id: 1,
    name: "Shirt",
    description:
      "Eco-friendly shirts made from organic materials like cotton, perfect for casual wear.",
  },
  {
    id: 2,
    name: "Jacket",
    description:
      "Sustainable jackets made from organic and recycled materials for the cooler days.",
  },
  {
    id: 3,
    name: "Hat",
    description:
      "Stylish hats made from eco-conscious materials, designed for sun protection and fashion.",
  },
  {
    id: 4,
    name: "Beanies",
    description:
      "Warm beanies made from organic materials like hemp and cotton, perfect for colder weather.",
  },
  {
    id: 5,
    name: "Pants",
    description:
      "Sustainable pants made from organic cotton and recycled fabrics, designed for comfort and style.",
  },
  {
    id: 6,
    name: "Shorts",
    description:
      "Lightweight and breathable shorts made from organic fabrics, ideal for warm weather.",
  },
  {
    id: 7,
    name: "Accessories",
    description:
      "Eco-friendly accessories like caps, bags, and scarves made from sustainable materials.",
  },
  {
    id: 8,
    name: "Sweater",
    description:
      "Cozy and warm sweaters made from organic and recycled materials, perfect for layering.",
  },
];

const productCategories = [
  // Shirts
  { product_id: 1, category_id: 1 },
  { product_id: 5, category_id: 1 },
  { product_id: 6, category_id: 1 },
  { product_id: 7, category_id: 1 },
  { product_id: 8, category_id: 1 },
  { product_id: 9, category_id: 1 },
  { product_id: 10, category_id: 1 },
  { product_id: 11, category_id: 1 },
  { product_id: 12, category_id: 1 },

  // Jackets
  { product_id: 2, category_id: 2 },
  { product_id: 13, category_id: 2 },
  { product_id: 14, category_id: 2 },
  { product_id: 15, category_id: 2 },
  { product_id: 16, category_id: 2 },
  { product_id: 17, category_id: 2 },
  { product_id: 18, category_id: 2 },

  // Hats
  { product_id: 19, category_id: 3 },
  { product_id: 20, category_id: 3 },
  { product_id: 21, category_id: 3 },
  { product_id: 22, category_id: 3 },
  { product_id: 23, category_id: 3 },

  // Pants
  { product_id: 3, category_id: 5 },
  { product_id: 24, category_id: 5 },
  { product_id: 25, category_id: 5 },
  { product_id: 26, category_id: 5 },
  { product_id: 27, category_id: 5 },
  { product_id: 28, category_id: 5 },
  { product_id: 29, category_id: 5 },
  { product_id: 30, category_id: 5 },
  { product_id: 31, category_id: 5 },

  // Beanies
  { product_id: 32, category_id: 4 },
  { product_id: 33, category_id: 4 },

  // Sweaters
  { product_id: 34, category_id: 8 },
  { product_id: 35, category_id: 8 },
  { product_id: 36, category_id: 8 },
  { product_id: 37, category_id: 8 },
  { product_id: 38, category_id: 8 },
  { product_id: 39, category_id: 8 },
  { product_id: 40, category_id: 8 },
  { product_id: 41, category_id: 8 },
  { product_id: 42, category_id: 8 },
  { product_id: 43, category_id: 8 },

  // Shorts
  { product_id: 4, category_id: 6 },
  { product_id: 44, category_id: 6 },
  { product_id: 45, category_id: 6 },
  { product_id: 46, category_id: 6 },
  { product_id: 47, category_id: 6 },

  // Accessories
  { product_id: 48, category_id: 7 },
  { product_id: 49, category_id: 7 },
  { product_id: 50, category_id: 7 },
  { product_id: 51, category_id: 7 },
  { product_id: 52, category_id: 7 },
  { product_id: 53, category_id: 7 },
];

export { products, categories, productCategories };
