const translations = {
  en: {
    // Navbar
    nav: {
      brandName: 'ICHIBAN RAMEN',
      brandTagline: 'AUTHENTIC JAPANESE NOODLES',
      menu: 'MENU',
      ourStory: 'OUR STORY',
      reservations: 'RESERVATIONS',
    },

    // Menu page
    menu: {
      heroTitle: 'Our Menu',
      heroSubtitle: 'Handcrafted bowls made with soul',
      signature: {
        title: 'Signature Bowls',
        subtitle: 'Our most beloved creations, perfected over the years',
      },
      seasonal: {
        title: 'Seasonal Specials',
        subtitle: 'Limited-time offerings inspired by the season',
      },
      sides: {
        title: 'Sides & Small Plates',
        subtitle: 'The perfect companions to your ramen',
      },
      items: {
        tonkotsuClassic: {
          name: 'Tonkotsu Classic',
          description: 'Rich, creamy pork bone broth simmered for 18 hours with thin noodles, chashu pork belly, soft-boiled egg, and scallions.',
        },
        spicyMiso: {
          name: 'Spicy Miso Ramen',
          description: 'Bold miso broth with chili oil, ground pork, corn, bean sprouts, butter, and wavy noodles.',
        },
        shoyu: {
          name: 'Shoyu Ramen',
          description: 'Clear soy sauce-based broth with chicken, bamboo shoots, nori, naruto fish cake, and straight noodles.',
        },
        blackGarlic: {
          name: 'Black Garlic Tonkotsu',
          description: 'Our signature tonkotsu elevated with roasted black garlic oil, wood ear mushrooms, and extra chashu.',
        },
        yuzuShio: {
          name: 'Yuzu Shio Ramen',
          description: 'Light salt-based broth brightened with fresh yuzu citrus, topped with seared chicken and spring vegetables.',
        },
        tantanmen: {
          name: 'Tantanmen',
          description: 'Creamy sesame broth with Sichuan peppercorn, seasoned minced pork, bok choy, and chili threads.',
        },
        gyoza: {
          name: 'Gyoza (6 pcs)',
          description: 'Pan-fried pork and cabbage dumplings served with ponzu dipping sauce.',
        },
        karaage: {
          name: 'Karaage Chicken',
          description: 'Crispy Japanese fried chicken marinated in ginger and soy, served with kewpie mayo.',
        },
        edamame: {
          name: 'Edamame',
          description: 'Steamed young soybeans tossed with sea salt and a hint of chili flakes.',
        },
        takoyaki: {
          name: 'Takoyaki (6 pcs)',
          description: 'Golden octopus balls drizzled with takoyaki sauce, kewpie mayo, and bonito flakes.',
        },
      },
    },

    // Our Story page
    story: {
      heroTitle: 'Our Story',
      heroSubtitle: 'A passion for perfect ramen',
      originTitle: 'From Tokyo to Brooklyn',
      originP1: 'Ichiban Ramen was born from a simple dream: to bring the authentic flavors of Japan\u2019s finest ramen shops to New York City. Our founder, Chef Takeshi Yamamoto, spent two years apprenticing under legendary ramen masters in Tokyo and Fukuoka, learning the art and science of crafting the perfect bowl.',
      originP2: 'What started as a weekend pop-up at Brooklyn food markets quickly became the talk of the city. Lines stretched around the block as word spread about our impossibly rich tonkotsu broth and handmade noodles. In 2015, we opened our doors on Noodle Street, and we haven\u2019t looked back since.',
      originP3: 'Today, Ichiban Ramen is more than a restaurant. It\u2019s a gathering place where families, friends, and ramen lovers come together over steaming bowls of comfort, united by the belief that great food brings people together.',
      chefAlt: 'Chef Takeshi Yamamoto preparing ramen in the kitchen',
      philosophyTitle: 'Our Philosophy',
      brothTitle: 'The Broth',
      brothText: 'Our tonkotsu broth is the soul of every bowl. We simmer premium pork bones for a minimum of 18 hours at a rolling boil, extracting every ounce of collagen and flavor. The result is a broth so rich and creamy it coats the noodles like silk. We never take shortcuts, never use concentrates, and never compromise. Each batch is tasted and approved by Chef Yamamoto himself before a single bowl is served.',
      noodlesTitle: 'The Noodles',
      noodlesText: 'We make our noodles fresh every morning using a custom blend of premium Japanese flour, kansui mineral water, and a technique passed down through generations. Each style of ramen gets its own noodle: thin and straight for tonkotsu, wavy and chewy for miso, and medium-width for shoyu. The right noodle transforms a good bowl into an unforgettable one, and we obsess over getting it perfect every single day.',
      milestonesTitle: 'Key Milestones',
      milestonesSubtitle: 'Key milestones in the Ichiban story',
      milestones: [
        { year: '2013', title: 'The Journey Begins', description: 'Chef Takeshi Yamamoto travels to Japan to apprentice under ramen masters in Tokyo and Fukuoka.' },
        { year: '2014', title: 'Brooklyn Pop-Up', description: 'First Ichiban Ramen pop-up at Brooklyn food markets draws lines around the block.' },
        { year: '2015', title: 'Grand Opening', description: 'Ichiban Ramen opens its permanent home at 742 Noodle Street, Brooklyn.' },
        { year: '2018', title: 'Critical Acclaim', description: 'Named "Best Ramen in NYC" by New York Magazine and featured on the Cooking Channel.' },
        { year: '2020', title: 'Community Spirit', description: 'Launched a free ramen program, serving 10,000+ bowls to frontline workers during the pandemic.' },
        { year: '2024', title: 'A Decade of Ramen', description: 'Celebrating 10 years of serving Brooklyn with plans for a second location in Manhattan.' },
      ],
    },

    // Reservations page
    reservations: {
      heroTitle: 'Reservations',
      heroSubtitle: 'Reserve your table at Ichiban',
      bookTitle: 'Book a Table',
      confirmedTitle: 'Reservation Confirmed!',
      confirmedMessage: (name, guests, date, time) =>
        `Thank you, ${name}! We've reserved a table for ${guests} on ${date} at ${time}.`,
      confirmationSent: (email) => `A confirmation has been sent to ${email}`,
      makeAnother: 'Make Another Reservation',
      labelName: 'Full Name',
      labelEmail: 'Email',
      labelDate: 'Date',
      labelTime: 'Time',
      labelPartySize: 'Party Size',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      selectTime: 'Select time',
      guest: 'Guest',
      guests: 'Guests',
      reserveTable: 'Reserve Table',
      findUs: 'Find Us',
      address1: '742 Noodle Street',
      address2: 'Brooklyn, NY 11201',
      mapComingSoon: 'Interactive map coming soon',
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

    // Footer
    footer: {
      brandName: 'ICHIBAN RAMEN',
      description: 'Crafting authentic Japanese ramen with passion since 2015. Every bowl tells a story of tradition and dedication.',
      quickLinks: 'QUICK LINKS',
      menuLink: 'Menu',
      ourStoryLink: 'Our Story',
      reservationsLink: 'Reservations',
      visitUs: 'VISIT US',
      address1: '742 Noodle Street',
      address2: 'Brooklyn, NY 11201',
      phone: 'Phone: (718) 555-0188',
      email: 'Email: hello@ichibanramen.com',
      copyright: '\u00a9 2026 Ichiban Ramen. All rights reserved.',
    },
  },

  ja: {
    // Navbar
    nav: {
      brandName: 'ICHIBAN RAMEN',
      brandTagline: '\u672c\u683c\u65e5\u672c\u306e\u30e9\u30fc\u30e1\u30f3',
      menu: '\u30e1\u30cb\u30e5\u30fc',
      ourStory: '\u79c1\u305f\u3061\u306e\u7269\u8a9e',
      reservations: '\u4e88\u7d04',
    },

    // Menu page
    menu: {
      heroTitle: '\u30e1\u30cb\u30e5\u30fc',
      heroSubtitle: '\u5fc3\u3092\u8fbc\u3081\u3066\u4f5c\u308b\u4e00\u676f',
      signature: {
        title: '\u770b\u677f\u30e1\u30cb\u30e5\u30fc',
        subtitle: '\u9577\u5e74\u611b\u3055\u308c\u3066\u304d\u305f\u81ea\u6162\u306e\u4e00\u54c1',
      },
      seasonal: {
        title: '\u5b63\u7bc0\u9650\u5b9a',
        subtitle: '\u5b63\u7bc0\u306e\u98df\u6750\u3092\u6d3b\u304b\u3057\u305f\u671f\u9593\u9650\u5b9a\u30e1\u30cb\u30e5\u30fc',
      },
      sides: {
        title: '\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc',
        subtitle: '\u30e9\u30fc\u30e1\u30f3\u306b\u3074\u3063\u305f\u308a\u306e\u4e00\u54c1',
      },
      items: {
        tonkotsuClassic: {
          name: '\u8c5a\u9aa8\u30af\u30e9\u30b7\u30c3\u30af',
          description: '18\u6642\u9593\u716e\u8fbc\u3093\u3060\u6fc3\u539a\u306a\u8c5a\u9aa8\u30b9\u30fc\u30d7\u306b\u7d30\u9eba\u3001\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u3001\u534a\u719f\u5375\u3001\u5c0f\u53e3\u30cd\u30ae\u3092\u6dfb\u3048\u3066\u3002',
        },
        spicyMiso: {
          name: '\u8f9b\u5473\u564c\u30e9\u30fc\u30e1\u30f3',
          description: '\u30e9\u30fc\u6cb9\u3001\u8c5a\u3072\u304d\u8089\u3001\u30b3\u30fc\u30f3\u3001\u3082\u3084\u3057\u3001\u30d0\u30bf\u30fc\u3092\u52a0\u3048\u305f\u6fc3\u539a\u306a\u5473\u564c\u30b9\u30fc\u30d7\u306b\u3061\u3062\u308c\u9eba\u3002',
        },
        shoyu: {
          name: '\u9186\u6cb9\u30e9\u30fc\u30e1\u30f3',
          description: '\u9d8f\u30ac\u30e9\u30d9\u30fc\u30b9\u306e\u6f84\u3093\u3060\u9186\u6cb9\u30b9\u30fc\u30d7\u306b\u30e1\u30f3\u30de\u3001\u6d77\u82d4\u3001\u306a\u308b\u3068\u3001\u30b9\u30c8\u30ec\u30fc\u30c8\u9eba\u3002',
        },
        blackGarlic: {
          name: '\u9ed2\u30cb\u30f3\u30cb\u30af\u8c5a\u9aa8',
          description: '\u7279\u88fd\u8c5a\u9aa8\u306b\u9ed2\u30cb\u30f3\u30cb\u30af\u6cb9\u3001\u304d\u304f\u3089\u3052\u3001\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u589e\u3057\u3092\u30c8\u30c3\u30d4\u30f3\u30b0\u3002',
        },
        yuzuShio: {
          name: '\u67da\u5b50\u5869\u30e9\u30fc\u30e1\u30f3',
          description: '\u65b0\u9bae\u306a\u67da\u5b50\u304c\u9999\u308b\u3042\u3063\u3055\u308a\u5869\u30b9\u30fc\u30d7\u306b\u3001\u7126\u304c\u3057\u30c1\u30ad\u30f3\u3068\u6625\u91ce\u83dc\u3092\u6dfb\u3048\u3066\u3002',
        },
        tantanmen: {
          name: '\u62c5\u3005\u9eba',
          description: '\u82b1\u6912\u304c\u52b9\u3044\u305f\u6fc3\u539a\u306a\u80e1\u9ebb\u30b9\u30fc\u30d7\u306b\u3001\u8089\u305d\u307c\u308d\u3001\u9752\u6897\u83dc\u3001\u7cf8\u5510\u8f9b\u5b50\u3002',
        },
        gyoza: {
          name: '\u9905\u5b50\uff086\u500b\uff09',
          description: '\u8c5a\u8089\u3068\u30ad\u30e3\u30d9\u30c4\u306e\u7126\u304d\u9905\u5b50\u3001\u30dd\u30f3\u9178\u30c0\u30ec\u4ed8\u304d\u3002',
        },
        karaage: {
          name: '\u9d8f\u306e\u5510\u63da\u3052',
          description: '\u751f\u59dc\u3068\u91a4\u6cb9\u306b\u6f2c\u3051\u8fbc\u3093\u3060\u30b5\u30af\u30b5\u30af\u306e\u5510\u63da\u3052\u3001\u30ad\u30e5\u30fc\u30d4\u30fc\u30de\u30e8\u30cd\u30fc\u30ba\u6dfb\u3048\u3002',
        },
        edamame: {
          name: '\u679d\u8c46',
          description: '\u6d77\u5869\u3068\u5510\u8f9b\u5b50\u3067\u5473\u4ed8\u3051\u305f\u84b8\u3057\u679d\u8c46\u3002',
        },
        takoyaki: {
          name: '\u305f\u3053\u713c\u304d\uff086\u500b\uff09',
          description: '\u305f\u3053\u713c\u304d\u30bd\u30fc\u30b9\u3001\u30ad\u30e5\u30fc\u30d4\u30fc\u30de\u30e8\u30cd\u30fc\u30ba\u3001\u9c39\u7bc0\u3092\u304b\u3051\u305f\u9ec4\u91d1\u8272\u306e\u305f\u3053\u713c\u304d\u3002',
        },
      },
    },

    // Our Story page
    story: {
      heroTitle: '\u79c1\u305f\u3061\u306e\u7269\u8a9e',
      heroSubtitle: '\u5b8c\u74a7\u306a\u30e9\u30fc\u30e1\u30f3\u3078\u306e\u60c5\u71b1',
      originTitle: '\u6771\u4eac\u304b\u3089\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u3078',
      originP1: '\u4e00\u756a\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u65e5\u672c\u6700\u9ad8\u5cf0\u306e\u30e9\u30fc\u30e1\u30f3\u306e\u5473\u3092\u30cb\u30e5\u30fc\u30e8\u30fc\u30af\u306b\u5c4a\u3051\u305f\u3044\u3068\u3044\u3046\u30b7\u30f3\u30d7\u30eb\u306a\u5922\u304b\u3089\u751f\u307e\u308c\u307e\u3057\u305f\u3002\u5275\u696d\u8005\u306e\u5c71\u672c\u6b66\u30b7\u30a7\u30d5\u306f\u30012\u5e74\u9593\u6771\u4eac\u3068\u798f\u5ca1\u306e\u4f1d\u8aac\u7684\u306a\u30e9\u30fc\u30e1\u30f3\u8077\u4eba\u306e\u4e0b\u3067\u4fee\u884c\u3057\u3001\u5b8c\u74a7\u306a\u4e00\u676f\u3092\u4f5c\u308b\u6280\u8853\u3068\u79d1\u5b66\u3092\u5b66\u3073\u307e\u3057\u305f\u3002',
      originP2: '\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u306e\u30d5\u30fc\u30c9\u30de\u30fc\u30b1\u30c3\u30c8\u3067\u306e\u9031\u672b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304b\u3089\u59cb\u307e\u3063\u305f\u4e00\u756a\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u305f\u3061\u307e\u3061\u8857\u306e\u8a71\u984c\u306b\u3002\u6fc3\u539a\u306a\u8c5a\u9aa8\u30b9\u30fc\u30d7\u3068\u81ea\u5bb6\u88fd\u9eba\u306e\u5642\u304c\u5e83\u304c\u308a\u3001\u884c\u5217\u306f\u30d6\u30ed\u30c3\u30af\u3092\u56de\u308b\u307b\u3069\u306b\u30022015\u5e74\u3001\u30cc\u30fc\u30c9\u30eb\u30b9\u30c8\u30ea\u30fc\u30c8\u306b\u5e97\u3092\u69cb\u3048\u3001\u305d\u308c\u4ee5\u6765\u4f11\u3080\u3053\u3068\u306a\u304f\u6b69\u307f\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002',
      originP3: '\u4eca\u65e5\u3001\u4e00\u756a\u30e9\u30fc\u30e1\u30f3\u306f\u5358\u306a\u308b\u30ec\u30b9\u30c8\u30e9\u30f3\u4ee5\u4e0a\u306e\u5b58\u5728\u3067\u3059\u3002\u5bb6\u65cf\u3001\u53cb\u4eba\u3001\u30e9\u30fc\u30e1\u30f3\u611b\u597d\u5bb6\u304c\u6e6f\u6c17\u7acb\u3064\u4e00\u676f\u3092\u56f2\u3093\u3067\u96c6\u307e\u308b\u3001\u7d20\u6674\u3089\u3057\u3044\u98df\u304c\u4eba\u3005\u3092\u3064\u306a\u3050\u3068\u3044\u3046\u4fe1\u5ff5\u306e\u3082\u3068\u306b\u96c6\u3046\u5834\u6240\u3067\u3059\u3002',
      chefAlt: '\u30ad\u30c3\u30c1\u30f3\u3067\u30e9\u30fc\u30e1\u30f3\u3092\u4f5c\u308b\u5c71\u672c\u6b66\u30b7\u30a7\u30d5',
      philosophyTitle: '\u79c1\u305f\u3061\u306e\u54f2\u5b66',
      brothTitle: '\u30b9\u30fc\u30d7',
      brothText: '\u79c1\u305f\u3061\u306e\u8c5a\u9aa8\u30b9\u30fc\u30d7\u306f\u3001\u3059\u3079\u3066\u306e\u4e00\u676f\u306e\u9b42\u3067\u3059\u3002\u4e0a\u8cea\u306a\u8c5a\u9aa8\u309218\u6642\u9593\u4ee5\u4e0a\u5f37\u706b\u3067\u716e\u8fbc\u307f\u3001\u30b3\u30e9\u30fc\u30b2\u30f3\u3068\u65e8\u5473\u3092\u4f59\u3059\u3053\u3068\u306a\u304f\u62bd\u51fa\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u3001\u7d79\u306e\u3088\u3046\u306b\u9eba\u306b\u7d61\u3080\u6fc3\u539a\u3067\u30af\u30ea\u30fc\u30df\u30fc\u306a\u30b9\u30fc\u30d7\u304c\u5b8c\u6210\u3057\u307e\u3059\u3002\u8fd1\u9053\u3092\u305b\u305a\u3001\u6fc3\u7e2e\u30b9\u30fc\u30d7\u3092\u4f7f\u308f\u305a\u3001\u59a5\u5354\u306f\u3057\u307e\u305b\u3093\u3002\u5404\u30d0\u30c3\u30c1\u306f\u5c71\u672c\u30b7\u30a7\u30d5\u81ea\u3089\u304c\u5473\u898b\u3057\u3001\u627f\u8a8d\u3057\u3066\u304b\u3089\u304a\u5ba2\u69d8\u306b\u63d0\u4f9b\u3057\u307e\u3059\u3002',
      noodlesTitle: '\u9eba',
      noodlesText: '\u6bce\u671d\u3001\u4e0a\u8cea\u306a\u65e5\u672c\u7523\u5c0f\u9ea6\u7c89\u3001\u304b\u3093\u6c34\u3001\u305d\u3057\u3066\u4e16\u4ee3\u3092\u8d85\u3048\u3066\u53d7\u3051\u7d99\u304c\u308c\u305f\u6280\u8853\u3067\u65b0\u9bae\u306a\u9eba\u3092\u4f5c\u308a\u307e\u3059\u3002\u8c5a\u9aa8\u306b\u306f\u7d30\u3044\u30b9\u30c8\u30ec\u30fc\u30c8\u9eba\u3001\u5473\u564c\u306b\u306f\u3061\u3062\u308c\u9eba\u3001\u9186\u6cb9\u306b\u306f\u4e2d\u592a\u9eba\u3002\u6b63\u3057\u3044\u9eba\u304c\u826f\u3044\u4e00\u676f\u3092\u5fd8\u308c\u3089\u308c\u306a\u3044\u4e00\u676f\u306b\u5909\u3048\u307e\u3059\u3002\u6bce\u65e5\u5b8c\u74a7\u3092\u8ffd\u6c42\u3057\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002',
      milestonesTitle: '\u6cbf\u9769',
      milestonesSubtitle: '\u4e00\u756a\u30e9\u30fc\u30e1\u30f3\u306e\u4e3b\u306a\u6b69\u307f',
      milestones: [
        { year: '2013', title: '\u65c5\u306e\u59cb\u307e\u308a', description: '\u5c71\u672c\u6b66\u30b7\u30a7\u30d5\u304c\u6771\u4eac\u3068\u798f\u5ca1\u306e\u30e9\u30fc\u30e1\u30f3\u8077\u4eba\u306e\u4e0b\u3067\u4fee\u884c\u3059\u308b\u305f\u3081\u65e5\u672c\u3078\u6e21\u308b\u3002' },
        { year: '2014', title: '\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7', description: '\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u306e\u30d5\u30fc\u30c9\u30de\u30fc\u30b1\u30c3\u30c8\u3067\u521d\u3081\u3066\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u958b\u50ac\u3001\u5927\u884c\u5217\u304c\u3067\u304d\u308b\u3002' },
        { year: '2015', title: '\u30b0\u30e9\u30f3\u30c9\u30aa\u30fc\u30d7\u30f3', description: '\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u306e\u30cc\u30fc\u30c9\u30eb\u30b9\u30c8\u30ea\u30fc\u30c8742\u756a\u5730\u306b\u5e97\u8217\u3092\u958b\u8a2d\u3002' },
        { year: '2018', title: '\u9ad8\u8a55\u4fa1', description: 'New York Magazine\u304c\u300c\u30cb\u30e5\u30fc\u30e8\u30fc\u30af\u6700\u9ad8\u306e\u30e9\u30fc\u30e1\u30f3\u300d\u306b\u9078\u51fa\u3001Cooking Channel\u3067\u3082\u7279\u96c6\u3002' },
        { year: '2020', title: '\u5730\u57df\u8ca2\u732e', description: '\u30d1\u30f3\u30c7\u30df\u30c3\u30af\u6642\u306b\u7121\u6599\u30e9\u30fc\u30e1\u30f3\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u7acb\u3061\u4e0a\u3052\u300110,000\u676f\u4ee5\u4e0a\u3092\u6700\u524d\u7dda\u306e\u4eba\u3005\u306b\u63d0\u4f9b\u3002' },
        { year: '2024', title: '\u30e9\u30fc\u30e1\u30f310\u5468\u5e74', description: '\u30d6\u30eb\u30c3\u30af\u30ea\u30f3\u3067\u306e10\u5e74\u3092\u795d\u3044\u3001\u30de\u30f3\u30cf\u30c3\u30bf\u30f3\u306b2\u53f7\u5e97\u3092\u8a08\u753b\u4e2d\u3002' },
      ],
    },

    // Reservations page
    reservations: {
      heroTitle: '\u4e88\u7d04',
      heroSubtitle: '\u4e00\u756a\u30e9\u30fc\u30e1\u30f3\u3067\u306e\u304a\u5e2d\u3092\u3054\u4e88\u7d04\u304f\u3060\u3055\u3044',
      bookTitle: '\u5e2d\u3092\u4e88\u7d04\u3059\u308b',
      confirmedTitle: '\u4e88\u7d04\u78ba\u5b9a\uff01',
      confirmedMessage: (name, guests, date, time) =>
        `${name}\u69d8\u3001\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01${date}\u306e${time}\u306b${guests}\u540d\u69d8\u306e\u304a\u5e2d\u3092\u3054\u4e88\u7d04\u3044\u305f\u3057\u307e\u3057\u305f\u3002`,
      confirmationSent: (email) => `\u78ba\u8a8d\u30e1\u30fc\u30eb\u3092${email}\u306b\u9001\u4fe1\u3057\u307e\u3057\u305f`,
      makeAnother: '\u5225\u306e\u4e88\u7d04\u3092\u3059\u308b',
      labelName: '\u304a\u540d\u524d',
      labelEmail: '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
      labelDate: '\u65e5\u4ed8',
      labelTime: '\u6642\u9593',
      labelPartySize: '\u4eba\u6570',
      placeholderName: '\u304a\u540d\u524d\u3092\u5165\u529b',
      placeholderEmail: 'your@email.com',
      selectTime: '\u6642\u9593\u3092\u9078\u629e',
      guest: '\u540d',
      guests: '\u540d',
      reserveTable: '\u4e88\u7d04\u3059\u308b',
      findUs: '\u30a2\u30af\u30bb\u30b9',
      address1: '742 Noodle Street',
      address2: 'Brooklyn, NY 11201',
      mapComingSoon: '\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u30de\u30c3\u30d7\u8fd1\u65e5\u516c\u958b',
      hoursTitle: '\u55b6\u696d\u6642\u9593',
      hours: [
        { day: '\u6708\u66dc\u65e5 \u2013 \u6728\u66dc\u65e5', time: '11:30 \u2013 22:00' },
        { day: '\u91d1\u66dc\u65e5 \u2013 \u571f\u66dc\u65e5', time: '11:30 \u2013 23:00' },
        { day: '\u65e5\u66dc\u65e5', time: '12:00 \u2013 21:00' },
      ],
      largeParties: '\u5927\u4eba\u6570\u306e\u3054\u4e88\u7d04',
      largePartiesText: '9\u540d\u69d8\u4ee5\u4e0a\u306e\u5834\u5408\u306f\u3001\u76f4\u63a5\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\uff1a',
      largePartiesOr: '\u307e\u305f\u306f\u304a\u96fb\u8a71 (718) 555-0188 \u307e\u3067\u3002',
    },

    // Footer
    footer: {
      brandName: 'ICHIBAN RAMEN',
      description: '2015\u5e74\u3088\u308a\u3001\u60c5\u71b1\u3092\u8fbc\u3081\u3066\u672c\u683c\u7684\u306a\u65e5\u672c\u306e\u30e9\u30fc\u30e1\u30f3\u3092\u4f5c\u308a\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002\u4e00\u676f\u4e00\u676f\u306b\u4f1d\u7d71\u3068\u732e\u8eab\u306e\u7269\u8a9e\u304c\u3042\u308a\u307e\u3059\u3002',
      quickLinks: '\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af',
      menuLink: '\u30e1\u30cb\u30e5\u30fc',
      ourStoryLink: '\u79c1\u305f\u3061\u306e\u7269\u8a9e',
      reservationsLink: '\u4e88\u7d04',
      visitUs: '\u30a2\u30af\u30bb\u30b9',
      address1: '742 Noodle Street',
      address2: 'Brooklyn, NY 11201',
      phone: '\u96fb\u8a71: (718) 555-0188',
      email: '\u30e1\u30fc\u30eb: hello@ichibanramen.com',
      copyright: '\u00a9 2026 Ichiban Ramen. All rights reserved.',
    },
  },
}

export default translations
