import { PrismaClient } from "@prisma/client";
import { users } from "@clerk/clerk-sdk-node";

const prisma = new PrismaClient();

async function main() {
  const clerkUsers = await users.getUserList();

  // Clear existing data
  await prisma.bookingOption.deleteMany({});
  await prisma.room.deleteMany({});
  await prisma.user.deleteMany({});

  for (const cu of clerkUsers) {
    await prisma.user.upsert({
      where: { clerkId: cu.id }, // Clerk user ID
      update: {},
      create: {
        clerkId: cu.id,
        type: "NNA", // or map from Clerk attributes if needed
      },
    });
  }

  // Create Coaching Room (6 people max)
  const coachingRoom = await prisma.room.create({
    data: {
      name: "Coaching",
      type: "conference",
      category: "meeting",
      seats: 6,
      img: "coaching.jpg",
      bookingOptions: {
        create: [
          {
            title: "Coaching room (1-3 people) [60 min]",
            duration: 60,
            price: 3000,
          },
          {
            title: "Coaching room (1-3 people) [90 min]",
            duration: 90,
            price: 4000,
          },
        ],
      },
    },
    include: { bookingOptions: true },
  });

  // Create Workshop Room (12 people max)
  const workshopRoom = await prisma.room.create({
    data: {
      name: "Workshop",
      type: "conference",
      category: "meeting",
      seats: 12,
      img: "workshop.jpg",
      bookingOptions: {
        create: [
          {
            title: "Conference room (4-8 people) [60 min]",
            duration: 60,
            price: 4000,
          },
          {
            title: "Conference room (4-8 people) [2x60 min]",
            duration: 120,
            price: 8000,
          },
          {
            title: "Conference room full day [8:00 - 17:00]",
            duration: 540,
            price: 20000,
          },
          {
            title: "Workshop room rental [60 min]",
            duration: 60,
            price: 5000,
          },
          {
            title: "Workshop room rental [2 x 60 min]",
            duration: 120,
            price: 10000,
          },
          {
            title: "Workshop room rental [3 x 60 min]",
            duration: 180,
            price: 15000,
          },
          {
            title: "Workshop room rental [4 x 60 min]",
            duration: 240,
            price: 20000,
          },
          {
            title: "Workshop room rental full day [8:00 - 17:00]",
            duration: 540,
            price: 25000,
            description: "For full day bookings, please book the 8:00 time slot if available.",
          },
        ],
      },
    },
    include: { bookingOptions: true },
  });

  // Create Small Booth
  const smallBooth = await prisma.room.create({
    data: {
      name: "Small booth",
      type: "booth",
      category: "meeting",
      seats: null,
      img: "small-booth.jpg",
      bookingOptions: {
        create: [
          {
            title: "Small booth rental [30 min]",
            duration: 30,
            price: null,
          },
          {
            title: "Small booth rental [60 min]",
            duration: 60,
            price: null,
          },
          {
            title: "Small booth rental [120 min]",
            duration: 120,
            price: null,
          },
          {
            title: "Small booth rental [300 min]",
            duration: 300,
            price: null,
          },
        ],
      },
    },
    include: { bookingOptions: true },
  });

  // Create Big Booth
  const bigBooth = await prisma.room.create({
    data: {
      name: "Big booth",
      type: "booth",
      category: "meeting",
      seats: null,
      img: "big-booth.jpg",
      bookingOptions: {
        create: [
          {
            title: "Large booth rental [30 min]",
            duration: 30,
            price: null,
          },
          {
            title: "Large booth rental [60 min]",
            duration: 60,
            price: null,
          },
          {
            title: "Large booth rental [120 min]",
            duration: 120,
            price: null,
          },
        ],
      },
    },
    include: { bookingOptions: true },
  });

  // Create Coworking/Focus Places
  const coworkingSpace = await prisma.room.create({
    data: {
      name: "Coworking/focus places",
      type: "desk",
      category: "desk",
      seats: null,
      img: "desk-space.jpg",
      bookingOptions: {
        create: [
          {
            title: "Coworking space rental WEEKDAYS [full day]",
            duration: 480,
            price: 25000,
          },
        ],
      },
    },
    include: { bookingOptions: true },
  });

  if (clerkUsers.length >= 3) {
    // Upsert Clerk users into Prisma and collect them
    const dbUsers = [];
    for (const cu of clerkUsers.slice(0, 3)) {
      const dbUser = await prisma.user.upsert({
        where: { clerkId: cu.id },
        update: {},
        create: { clerkId: cu.id, type: "NNA" },
      });
      dbUsers.push(dbUser);
    }

    // Coaching room options
    const coaching60 = coachingRoom.bookingOptions.find(opt => opt.duration === 60);
    const coaching90 = coachingRoom.bookingOptions.find(opt => opt.duration === 90);

    // Create 5 bookings across 3 users
    await prisma.booking.create({
      data: {
        userId: dbUsers[0].id,
        BookingOptionId: coaching60.id,
        date: new Date("2025-12-01"),
        startTime: new Date("2025-12-01T09:00:00Z"),
        endTime: new Date("2025-12-01T10:00:00Z"),
        status: "confirmed",
        Notes: "User 1 coaching 60 min",
      },
    });

    await prisma.booking.create({
      data: {
        userId: dbUsers[1].id,
        BookingOptionId: coaching90.id,
        date: new Date("2025-12-01"),
        startTime: new Date("2025-12-01T11:00:00Z"),
        endTime: new Date("2025-12-01T12:30:00Z"),
        status: "confirmed",
        Notes: "User 2 coaching 90 min",
      },
    });

    await prisma.booking.create({
      data: {
        userId: dbUsers[2].id,
        BookingOptionId: coaching60.id,
        date: new Date("2025-12-02"),
        startTime: new Date("2025-12-02T09:00:00Z"),
        endTime: new Date("2025-12-02T10:00:00Z"),
        status: "confirmed",
        Notes: "User 3 coaching 60 min",
      },
    });

    await prisma.booking.create({
      data: {
        userId: dbUsers[0].id,
        BookingOptionId: coaching90.id,
        date: new Date("2025-12-03"),
        startTime: new Date("2025-12-03T13:00:00Z"),
        endTime: new Date("2025-12-03T14:30:00Z"),
        status: "confirmed",
        Notes: "User 1 coaching 90 min",
      },
    });

    await prisma.booking.create({
      data: {
        userId: dbUsers[1].id,
        BookingOptionId: coaching60.id,
        date: new Date("2025-12-04"),
        startTime: new Date("2025-12-04T15:00:00Z"),
        endTime: new Date("2025-12-04T16:00:00Z"),
        status: "confirmed",
        Notes: "User 2 coaching 60 min",
      },
    });
  }
  
  console.log("✅ Database seeded successfully!");
  console.log({
    coachingRoom,
    workshopRoom,
    smallBooth,
    bigBooth,
    coworkingSpace,
  });
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });