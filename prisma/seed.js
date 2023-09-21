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
