import { prisma } from "../src/client";

async function main() {
  console.log("Seeding database...");

  // Seed Donors
  for (let i = 1; i <= 50; i++) {
    await prisma.donor.create({
      data: {
        cnic: `3834567890${i}3`,
        name: `Donor ${i}`,
        fatherName: `Father ${i}`,
        phone: `0300123456${i}`,
        address: `Street ${i}, City A`,
        city: "Lahore",
        email: `donor${i}@example.com`,
        donations: {
          create: [{ amount: Math.floor(Math.random() * 10000) + 1000 }],
        },
        // media: {
        //   create: {
        //     profilePic: "",
        //     cnicFront: "",
        //     cnicBack: "",
        //   },
        // },
      },
    });
  }

  // Seed Members
  for (let i = 1; i <= 50; i++) {
    await prisma.member.create({
      data: {
        cnic: `1211122222${i}3`,
        name: `Member ${i}`,
        fatherName: `Father ${i}`,
        phone: `0311122334${i}`,
        address: `Street ${i}, Karachi`,
        city: "Karachi",
        payments: {
          create: [{ amount: Math.floor(Math.random() * 5000) + 500 }],
        },
        // media: {
        //   create: {
        //     profilePic: "",
        //     cnicFront: "",
        //     cnicBack: "",
        //   },
        // },
        // memberStatus: {
        //   create: { status: "APPROVED" },
        // },
      },
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
