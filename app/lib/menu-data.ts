export type LocationRecord = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  blurb: string;
  waitTime: string;
  eventTitle: string;
  eventCopy: string;
  eventLink: string;
};

export type MenuSectionRecord = {
  id: string;
  slug: string;
  name: string;
  sortOrder: number;
};

export type DrinkRecord = {
  id: string;
  slug: string;
  sectionId: string;
  name: string;
  category: string;
  description: string;
  priceCents: number;
  isFeatured: boolean;
};

export type FeaturedDrinkRecord = {
  locationId: string;
  drinkId: string;
  sortOrder: number;
};

export const locations: LocationRecord[] = [
  {
    id: "loc_orlando",
    slug: "orlando",
    name: "Orlando",
    subtitle: "Downtown flagship",
    blurb: "Downtown-friendly ordering with quick phone checkout and a clean pickup handoff.",
    waitTime: "8-12 min",
    eventTitle: "See what's happening in Orlando.",
    eventCopy: "Highlight downtown events, featured nights, and location-specific drops from the same guest flow.",
    eventLink: "/events/orlando",
  },
  {
    id: "loc_winter_springs",
    slug: "winter-springs",
    name: "Winter Springs",
    subtitle: "Neighborhood flow",
    blurb: "Same ordering flow, same Kava Culture feel, with room for local events and featured drops.",
    waitTime: "6-10 min",
    eventTitle: "See upcoming Winter Springs events.",
    eventCopy: "Keep neighborhood gatherings and recurring nights connected to the ordering experience.",
    eventLink: "/events/winter-springs",
  },
  {
    id: "loc_lake_mary",
    slug: "lake-mary",
    name: "Lake Mary",
    subtitle: "Suburban consistency",
    blurb: "A consistent branded menu experience that still leaves room for each store to spotlight its own rhythm.",
    waitTime: "7-11 min",
    eventTitle: "See upcoming Lake Mary events.",
    eventCopy: "Feature local programs and wellness-forward highlights for this store.",
    eventLink: "/events/lake-mary",
  },
];

export const sections: MenuSectionRecord[] = [
  { id: "sec_botanical_cocktails", slug: "botanical-cocktails", name: "Botanical Cocktails", sortOrder: 1 },
  { id: "sec_premium_plant_boys", slug: "premium-plant-boys", name: "Premium Plant Boys", sortOrder: 2 },
  { id: "sec_coffee_espresso", slug: "coffee-espresso", name: "Coffee & Espresso", sortOrder: 3 },
  { id: "sec_tea_herbal", slug: "tea-herbal-blends", name: "Tea & Herbal Blends", sortOrder: 4 },
];

export const drinks: DrinkRecord[] = [
  {
    id: "drink_fijian_sunset",
    slug: "fijian-sunset",
    sectionId: "sec_botanical_cocktails",
    name: "Fijian Sunset",
    category: "Tribe Crew Fave",
    description: "Island fruit blend and raspberry.",
    priceCents: 1800,
    isFeatured: true,
  },
  {
    id: "drink_raspberry_lemonade",
    slug: "raspberry-lemonade",
    sectionId: "sec_botanical_cocktails",
    name: "Raspberry Lemonade",
    category: "Tribe Crew Fave",
    description: "KC original with raspberry and lemonade.",
    priceCents: 1800,
    isFeatured: true,
  },
  {
    id: "drink_pineapple_express",
    slug: "pineapple-express",
    sectionId: "sec_botanical_cocktails",
    name: "Pineapple Express",
    category: "Tribe Crew Fave",
    description: "Pineapple, agave, and lime juice.",
    priceCents: 1800,
    isFeatured: true,
  },
  {
    id: "drink_down_by_the_bay",
    slug: "down-by-the-bay",
    sectionId: "sec_premium_plant_boys",
    name: "Down By The Bay",
    category: "Premium Plant Boys",
    description: "Watermelon, lime, and raspberry.",
    priceCents: 2000,
    isFeatured: true,
  },
  {
    id: "drink_twisted_tonic",
    slug: "twisted-tonic",
    sectionId: "sec_premium_plant_boys",
    name: "Twisted Tonic",
    category: "Premium Plant Boys",
    description: "Kava, elixir, raspberry, and coconut cream.",
    priceCents: 2000,
    isFeatured: true,
  },
  {
    id: "drink_kavateers_choice",
    slug: "kavateers-choice",
    sectionId: "sec_premium_plant_boys",
    name: "Kavateers Choice",
    category: "Premium Plant Boys",
    description: "Rotating recipe with premium ingredients.",
    priceCents: 2000,
    isFeatured: true,
  },
  {
    id: "drink_espresso",
    slug: "espresso",
    sectionId: "sec_coffee_espresso",
    name: "Espresso",
    category: "Coffee & Espresso",
    description: "Single or double espresso shot.",
    priceCents: 500,
    isFeatured: false,
  },
  {
    id: "drink_cold_brew",
    slug: "cold-brew",
    sectionId: "sec_coffee_espresso",
    name: "Cold Brew",
    category: "Coffee & Espresso",
    description: "Slow steeped house cold brew.",
    priceCents: 700,
    isFeatured: false,
  },
  {
    id: "drink_matcha_latte",
    slug: "matcha-latte",
    sectionId: "sec_tea_herbal",
    name: "Matcha Latte",
    category: "Tea & Herbal Blends",
    description: "Ceremonial matcha with choice of milk, hot or iced.",
    priceCents: 900,
    isFeatured: true,
  },
  {
    id: "drink_golden_latte",
    slug: "golden-latte",
    sectionId: "sec_tea_herbal",
    name: "Golden Latte",
    category: "Tea & Herbal Blends",
    description: "Turmeric and black pepper with choice of milk.",
    priceCents: 900,
    isFeatured: true,
  },
];

export const featuredDrinks: FeaturedDrinkRecord[] = [
  { locationId: "loc_orlando", drinkId: "drink_fijian_sunset", sortOrder: 1 },
  { locationId: "loc_orlando", drinkId: "drink_raspberry_lemonade", sortOrder: 2 },
  { locationId: "loc_orlando", drinkId: "drink_twisted_tonic", sortOrder: 3 },
  { locationId: "loc_orlando", drinkId: "drink_pineapple_express", sortOrder: 4 },
  { locationId: "loc_orlando", drinkId: "drink_espresso", sortOrder: 5 },
  { locationId: "loc_orlando", drinkId: "drink_golden_latte", sortOrder: 6 },
  { locationId: "loc_winter_springs", drinkId: "drink_down_by_the_bay", sortOrder: 1 },
  { locationId: "loc_winter_springs", drinkId: "drink_kavateers_choice", sortOrder: 2 },
  { locationId: "loc_winter_springs", drinkId: "drink_matcha_latte", sortOrder: 3 },
  { locationId: "loc_winter_springs", drinkId: "drink_cold_brew", sortOrder: 4 },
  { locationId: "loc_lake_mary", drinkId: "drink_golden_latte", sortOrder: 1 },
  { locationId: "loc_lake_mary", drinkId: "drink_matcha_latte", sortOrder: 2 },
  { locationId: "loc_lake_mary", drinkId: "drink_espresso", sortOrder: 3 },
];

export function buildMenuResponse() {
  const sectionsById = new Map(sections.map((section) => [section.id, section]));
  const drinksById = new Map(drinks.map((drink) => [drink.id, drink]));

  return {
    locations: locations.map((location) => ({
      ...location,
      featuredDrinks: featuredDrinks
        .filter((item) => item.locationId === location.id)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item) => {
          const drink = drinksById.get(item.drinkId);
          if (!drink) return null;
          const section = sectionsById.get(drink.sectionId);
          return {
            id: drink.id,
            slug: drink.slug,
            name: drink.name,
            category: drink.category,
            description: drink.description,
            priceCents: drink.priceCents,
            section: section?.name ?? null,
          };
        })
        .filter(Boolean),
    })),
    sections: sections
      .slice()
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((section) => ({
        ...section,
        drinks: drinks
          .filter((drink) => drink.sectionId === section.id)
          .map((drink) => ({
            id: drink.id,
            slug: drink.slug,
            name: drink.name,
            category: drink.category,
            description: drink.description,
            priceCents: drink.priceCents,
            isFeatured: drink.isFeatured,
          })),
      })),
  };
}
