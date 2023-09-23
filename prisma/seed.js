// Import the Prisma client
const { PrismaClient } = require("@prisma/client");

// Initialize the Prisma client
const prisma = new PrismaClient();

// Define the seedProducts function to populate the database
async function seedProducts() {
  try {
    // Create product entries
    await prisma.products.createMany({
      data: [
        {
          title: "Leather Bag",
          description:
            "A stylish and high-quality brown leather bag for everyday use. Spacious and durable, it's perfect for carrying your essentials in style.",
          price: 2500,
          url: "https://picsum.photos/id/7",
        },
        {
          title: "Slim Fit T-Shirts",
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          price: 2300,
          url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
          title: "Cotton Jacket",
          description:
            "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          price: 5600,
          url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
          title: "Slim Fit",
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          price: 1600,
          url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
          title: "Gold Chain Bracelet",
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          price: 69500,
          url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "Gold Necklace",
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          price: 16800,
          url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "Gold Ring",
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          price: 9999,
          url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "Rose Earrings",
          description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          price: 1100,
          url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "Hard Drive",
          description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          price: 6500,
          url: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        },
        {
          title: "Internal SSD",
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          price: 11000,
          url: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        },
        {
          title: "256GB SSD",
          description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          price: 10900,
          url: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        },
        {
          title: "Gaming Drive",
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          price: 11400,
          url: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        },
        {
          title: "Full HD Monitor",
          description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250",
          price: 59900,
          url: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        },
        {
          title: "Gaming Monitor",
          description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          price: 99999,
          url: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        },
        {
          title: "Snowboard Jacket",
          description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          price: 5700,
          url: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        },
        {
          title: "Leather Moto Jacket",
          description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          price: 2995,
          url: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        },
        {
          title: "Rain Jacket",
          description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          price: 3999,
          url: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
        {
          title: "Short Sleeve Top",
          description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          price: 990,
          url: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        },
        {
          title: "V-Neck T-Shirt",
          description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          price: 795,
          url: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        },
        {
          title: "Casual Cotton Tee",
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          price: 1299,
          url: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        },
        {
          title: "Brown Leather Bag",
          description:
            "A stylish and high-quality brown leather bag for everyday use. Spacious and durable, it's perfect for carrying your essentials in style.",
          url: "https://picsum.photos/id/7",
          price: 2500,
        },
        {
          title: "School Books",
          description:
            "A set of essential school books for students of all ages. These books cover a wide range of subjects and are perfect for learning.",
          url: "https://picsum.photos/id/20",
          price: 1999,
        },
        {
          title: "Women's White Shoes",
          description:
            "Elegant women's white shoes made with high-quality materials. Comfortable and stylish, these shoes are a perfect fit for any occasion.",
          url: "https://picsum.photos/id/21",
          price: 9999,
        },
        {
          title: "Old Book",
          description:
            "An antique book with historical significance. A collector's item that tells a story of the past.",
          url: "https://picsum.photos/id/24",
          price: 5999,
        },
        {
          title: "Cuban Mug",
          description:
            "A handmade Cuban mug with unique designs. Enjoy your favorite beverages in style with this authentic piece of craftsmanship.",
          url: "https://picsum.photos/id/30",
          price: 1299,
        },
        {
          title: "Barrel of Oil",
          description:
            "A barrel of high-quality oil for industrial use. Ideal for various applications in manufacturing and energy production.",
          url: "https://picsum.photos/id/34",
          price: 6589,
        },
        {
          title: "Camera Gadgets",
          description:
            "A collection of camera gadgets and accessories to enhance your photography experience. Capture memories like a pro.",
          url: "https://picsum.photos/id/36",
          price: 22499,
        },
        {
          title: "Old Record Player",
          description:
            "A vintage record player that brings back the nostalgic sound of vinyl records. Perfect for music enthusiasts.",
          url: "https://picsum.photos/id/39",
          price: 23599,
        },
        {
          title: "Dinner Table",
          description:
            "A stylish and elegant dinner table for your dining room. Gather your family and friends for memorable meals.",
          url: "https://picsum.photos/id/42",
          price: 8999,
        },
        {
          title: "Mac Book Pro",
          description:
            "The latest Mac Book Pro with top-notch performance. A reliable companion for work and creativity.",
          url: "https://picsum.photos/id/48",
          price: 159599,
        },
        {
          title: "Light House",
          description:
            "A miniature model of a beautiful lighthouse. A decorative piece that adds charm to any room or space.",
          url: "https://picsum.photos/id/58",
          price: 999599,
        },
        {
          title: "Computer with accessories",
          description:
            "A complete computer setup with all the essential accessories. Get ready for productivity and entertainment.",
          url: "https://picsum.photos/id/60",
          price: 9699,
        },
        {
          title: "Cup of Tea",
          description:
            "A handcrafted cup for enjoying your favorite tea blends. Sip in comfort and style with this unique piece.",
          url: "https://picsum.photos/id/60",
          price: 125,
        },
        {
          title: "Playstation Controller",
          description:
            "A brand new Playstation controller for immersive gaming experiences. Elevate your gaming to the next level.",
          url: "https://picsum.photos/id/96",
          price: 1599,
        },
        {
          title: "Rasberries",
          description:
            "Fresh and juicy raspberries, perfect for snacking or adding a burst of flavor to your favorite recipes.",
          url: "https://picsum.photos/id/102",
          price: 259,
        },
        {
          title: "Old Car",
          description:
            "A classic vintage car that's a true collector's gem. A piece of automotive history that turns heads on the road.",
          url: "https://picsum.photos/id/111",
          price: 104959,
        },
        {
          title: "Mac Mini",
          description:
            "The compact and powerful Mac Mini for your computing needs. Small in size, big in performance.",
          url: "https://picsum.photos/id/119",
          price: 99999,
        },
        {
          title: "Old Bench",
          description:
            "A vintage bench with intricate woodwork. A charming addition to your garden or outdoor space.",
          url: "https://picsum.photos/id/129",
          price: 8999,
        },
        {
          title: "Broken Cars",
          description:
            "Damaged cars for those who enjoy restoration projects. A challenge for automotive enthusiasts.",
          url: "https://picsum.photos/id/133",
          price: 256595,
        },
        {
          title: "Guitar",
          description:
            "A professional-grade guitar for musicians and enthusiasts. Create beautiful music with this quality instrument.",
          url: "https://picsum.photos/id/145",
          price: 12595,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the seedProducts function to populate the database
seedProducts();
