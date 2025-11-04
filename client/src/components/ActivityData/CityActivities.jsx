// src/data/cityActivityMap.js

const CityActivities = {
  
  mumbai: {
    region: "indian",
    country: "India",
    title: "Mumbai Activities",
    filters: {
      price: { min: 433, max: 636340 }, duration: [
        "Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",
      ],
      rating: [
        "5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",
      ],
      specials: [
        "Free Cancellation",
        "Private Tour",
        "New On EaseMyTrip",
        "Special Offer",
        "Skip The Line",
      ],
    },
    results: [
      {
        city: "Mumbai",
        slug: "private-guided-walking-tour-in-fort-colaba",
        title: "Private Guided Walking Tour in Fort & Colaba",
        reviews: 617,
        time: "2 hour(s) 30 minute(s)",
        description: "Our signature walk covers 500 years of history in a distance of 2 km over 2.5 hrs. It starts from where the first Europeans entered the city and ends where the last British soldiers left. Understand how the city grew from a fishing and farming villages to the modern metropolis it is today on this walk.",
        price: "₹ 5,794",
        image: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/71/e6/ab.jpg"],
        images: [//"AR1.jpg", "AR2.jpg", "AR3.jpg", "AR4.jpg","AR5.jpg" 
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/7b/ec/dd.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/7b/ec/e0.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/bf/55/30.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/91/77/8e.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/7b/ec/e1.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/7b/ec/e4.jpg",
        ],
        infoTags: [
          " Mobile Ticket",
        ],
        packages: {
          packagetag: "#Castle2Gateway",
          packageinfo: "Understand how the city grew from a fishing and farming villages to the modern metropolis across 500 years",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Mumbai Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Mumbai experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Mumbai tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Mumbai Tour",
            rating: 5,
            comment:
              "Although I’ve been to Mumbai several times... Highly recommend booking your Mumbai tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
      {
        city: "Mumbai",
        slug: "private-half-day-mumbai-city-tour-including-ac-vehicle",
        title: "Private Half Day Mumbai City Tour including AC vehicle.",
        reviews: 48,
        time: "5 hour(s)",
        description: "Our signature walk covers 500 years of history in a distance of 2 km over 2.5 hrs. It starts from where the first Europeans entered the city and ends where the last British soldiers left. Understand how the city grew from a fishing and farming villages to the modern metropolis it is today on this walk.",
        price: "₹ 10,592",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/4b/b0/29.jpg",
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Mumbai Central Bus Stand",
          mapUrl: "https://maps.google.com/?q=Mumbai"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Goa experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Goa tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Goa Tour",
            rating: 5,
            comment:
              "Although I’ve been to Goa several times... Highly recommend booking your Goa tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
      {
        city: "Mumbai",
        slug: "kanheri-cave-with-global-vipassana-pagoda-tour-in-private-vehicle",
        title: "Kanheri Cave with Global Vipassana Pagoda Tour in Private Vehicle",
        reviews: 34,
        time: "8 hour(s) to 10 hour(s) (approx.)",
        description: "Our signature walk covers 500 years of history in a distance of 2 km over 2.5 hrs. It starts from where the first Europeans entered the city and ends where the last British soldiers left. Understand how the city grew from a fishing and farming villages to the modern metropolis it is today on this walk.",
        price: "₹ 11,733",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/81/d6/6e.jpg",
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Mumbai Central Bus Stand",
          mapUrl: "https://maps.google.com/?q=Mumbai"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Goa experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Goa tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Goa Tour",
            rating: 5,
            comment:
              "Although I’ve been to Goa several times... Highly recommend booking your Goa tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
      {
        city: "Mumbai",
        slug: "the-original-mumbai-by-dawn-recommended-by-nigella-lawson-nat-geo-traveller",
        title: "The Original Mumbai by Dawn - Recommended by Nigella Lawson & Nat Geo Traveller!",
        reviews: 365,
        time: "3 hour(s)",
        description: "Our signature walk covers 500 years of history in a distance of 2 km over 2.5 hrs. It starts from where the first Europeans entered the city and ends where the last British soldiers left. Understand how the city grew from a fishing and farming villages to the modern metropolis it is today on this walk.",
        price: "₹ 14,217",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/11/30/61/3f.jpg",
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Mumbai Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Goa experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Goa tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Goa Tour",
            rating: 5,
            comment:
              "Although I’ve been to Goa several times... Highly recommend booking your Goa tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Activities Do in Mumbai",
      paragraphs: [
        "Mumbai is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Mumbai is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Mumbai to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Mumbai that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with EaseMyTrip's Mumbai activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Mumbai activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with EaseMyTrip's Mumbai tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Mumbai",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Mumbai?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On EaseMyTrip, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Mumbai."
        },
        {
          question: "What's the price range for Mumbai activity packages?",
          answer:
            "At present, the Mumbai activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Mumbai activity packages are available?",
          answer:
            "Around 426 Mumbai activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Mumbai activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Mumbai activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Mumbai?",
          answer:
            "You can enjoy all the exciting activities in Mumbai within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Mumbai?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Mumbai. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Mumbai activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Mumbai with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Mumbai activity packages with Deltasafari only?",
          answer:
            "Booking your Mumbai activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with EaseMyTrip you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Mumbai captivity packages for the best experiences."
        }
      ]
    }
  },

  shimla: {
    region: "indian",
    country: "India",
    title: "Shimla Activities",
    filters: {
      price: { min: 544, max: 254293 }, duration: [
        "Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",
      ],
      rating: [
        "5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",
      ],
      specials: [
        "Free Cancellation",
        "Private Tour",
        "New On EaseMyTrip",
        "Special Offer",
        "Skip The Line",
      ],
    },
    results: [
      {
        city: "Shimla",
        title: "Hampta Pass Trekking and Camping 2022 with Chandratal Lake Visit",
        slug: "hampta-pass-trekking-and-camping-2022-with-chandratal-lake-visit",
        price: "₹8,692",
        reviews: 55,
        time: "120 hours (approx.)",
        description: "BanBanjara provides only the best quality tours in the country. Our network of operators, guides, instructors is superior to any other currently offered by others. BanBanjara is the only company that provides 100% customizability, products tailored to the individual customers' needs. Finally, we place great importance to the customer service we provide, and we are very proud of the response we get from our customers.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9b/ad/8f.jpg",
        images: [
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9b/ad/c5.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9b/ad/cc.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9b/ad/f8.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/b3/9b/6f.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/b3/9b/70.jpg",
        ],
        infoTags: [
          "Mobile Ticket", "Offered In: Hindi, English"
        ],
        packages: {
          packagetag: "Hampta Pass Trekking and Camping 2022 with Chandratal Lake Visit",
          packageinfo: "Understand how the city grew from a fishing and farming villages to the modern metropolis across 500 years",
        },
        inclusions: [
          "Lunch", "Dinner", "Breakfast"
        ],
        exclusions: [
          "Anything that is not mentioned in the list", "Meals during surface transfers", "Cost of any type of travel insurance", "Personal Expenses", "Expenses towards medical and other emergencies", "Expenses due to weather disturbance", "Political Scenarios", "Changes in local union rules", "Fees and Permits for Non-Resident Indians", "Porter and Mule Charges to carry your personal luggage", "All best assistance would be provided in case of any contingency",
        ],
        address: {
          meetingPoint: "Shimla Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=shimla&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best shimla experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Mumbai tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "shimla Tour",
            rating: 5,
            comment:
              "Although I’ve been to shimla several times... Highly recommend booking your shimla tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹8,692",
          timeOptions: ["9:00 AM", "10:00 PM"],
          travelerLimit: 15
        },
        cancellationPolicy: "All sales are final. No refund is available for cancellations.",
        importantInfo: [
          "Public transportation options are available nearby", "Not recommended for travelers with spinal injuries", "Not recommended for pregnant travelers", "Not recommended for travelers with poor cardiovascular health", "Travelers should have at least a moderate level of physical fitness"
        ],
      },
    ],
    intro: {
      title: "Things to do in Shimla",
      paragraphs: [
        "Shimla is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Shimla is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Shimla to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Shimla that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Shimla activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Shimla activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Shimla tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Shimla",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Shimla?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Shimla."
        },
        {
          question: "What's the price range for Shimla activity packages?",
          answer:
            "At present, the Shimla activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Shimla activity packages are available?",
          answer:
            "Around 426 Shimla activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Shimla activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Shimla activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Shimla?",
          answer:
            "You can enjoy all the exciting activities in Shimla within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Shimla?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Shimla. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Shimla activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Shimla with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Shimla activity packages with Deltasafari only?",
          answer:
            "Booking your Shimla activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Shimla captivity packages for the best experiences."
        }
      ]
    }
  },
  newdelhi: {
    region: "indian",
    country: "India",
    title: "New Delhi Activities",
    filters: {
      price: { min: 956, max: 10000 }, duration: [
        "Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",
      ],
      rating: [
        "5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",
      ],
      specials: [
        "Free Cancellation",
        "Private Tour",
        "New On EaseMyTrip",
        "Special Offer",
        "Skip The Line",
      ],
    },
    results: [
      {
        city: "New Delhi",
        title: "New Delhi: Akshardham temple with musical light and fountain Show",
        slug: "new-delhi-akshardham-light-and-water-show",
        price: "₹9,275",
        reviews: 55,
        time: "4 to 5 hours",
        description: "As the sun sets, please take your seat at this traditional step well and experience an eternal truth. Transport yourself to the courtyard of the gods and watch the innocence of children challenge the powers of the mighty!",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9e/72/5b.jpg",
        images: [
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/e6/45/5b.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/a7/ed/50.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/e6/91/66.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/8b/2f/cd.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/48/b9/81.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/a7/ed/52.jpg"
        ],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: English"
        ],
        packages: {
          packagetag: "Evening Tour With Transfers",
          packageinfo: "Pickup included",
        },
        inclusions: [
          "English speaking local guide.", "Bottled water", "Hotel Pick-up and drop-off facility."
        ],
        exclusions: [
          "Gratuities.",
        ],
        address: {
          meetingPoint: "New Delhi Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=new%20delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 26,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Flyer227345",
            date: "03-04-2024 11:00:01",
            title: "Worth it.",
            rating: 5,
            comment:
              "Amazing light show and the temple was absolutely stunning. Our guide Pankaj was friendly and knowledge. Highly recommend."
          },
          {
            name: "mittbhogaita",
            date: "07-03-2024 11:50:45",
            title: "A must see Tour if you get the chance",
            rating: 5,
            comment:
              "There’s no “Tech” allowed, such as phones, smart watches or even air pods, for example, so it’s something to bear in mind before entry. (My guide and driver took care of these, so had absolutely no issues or waiting) My guide Neha was amazing, really brings you at ease and is really knowledgeable about the temple, and Delhi as a whole. She made the experience so comfortable (Thank you) not forgetting our driver who was just as courteous and friendly. I was in safe hands, with knowledge and professional friendly people…. What more would I want. Made my experience all the worth while."
          }
        ],
        bookingInfo: {
          price: "₹9,275",
          timeOptions: ["9:00 AM", "16:00 PM"],
          travelerLimit: 15
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Public transportation options are available nearby", "Specialized infant seats are available", "Not recommended for travelers with spinal injuries", "Not recommended for travelers with poor cardiovascular health", "Suitable for all physical fitness levels", "Shoes must be removed at places of worship, Knees and shoulders must be removed at the places of worship."
        ],
        intro: {
      title: "Top Activities To Do in New Delhi",
      paragraphs: [
        "New Delhi is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, New Delhi is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Ports of Call Tours, Shore Excursions, Day Trips, Half-day Tours, Bus Tours, Photography Tours, Adventure Tours, 4WD Tours, Dining Experiences, Safaris, Nature And Wildlife Tours.",
        "In addition to this, you can explore Likely To Sell Out and other irreplaceable facets of New Delhi to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in New Delhi that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with Delta Safari's New Delhi activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in New Delhi activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with Delta Safari's New Delhi tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in New Delhi",
      list: [
        {
        question: "What are the top activities that every traveler can enjoy in New Delhi?",
        answer:
          "Popular New Delhi activities include water sports (like parasailing, scuba diving), spice plantation tours, heritage walks, wildlife safaris, and beach hopping."
      },
      {
        question: "What's the price range for New Delhi activity packages?",
        answer:
          "Prices can vary widely, starting from ₹300 for basic experiences to ₹15,000+ for full-day or multi-day guided tours."
      },
      {
        question: "How many New Delhi activity packages are available?",
        answer:
          "Delta Safari offers dozens of curated New Delhi activity packages across categories like adventure, nature, sightseeing, and cultural experiences."
      },
      {
        question: "What's the actual duration of New Delhi activity packages present on the Website?",
        answer:
          "Activity durations range from 1 hour quick tours to multi-day trips depending on your selection."
      },
      {
        question: "How many days are enough to enjoy exciting activities in New Delhi?",
        answer:
          "A 3 to 5 day stay in New Delhi is generally enough to cover key activities without rushing."
      },
      {
        question: "What are some crucial health and safety tips that you must follow while participating in famous activities of New Delhi?",
        answer:
          "Stay hydrated, follow guides’ instructions, wear proper gear for water/adventure sports, and avoid unsafe areas at night."
      },
      {
        question: "How can I make the most of my New Delhi activity tour package?",
        answer:
          "Book combo packages for better value, start your day early, and check reviews/ratings before booking specific activities."
      },
      {
        question: "Why should I book New Delhi activity packages with Delta Safari only?",
        answer:
          "DeltaSafari offers verified packages, best pricing, 24x7 support, and flexibility in customization."
      }
      ]
    }
      },
    ]

  },

  jaipur: {
    region: "indian",
    country: "India",
    title: "Jaipur Activities",
    filters: {
      price: { min: 956, max: 5866 }, duration: [
        "Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",
      ],
      rating: [
        "5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",
      ],
      specials: [
        "Free Cancellation",
        "Private Tour",
        "New On DeltaSafari",
        "Special Offer",
        "Skip The Line",
      ],
    },
    results: [
      {
        city: "Jaipur",
        title: "Private Jaipur Full One Day Tour In Pink City With Guide",
        slug: "one-day-tour-in-pink-city-with-guide",
        price: "₹3,911",
        reviews: 245,
        time: "6 hour(s) to 8 hour(s) (approx.)",
        description: "Explore the enchanting city of Jaipur, In 8 Hour tour of Jaipur! In the morning, there will be a 9 AM pick up from your hotel by your Drive Guide will meet you at City Center (Starting point Hawamahal).. Visit the highlights of the Amber Fort ( 2 Hours) Sheesh Mahal Jal Mahal ( Water Palace ) ( 20 Minutes ) Hawa Mahal ( The Palace of Winds ) (20 Minutes) Jantar Mantar ( The Observatory ) (40 Minutes) City Palace. ( 2 Hours) Later in the day, enjoy an afternoon of shopping in Jaipur where you will find an enticing variety of goods. Some of the most precious Gemstones, Silver Jewelry, Bangles, Clothes, Blu Pottery and Textiles etc. ( 2 Hours)",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/e1/d7/a8.jpg",
        images: [
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/09/6a/84/7f.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/09/6a/85/b5.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/09/6a/9e/df.jpg",
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/09/6a/99/26.jpg",
        ],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: English"
        ],
        packages: {
          packagetag: "DAY TOUR IN AC CAR WITH GUIDE",
          packageinfo: ["CAR, SUV CAR", "Pickup included"]
        },
        inclusions: [
          "Private transportation", "Bottled water", "Parking fees"
        ],
        exclusions: [
          "Lunch", "Dinner", "Entry ticket of Monmouth"
        ],
        address: {
          meetingPoint: "Jaipur Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 50,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Flyer228945",
            date: "03-04-2024 11:00:01",
            title: "Wonderful trip to Jaipur",
            rating: 5,
            comment:
              "It was a wonderful trip with Kiran. She was so kind and friendly and very knowledgeable about Jaipur tour spots. Her explanation was very clear and easy to understand. I am looking forward to seeing you soon with my family."
          },
          {
            name: "andreimocanu",
            date: "07-03-2024 11:50:45",
            title: "A must see Tour if you get the chance",
            rating: 5,
            comment:
              "We had a great time in Jaipur thanks to Jai. He's a very nice person, explained us a lot about the places we visited and speaks very good English. Highly recommend!"
          }
        ],
        bookingInfo: {
          price: "₹3,911",
          timeOptions: ["8:00 AM", "9:00 AM"],
          travelerLimit: 15
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Public transportation options are available nearby", "Specialized infant seats are available", "Not recommended for travelers with spinal injuries", "Not recommended for travelers with poor cardiovascular health", "Suitable for all physical fitness levels", "Shoes must be removed at places of worship, Knees and shoulders must be removed at the places of worship."
        ],
        intro: {
      title: "Top Activities To Do in jaipur",
      paragraphs: [
        "jaipur is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, jaipur is the ultimate place for them all.", "During your expedition, in this destination you can immerse yourself in Ports of Call Tours, Shore Excursions, Day Trips, Half-day Tours, Bus Tours, Photography Tours, Adventure Tours, 4WD Tours, Dining Experiences, Safaris, Nature And Wildlife Tours.",
        "In addition to this, you can explore Likely To Sell Out and other irreplaceable facets of jaipur to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in jaipur that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with Delta Safari's jaipur activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in jaipur activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with Delta Safari's jaipur tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in jaipur",
      list: [
        {
          question: "What are the top activities that every traveler can enjoy in jaipur?",
          answer:
            "Popular jaipur activities include water sports (like parasailing, scuba diving), spice plantation tours, heritage walks, wildlife safaris, and beach hopping."
        },
        {
          question: "What's the price range for jaipur activity packages?",
          answer:
            "Prices can vary widely, starting from ₹300 for basic experiences to ₹15,000+ for full-day or multi-day guided tours."
        },
        {
          question: "How many jaipur activity packages are available?",
          answer:
            "Delta Safari offers dozens of curated jaipur activity packages across categories like adventure, nature, sightseeing, and cultural experiences."
        },
        {
          question: "What's the actual duration of jaipur activity packages present on the Website?",
          answer:
            "Activity durations range from 1 hour quick tours to multi-day trips depending on your selection."
        },
        {
          question: "How many days are enough to enjoy exciting activities in jaipur?",
          answer:
            "A 3 to 5 day stay in jaipur is generally enough to cover key activities without rushing."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of jaipur?",
          answer:
            "Stay hydrated, follow guides’ instructions, wear proper gear for water/adventure sports, and avoid unsafe areas at night."
        },
        {
          question: "How can I make the most of my jaipur activity tour package?",
          answer:
            "Book combo packages for better value, start your day early, and check reviews/ratings before booking specific activities."
        },
        {
          question: "Why should I book jaipur activity packages with Delta Safari only?",
          answer:
            "DeltaSafari offers verified packages, best pricing, 24x7 support, and flexibility in customization."
        }
      ]
    }
      },
    ]

  },

  goa: {
    region: "indian",
    country: "India",
    title: "Goa Activities",
    filters: {
      price: { min: 1168, max: 11490 },
      duration: ["2 hour(s) 30 minute(s)", "7 hour(s)", "2 hour(s)"],
      rating: ["4-Star & up"],
      specials: ["Free Cancellation"]
    },
    results: [
      {
        city: "Goa",
        title: "Fontainhas Tales & Trails: E-Bike Adventure Journey",
        slug: "fontainhas-ebike-goa",
        price: "₹2,607",
        reviews: 121,
        time: "2 hour(s) 30 minute(s)",
        description: "This unique e-bike tour traces some of the far reaches of the multicultural side of Panjim, providing a perfect setting to experience the cultural heritage, vibrant present and scenic highlights of the city. We start right at what was the starting point for entering Panjim during the Portuguese times and ride up the Altinho hill, currently a hub for government offices, art gallery centres and grand residences. Get the bird’s eye view of the city and brace yourself for a ride full of fascinating facts, anecdotes and surprises.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/01/9d/ff.jpg",
        inclusions: [
          "E-Bike", "Trained Captain", "Guided Tour", "Safety Gears", "Sling Bag & First Aid Support."
        ],
        exclusions: [
          "Alcoholic beverage", "2-wheeler and LMV Rentals", "Tips", "Hotel pick up or drop off."
        ],
        address: {
          meetingPoint: "Goa Central Bus Stand",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7696.842450486841!2d74.123996!3d15.299327!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE3JzU3LjYiTiA3NMKwMDcnMjYuNCJF!5e0!3m2!1sen!2sus!4v1751623806855!5m2!1sen!2sus"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Goa experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Goa tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Goa Tour",
            rating: 5,
            comment:
              "Although I’ve been to Goa several times... Highly recommend booking your Goa tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Activities To Do in Goa",
      paragraphs: [
        "Goa is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Goa is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Ports of Call Tours, Shore Excursions, Day Trips, Half-day Tours, Bus Tours, Photography Tours, Adventure Tours, 4WD Tours, Dining Experiences, Safaris, Nature And Wildlife Tours.",
        "In addition to this, you can explore Likely To Sell Out and other irreplaceable facets of Goa to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Goa that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with EaseMyTrip's Goa activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Goa activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with EaseMyTrip's Goa tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Goa",
      list: [
        {
          question: "What are the top activities that every traveler can enjoy in Goa?",
          answer:
            "Popular Goa activities include water sports (like parasailing, scuba diving), spice plantation tours, heritage walks, wildlife safaris, and beach hopping."
        },
        {
          question: "What's the price range for Goa activity packages?",
          answer:
            "Prices can vary widely, starting from ₹300 for basic experiences to ₹15,000+ for full-day or multi-day guided tours."
        },
        {
          question: "How many Goa activity packages are available?",
          answer:
            "EaseMyTrip offers dozens of curated Goa activity packages across categories like adventure, nature, sightseeing, and cultural experiences."
        },
        {
          question: "What's the actual duration of Goa activity packages present on the Website?",
          answer:
            "Activity durations range from 1 hour quick tours to multi-day trips depending on your selection."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Goa?",
          answer:
            "A 3 to 5 day stay in Goa is generally enough to cover key activities without rushing."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Goa?",
          answer:
            "Stay hydrated, follow guides’ instructions, wear proper gear for water/adventure sports, and avoid unsafe areas at night."
        },
        {
          question: "How can I make the most of my Goa activity tour package?",
          answer:
            "Book combo packages for better value, start your day early, and check reviews/ratings before booking specific activities."
        },
        {
          question: "Why should I book Goa activity packages with EaseMyTrip only?",
          answer:
            "DeltaSafari offers verified packages, best pricing, 24x7 support, and flexibility in customization."
        }
      ]
    }
  },

  singapore: {
    region: "international",
    country: "Singapore",
    title: "Singapore Activities",
    filters: {
      price: { min: 246, max: 96123 }, duration: ["Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",],
      rating: ["5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",],
      specials: ["Free Cancellation",
        "Private Tour",
        "New On Delta Safari",
        "Special Offer",
        "Skip The Line",]
    },
    results: [
      {
        city: "Singapore",
        title: "Singapore Instagram Private Walking Tour (Private & All-Inclusive)",
        slug: "singapore-instagram-private-walking-tour-private-all-inclusive",
        price: "₹9370",
        reviews: 4521,
        time: "4 hour(s)",
        description: "Our Singapore Instagram Tour will take you to the most Instagrammable spots in Singapore all in one day. If you are looking for some culture, delicious food and a ton of great photos, then this is the tour for you! The morning will start with meeting one of our friendly, local guides at the meeting point. From there your tour will begin as you start your walk to some of the most beautiful and famous spots in Singapore. This full-day tour will be fully packed with famous landmarks, vintage architecture, secretly located spots and much much more! Full Schedule: 9:00 AM - Meet your guide at the Bayfront MRT Station 9:15 AM – Visit Marina bay sands 10:00 AM – Walk along the Helix Bridge 10:35 AM – Experience the incredible Gardens by the bay 11:20 AM – See the fountain at Merlion Park 12:00 PM – Enjoy a local lunch and cold drink along Haji Lane 12:45 PM - Awe at the street art at Haji Lane 1:00 PM -Get dropped off by your Guide at Bugis MRT Station",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/62/1e.jpg",
        images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/62/c9.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/64/e3.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/64/41.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/63/8e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/65/5e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/de/67/1d.jpg"],
        infoTags: [
          " Mobile Ticket",
        ],
        packages: {
          packagetag: "3 Hour Walking Tour (Private)",
          packageinfo: "Understand how the city grew from a fishing and farming villages to the modern metropolis across 500 years",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Singapore Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=singapore&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Singapore experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Singapore tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Singapore Tour",
            rating: 5,
            comment:
              "Although I’ve been to Singapore several times... Highly recommend booking your Singapore tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹11,490",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Singapore Attractions",
      paragraphs: [
        "Singapore is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Singapore is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Singapore to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Singapore that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Singapore activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Singapore activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Singapore tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Singapore",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Singapore?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Singapore."
        },
        {
          question: "What's the price range for Singapore activity packages?",
          answer:
            "At present, the Singapore activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Singapore activity packages are available?",
          answer:
            "Around 426 Singapore activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Singapore activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Singapore activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Singapore?",
          answer:
            "You can enjoy all the exciting activities in Singapore within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Singapore?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Singapore. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Singapore activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Singapore with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Singapore activity packages with Deltasafari only?",
          answer:
            "Booking your Singapore activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Singapore captivity packages for the best experiences."
        }
      ]
    }
  },
  dubai: {
    region: "international",
    country: "United Arab Emirates",
    title: "Dubai Activities",
    filters: {
      price: { min: 488, max: 146660 }, duration: ["Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",],
      rating: ["5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",],
      specials: ["Free Cancellation",
        "Private Tour",
        "New On Delta Safari",
        "Special Offer",
        "Skip The Line",]
    },
    results: [
      {
        city: "Dubai",
        title: "Sunset Desert Safari Dubai",
        slug: "sunset-desert-safari-dubai",
        price: "₹2363",
        reviews: 18,
        time: "6 hour(s)",
        description: "Discover Dubai with its famous Sunset Desert Safari , Dubai has a name for its Beautiful Evening Sunset Desert Safari Dubai.Unleash your inner adrenaline junkie with this four hour desert dune bash adventure from Dubai. Leave the city skyscrapers behind and make the 45-minute journey to the region of desert, known for its you . Then, aboard a comfortable 4x4 with a professional driver at the wheel, hold tight as you scale, slip and slide up and down the dunes.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/c9.jpg",
        images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cb.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0f/dd/20/1e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cc.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/ce.jpg"],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: Czech"
        ],
        packages: {
          packagetag: "Sunset Desert Safari Dubai",
          packageinfo: "Pickup Included",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Dubai Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Dubai experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Dubai tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Dubai Tour",
            rating: 5,
            comment:
              "Although I’ve been to Dubai several times... Highly recommend booking your Dubai tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹2,363",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Dubai Attractions",
      paragraphs: [
        "Dubai is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Dubai is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Dubai to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Dubai that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Dubai activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Dubai activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Dubai tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Dubai",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Dubai?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Dubai."
        },
        {
          question: "What's the price range for Dubai activity packages?",
          answer:
            "At present, the Dubai activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Dubai activity packages are available?",
          answer:
            "Around 426 Dubai activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Dubai activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Dubai activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Dubai?",
          answer:
            "You can enjoy all the exciting activities in Dubai within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Dubai?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Dubai. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Dubai activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Dubai with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Dubai activity packages with Deltasafari only?",
          answer:
            "Booking your Dubai activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Dubai captivity packages for the best experiences."
        }
      ]
    }
  },
  phuket: {
    region: "international",
    country: "Thailand",
    title: "Phuket Activities",
    filters: {
      price: { min: 488, max: 146660 }, duration: ["Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",],
      rating: ["5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",],
      specials: ["Free Cancellation",
        "Private Tour",
        "New On Delta Safari",
        "Special Offer",
        "Skip The Line",]
    },
    results: [
      {
        city: "Phuket",
        title: "Phuket to Ao Nang by Ao Nang Princess Ferry",
        slug: "phuket-to-ao-nang-by-ao-nang-princess-ferry",
        price: "₹2210",
        reviews: 24,
        time: "2 hour(s)",
        description: "Travel from Phuket to Ao Nang by Ao Nang Princess ferry with a convenient hotel pick-up in Phuket and hotel drop-off in Krabi.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/b7/e2/07.jpg",
        images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cb.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0f/dd/20/1e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cc.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/ce.jpg"],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: Czech"
        ],
        packages: {
          packagetag: "Sunset Desert Safari Phuket",
          packageinfo: "Pickup Included",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Phuket Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=phuket&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Phuket experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Phuket tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Phuket Tour",
            rating: 5,
            comment:
              "Although I’ve been to Phuket several times... Highly recommend booking your Phuket tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹2,363",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Phuket Attractions",
      paragraphs: [
        "Phuket is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Phuket is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Phuket to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Phuket that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Phuket activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Phuket activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Phuket tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Phuket",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Phuket?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Phuket."
        },
        {
          question: "What's the price range for Phuket activity packages?",
          answer:
            "At present, the Phuket activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Phuket activity packages are available?",
          answer:
            "Around 426 Phuket activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Phuket activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Phuket activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Phuket?",
          answer:
            "You can enjoy all the exciting activities in Phuket within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Phuket?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Phuket. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Phuket activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Phuket with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Phuket activity packages with Deltasafari only?",
          answer:
            "Booking your Phuket activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Phuket captivity packages for the best experiences."
        }
      ]
    }
  },
  hikkaduwa: {
    region: "international",
    country: "Sri Lanka",
    title: "Hikkaduwa Activities",
    filters: {
      price: { min: 488, max: 146660 }, duration: ["Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",],
      rating: ["5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",],
      specials: ["Free Cancellation",
        "Private Tour",
        "New On Delta Safari",
        "Special Offer",
        "Skip The Line",]
    },
    results: [
      {
        city: "Hikkadwa",
        title: "Whale watching tour to Mirissa From Hotels - Galle, Hikkaduwa, Bentota",
        slug: "whale-watching-tour-to-mirissa-from-hotels-galle-hikkaduwa-bentota",
        price: "₹7333",
        reviews: 127,
        time: "8 hour(s)",
        description: "Head to the South Coast of Srilanka is Mirissa where you'll get a chance to see 90% whales. Mirissa is considered as the best spot to enjoy whale watching. It's the most reliable place on Earth to do this Mirissa is located between Matara and Galle and is a major tourist spot for all whale lovers.Whale watching in Sri Lanka is one of the most unique and interesting water related activities you can do during your stay in Sri Lanka. Includes Hotel Pick ups and Drop Off by English Speaking Driver guide Admission Tickets to Whale watching by boat",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/9c/47/a1.jpg",
        images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cb.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0f/dd/20/1e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cc.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/ce.jpg"],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: Czech"
        ],
        packages: {
          packagetag: "Whale watching tour to Mirissa From Hotels - Galle, Hikkaduwa, Bentota",
          packageinfo: "Pickup Included",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Hikkaduwa Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=Hikkaduwa&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Hikkaduwa experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Hikkaduwa tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Hikkaduwa Tour",
            rating: 5,
            comment:
              "Although I’ve been to Hikkaduwa several times... Highly recommend booking your Hikkaduwa tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹2,363",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Hikkaduwa Attractions",
      paragraphs: [
        "Hikkaduwa is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Hikkaduwa is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Hikkaduwa to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Hikkaduwa that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Hikkaduwa activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Hikkaduwa activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Hikkaduwa tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Hikkaduwa",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Hikkaduwa?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Hikkaduwa."
        },
        {
          question: "What's the price range for Hikkaduwa activity packages?",
          answer:
            "At present, the Hikkaduwa activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Hikkaduwa activity packages are available?",
          answer:
            "Around 426 Hikkaduwa activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Hikkaduwa activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Hikkaduwa activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Hikkaduwa?",
          answer:
            "You can enjoy all the exciting activities in Hikkaduwa within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Hikkaduwa?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Hikkaduwa. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Hikkaduwa activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Hikkaduwa with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Hikkaduwa activity packages with Deltasafari only?",
          answer:
            "Booking your Hikkaduwa activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Hikkaduwa captivity packages for the best experiences."
        }
      ]
    }
  },
  bangkok: {
    region: "international",
    country: "Thailand",
    title: "Bangkok Activities",
    filters: {
      price: { min: 488, max: 146660 }, duration: ["Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
        "More than 3 days",],
      rating: ["5-Star",
        "4-Star & up",
        "3-Star & up",
        "2-Star & up",
        "1-Star & up",],
      specials: ["Free Cancellation",
        "Private Tour",
        "New On Delta Safari",
        "Special Offer",
        "Skip The Line",]
    },
    results: [
      {
        city: "Bangkok",
        title: "Hidden Bangkok Canal Tour: A 2-Hour Journey Through Local Life",
        slug: "bangkok-canal-boat-tour-big-buddha",
        price: "₹2922",
        reviews: 127,
        time: "2 hour(s)",
        description: "Hop on our time-travel boat and go back to 1960s Bangkok, where there were no busy roads or scooters. Cruise past old houses and communities, check out the artist village with its cozy shops, and feel the peace along the waterways. Don't miss the giant Buddha at 'Wat Paknarm'—it'll surprise you as it pops up right in front of the boat. Join us for a simple and fun adventure exploring Bangkok from the water!",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/11/f7/18/ca.jpg",
        images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cb.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0f/dd/20/1e.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/cc.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0b/f7/26/ce.jpg"],
        infoTags: [
          "Pickup offered", "Mobile Ticket", "Offered In: Czech"
        ],
        packages: {
          packagetag: "Sunset Desert Safari Bangkok",
          packageinfo: "Pickup Included",
        },
        inclusions: [
          "All taxes, fees and handling charges", "Tour host"
        ],
        exclusions: [
          "Transportation to/from attractions",
        ],
        address: {
          meetingPoint: "Bangkok Central Bus Stand",
          mapUrl: "https://maps.google.com/maps?q=bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        reviewsSummary: {
          overall: 5,
          totalReviews: 46,
          breakdown: {
            excellent: 38,
            veryGood: 5,
            average: 2,
            poor: 1,
            terrible: 0
          }
        },
        full_reviews: [
          {
            name: "Jet19928320480",
            date: "09-06-2024 08:26:17",
            title: "Best Bangkok experience",
            rating: 5,
            comment:
              "Mario is an exceptional tour guide... highly recommend glimpses of Bangkok tour."
          },
          {
            name: "deborahV292TY",
            date: "09-06-2024 08:24:35",
            title: "Bangkok Tour",
            rating: 5,
            comment:
              "Although I’ve been to Bangkok several times... Highly recommend booking your Bangkok tour with him.⭐"
          }
        ],
        bookingInfo: {
          price: "₹2,363",
          timeOptions: ["9:00 AM", "2:00 PM"],
          travelerLimit: 6
        },
        cancellationPolicy: "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        importantInfo: [
          "Infants and small children can ride in a pram or stroller",
          "Infants are required to sit on an adult's lap",
          "Not recommended for travelers with spinal injuries",
          "Not recommended for pregnant travelers",
          "Not recommended for travelers with poor cardiovascular health",
          "Travelers should have at least a moderate level of physical fitness",
          "A strict decorum of dress code to be followed at Churches and Temples. No shorts..."
        ],
      },
    ],
    intro: {
      title: "Top Bangkok Attractions",
      paragraphs: [
        "Bangkok is indeed one of the most promising tourist attractions around the world that's known for providing a wide range of thrilling activities to offer best experiences. Whether, you're a beginner seeking new exploratory adventures or an avid thrill-seeker looking for electrifying exposure, Bangkok is the ultimate place for them all. During your expedition, in this destination you can immerse yourself in Bus Tours, Ports of Call Tours, Shore Excursions, Half-day Tours, 4WD Tours, Nature And Wildlife Tours, Safaris, Day Trips, Photography Tours, Likely To Sell Out, Adventure Tours.",
        "In addition to this, you can explore Dining Experiences and other irreplaceable facets of Bangkok to fabricate picture-perfect memories. To quench your thirst for wanderlust, travelers like you have the amazing opportunity to plan, choose and enjoy the best activities in Bangkok that can be further tailored according to your desires.",
        "So, whether it's wandering or challenging yourself with something exhilarating, you can enjoy them all at once with DeltaSafari's Bangkok activity packages. We are India's leading and most-valued online travel platform that offers an unparalleled mosaic of activities to do in Bangkok activities that aims to offer real pleasure like no one else. With us, you can also unlock the best packages, special discounts, 24/7 customer support and other value-added services.",
        "So, why hesitate? Pack your bags now and kickstart your new ventures with DeltaSafari's Bangkok tour packages now to begin your fascinating journey like never before."
      ],
      buttonText: "Show More"
    },
    faqs: {
      heading: "FAQ's",
      subheading: "Essential Tips for Enjoying Activities in Bangkok",
      list: [
        {
          question: " What are the top activities that every traveler can enjoy in Bangkok?",
          answer:
            "Free Cancellation, Private Tour, Special Offer, New On DeltaSafari, Likely To Sell Out, Skip The Line, and indulging in vibrant night parties are the top adrenaline-rushing activities that you can enjoy in Bangkok."
        },
        {
          question: "What's the price range for Bangkok activity packages?",
          answer:
            "At present, the Bangkok activity packages price range from INR 433 to INR INR 636340. It can be further exceeded depending on the availability, exclusive demand, scheduled days or number of members included."
        },
        {
          question: "How many Bangkok activity packages are available?",
          answer:
            "Around 426 Bangkok activity packages are available on the platform. As your preference, personality, and budget plan, you can select any one of them to fabricate unforgettable moments like never before."
        },
        {
          question: " What's the actual duration of Bangkok activity packages present on the Website?",
          answer:
            "Currently, the actual duration of Bangkok activity packages can start from 6 minute(s) to 8 minute(s) (approx.) and it may reach up to 3 day based on the activity program, in which you indulged."
        },
        {
          question: "How many days are enough to enjoy exciting activities in Bangkok?",
          answer:
            "You can enjoy all the exciting activities in Bangkok within 4-5 days. So, this duration is ideal. However, if you want to explore this tourist attraction extensively with your loved ones, then we highly advise you to extend your plan anywhere to 7 days. During these days, you can truly unwind, relax, and actively participate in multiple thrilling activities in the country."
        },
        {
          question: "What are some crucial health and safety tips that you must follow while participating in famous activities of Bangkok?",
          answer:
            "Certainly, health is primary and you should never overlook the essential health and safety tips during your trip to Bangkok. Some of these preventive measures include using sun protection, practicing safe swimming, avoid visiting isolated places, staying hydrated, being careful about the food and water quality, taking precautions against mosquito-borne illnesses, and last but not least, seeking medical assistance when needed."
        },
        {
          question: "How can I make the most of my Bangkok activity tour package?",
          answer:
            "During the journey filled with lots of activities, you can discover the essence of Bangkok with our meticulously planned itineraries, led by seasoned guides who bring the destination to life. You can even dive into thrilling adventures and indulge in personalized experiences tailored just for you. Overall, every moment is crafted to infuse your journey with adventure, excitement, and cherished memories that will last a lifetime."
        },
        {
          question: "Why should I book Bangkok activity packages with Deltasafari only?",
          answer:
            "Booking your Bangkok activity packages with Deltasafari ensures an unparalleled experience tailored to your preferences. After making a booking with us, you can enjoy the convenience of 24/7 customer support, ensuring assistance whenever you need it. In line with this, you will be furnished with our best activity plans, meticulously crafted itineraries, and unlock unbeatable prices with our commitment to offering the lowest rates. Apart from this, with DeltaSafari you get experienced personalized services and exclusive deals that aim to amp your journey. So, why step back? Go ahead and embark on your dream adventure with DeltaSafari’s Bangkok captivity packages for the best experiences."
        }
      ]
    }
  },
};


export default CityActivities;
