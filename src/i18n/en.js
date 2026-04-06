const en = {
  // Navbar
  nav: {
    subtitle: 'AUTHENTIC JAPANESE NOODLES',
    menu: 'MENU',
    ourStory: 'OUR STORY',
    reservations: 'RESERVATIONS',
  },

  // Footer
  footer: {
    tagline:
      'Crafting authentic Japanese ramen with passion since 2015. Every bowl tells a story of tradition and dedication.',
    quickLinks: 'QUICK LINKS',
    linkMenu: 'Menu',
    linkOurStory: 'Our Story',
    linkReservations: 'Reservations',
    visitUs: 'VISIT US',
    address1: '742 Noodle Street',
    address2: 'Brooklyn, NY 11201',
    phone: 'Phone: (718) 555-0188',
    email: 'Email: hello@ichibanramen.com',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'X / Twitter',
    copyright: '\u00A9 2026 Ichiban Ramen. All rights reserved.',
  },

  // Menu page
  menu: {
    pageTitle: 'Our Menu',
    pageSubtitle: 'Handcrafted bowls made with soul',
    signature: {
      title: 'Signature Bowls',
      subtitle: 'Our most beloved creations, perfected over the years',
      items: [
        {
          name: 'Tonkotsu Classic',
          price: '$16',
          description:
            'Rich, creamy pork bone broth simmered for 18 hours with thin noodles, chashu pork belly, soft-boiled egg, and scallions.',
        },
        {
          name: 'Spicy Miso Ramen',
          price: '$17',
          description:
            'Bold miso broth with chili oil, ground pork, corn, bean sprouts, butter, and wavy noodles.',
        },
        {
          name: 'Shoyu Ramen',
          price: '$15',
          description:
            'Clear soy sauce-based broth with chicken, bamboo shoots, nori, naruto fish cake, and straight noodles.',
        },
        {
          name: 'Black Garlic Tonkotsu',
          price: '$19',
          description:
            'Our signature tonkotsu elevated with roasted black garlic oil, wood ear mushrooms, and extra chashu.',
        },
      ],
    },
    seasonal: {
      title: 'Seasonal Specials',
      subtitle: 'Limited-time offerings inspired by the season',
      items: [
        {
          name: 'Yuzu Shio Ramen',
          price: '$18',
          description:
            'Light salt-based broth brightened with fresh yuzu citrus, topped with seared chicken and spring vegetables.',
        },
        {
          name: 'Tantanmen',
          price: '$18',
          description:
            'Creamy sesame broth with Sichuan peppercorn, seasoned minced pork, bok choy, and chili threads.',
        },
      ],
    },
    sides: {
      title: 'Sides & Small Plates',
      subtitle: 'The perfect companions to your ramen',
      items: [
        {
          name: 'Gyoza (6 pcs)',
          price: '$9',
          description:
            'Pan-fried pork and cabbage dumplings served with ponzu dipping sauce.',
        },
        {
          name: 'Karaage Chicken',
          price: '$11',
          description:
            'Crispy Japanese fried chicken marinated in ginger and soy, served with kewpie mayo.',
        },
        {
          name: 'Edamame',
          price: '$6',
          description:
            'Steamed young soybeans tossed with sea salt and a hint of chili flakes.',
        },
        {
          name: 'Takoyaki (6 pcs)',
          price: '$10',
          description:
            'Golden octopus balls drizzled with takoyaki sauce, kewpie mayo, and bonito flakes.',
        },
      ],
    },
  },

  // Our Story page
  ourStory: {
    pageTitle: 'Our Story',
    pageSubtitle: 'A passion for perfect ramen',
    originTitle: 'From Tokyo to Brooklyn',
    originP1:
      "Ichiban Ramen was born from a simple dream: to bring the authentic flavors of Japan's finest ramen shops to New York City. Our founder, Chef Takeshi Yamamoto, spent two years apprenticing under legendary ramen masters in Tokyo and Fukuoka, learning the art and science of crafting the perfect bowl.",
    originP2:
      "What started as a weekend pop-up at Brooklyn food markets quickly became the talk of the city. Lines stretched around the block as word spread about our impossibly rich tonkotsu broth and handmade noodles. In 2015, we opened our doors on Noodle Street, and we haven't looked back since.",
    originP3:
      "Today, Ichiban Ramen is more than a restaurant. It's a gathering place where families, friends, and ramen lovers come together over steaming bowls of comfort, united by the belief that great food brings people together.",
    philosophyTitle: 'Our Philosophy',
    brothTitle: 'The Broth',
    brothText:
      'Our tonkotsu broth is the soul of every bowl. We simmer premium pork bones for a minimum of 18 hours at a rolling boil, extracting every ounce of collagen and flavor. The result is a broth so rich and creamy it coats the noodles like silk. We never take shortcuts, never use concentrates, and never compromise. Each batch is tasted and approved by Chef Yamamoto himself before a single bowl is served.',
    noodlesTitle: 'The Noodles',
    noodlesText:
      'We make our noodles fresh every morning using a custom blend of premium Japanese flour, kansui mineral water, and a technique passed down through generations. Each style of ramen gets its own noodle: thin and straight for tonkotsu, wavy and chewy for miso, and medium-width for shoyu. The right noodle transforms a good bowl into an unforgettable one, and we obsess over getting it perfect every single day.',
    milestonesTitle: 'Key Milestones',
    milestonesSubtitle: 'Key milestones in the Ichiban story',
    milestones: [
      {
        year: '2013',
        title: 'The Journey Begins',
        description:
          'Chef Takeshi Yamamoto travels to Japan to apprentice under ramen masters in Tokyo and Fukuoka.',
      },
      {
        year: '2014',
        title: 'Brooklyn Pop-Up',
        description:
          'First Ichiban Ramen pop-up at Brooklyn food markets draws lines around the block.',
      },
      {
        year: '2015',
        title: 'Grand Opening',
        description:
          'Ichiban Ramen opens its permanent home at 742 Noodle Street, Brooklyn.',
      },
      {
        year: '2018',
        title: 'Critical Acclaim',
        description:
          'Named "Best Ramen in NYC" by New York Magazine and featured on the Cooking Channel.',
      },
      {
        year: '2020',
        title: 'Community Spirit',
        description:
          'Launched a free ramen program, serving 10,000+ bowls to frontline workers during the pandemic.',
      },
      {
        year: '2024',
        title: 'A Decade of Ramen',
        description:
          'Celebrating 10 years of serving Brooklyn with plans for a second location in Manhattan.',
      },
    ],
  },

  // Reservations page
  reservations: {
    pageTitle: 'Reservations',
    pageSubtitle: 'Reserve your table at Ichiban',
    bookTitle: 'Book a Table',
    confirmed: 'Reservation Confirmed!',
    confirmedMsg: (name, guests, date, time) =>
      `Thank you, ${name}! We've reserved a table for ${guests} on ${date} at ${time}.`,
    confirmationEmail: (email) => `A confirmation has been sent to ${email}`,
    makeAnother: 'Make Another Reservation',
    labelName: 'Full Name',
    labelEmail: 'Email',
    labelDate: 'Date',
    labelTime: 'Time',
    labelPartySize: 'Party Size',
    placeholderName: 'Your name',
    placeholderEmail: 'your@email.com',
    placeholderTime: 'Select time',
    guest: 'Guest',
    guests: 'Guests',
    submitButton: 'Reserve Table',
    findUs: 'Find Us',
    mapPlaceholder: 'Interactive map coming soon',
    hoursTitle: 'Hours of Operation',
    hours: [
      { day: 'Monday - Thursday', time: '11:30 AM - 10:00 PM' },
      { day: 'Friday - Saturday', time: '11:30 AM - 11:00 PM' },
      { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
    ],
    largeParties: 'Large Parties',
    largePartiesText: 'For groups of 9 or more, please contact us directly at',
    largePartiesOr: 'or call (718) 555-0188.',
  },
}

export default en
