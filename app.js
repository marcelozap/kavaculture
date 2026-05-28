const menuData = {
  locations: [
    {
      id: "orlando",
      name: "Orlando",
      subtitle: "Downtown flagship",
      blurb: "Downtown-friendly ordering with quick phone checkout and a clean pickup handoff.",
      wait: "Ready in 8-12 min",
      featured: ["Downtown", "Late Night", "Featured Cocktails"],
      featuredDrinkIds: ["fijian-sunset", "raspberry-lemonade", "twisted-tonic", "pineapple-express", "espresso", "golden-latte"],
      stats: [
        { label: "Store rhythm", value: "Fast-moving downtown traffic with a polished mobile handoff" },
        { label: "Featured menu", value: "Botanical cocktails, premium plant boys, and quick reorder favorites" },
        { label: "Guest flow", value: "Phone tipping and digital checkout from the first screen" },
      ],
      defaults: { drinkId: "fijian-sunset", feelingId: "mood-joy", infusionId: "fiji" },
      systemPoints: [
        { title: "Store-specific featured menus", copy: "Push downtown favorites, late-night specials, and high-traffic featured drinks without changing the full product." },
        { title: "Shared checkout behavior", copy: "Keep the same ordering logic across stores so regulars know exactly what to expect." },
        { title: "Events and community hooks", copy: "Tie mobile ordering into downtown events, gatherings, and recurring programming." },
      ],
      eventTitle: "See what's happening in Orlando.",
      eventCopy: "Use the same mobile experience to move guests from ordering into upcoming downtown events, featured nights, and community programming.",
      eventLink: "https://kavaculture.xyz/events/orlando",
    },
    {
      id: "winter-springs",
      name: "Winter Springs",
      subtitle: "Neighborhood flow",
      blurb: "Same ordering flow, same Kava Culture feel, with room for local events and featured drops.",
      wait: "Ready in 6-10 min",
      featured: ["Neighborhood", "Featured Drops", "Recurring Nights"],
      featuredDrinkIds: ["down-by-the-bay", "kavateers-choice", "rappleberry-crush", "matcha-latte", "cold-brew", "churro-cha-cha"],
      stats: [
        { label: "Store rhythm", value: "A calmer neighborhood flow with room for repeat regulars and community nights" },
        { label: "Featured menu", value: "Rotating highlights, botanical infusions, and store-specific drops" },
        { label: "Guest flow", value: "A simple mobile path that stays welcoming and easy to repeat" },
      ],
      defaults: { drinkId: "down-by-the-bay", feelingId: "relax-move", infusionId: "red-vein" },
      systemPoints: [
        { title: "Store-specific featured menus", copy: "Rotate local specials, feature recurring favorites, and spotlight event-based drinks by night." },
        { title: "Shared checkout behavior", copy: "Keep the same branded ordering flow while giving the Winter Springs location its own pace." },
        { title: "Events and community hooks", copy: "Use the same framework to drive neighborhood events, local drops, and community programming." },
      ],
      eventTitle: "See upcoming Winter Springs events.",
      eventCopy: "Highlight neighborhood gatherings, recurring nights, and store-specific happenings without sending guests into a separate disconnected flow.",
      eventLink: "https://kavaculture.xyz/events/winter-springs",
    },
    {
      id: "lake-mary",
      name: "Lake Mary",
      subtitle: "Suburban consistency",
      blurb: "A consistent branded menu experience that still leaves room for each store to spotlight its own rhythm.",
      wait: "Ready in 7-11 min",
      featured: ["Consistent", "Family-Friendly", "Featured Wellness"],
      featuredDrinkIds: ["golden-latte", "matcha-latte", "kava-supreme", "nutella-bomb", "latte", "loose-leaf-herbal-tea"],
      stats: [
        { label: "Store rhythm", value: "A consistent suburban flow built around repeat customers and an easy return visit" },
        { label: "Featured menu", value: "Wellness-forward drinks, featured add-ons, and clean menu discovery" },
        { label: "Guest flow", value: "A structured experience that still feels local to the store" },
      ],
      defaults: { drinkId: "golden-latte", feelingId: "strength-stamina", infusionId: "yellow-vein" },
      systemPoints: [
        { title: "Store-specific featured menus", copy: "Showcase wellness-forward drinks, daytime favorites, and cleaner featured bundles for this location." },
        { title: "Shared checkout behavior", copy: "Use the same product structure across stores while adapting the featured experience for Lake Mary." },
        { title: "Events and community hooks", copy: "Promote local events, community meetups, and recurring programs from the same experience." },
      ],
      eventTitle: "See upcoming Lake Mary events.",
      eventCopy: "Make events feel native to the ordering journey so guests can move from the menu into featured nights and community programming.",
      eventLink: "https://kavaculture.xyz/events/lake-mary",
    },
  ],
  feelings: [
    { id: "calm-social", name: "Calm + Social", description: "Easy, welcoming, porch-session energy." },
    { id: "relax-move", name: "Relax + Move", description: "Soft landing with enough lift to stay present." },
    { id: "mood-joy", name: "Mood + Joy", description: "Bright, fruity, and upbeat." },
    { id: "energy-focus", name: "Energy + Focus", description: "Sharper, lighter, and built for momentum." },
    { id: "strength-stamina", name: "Strength + Stamina", description: "Full-bodied, steady, stronger through the finish." },
  ],
  infusions: [
    { id: "fiji", name: "Fiji", cue: "Calm + Social", accent: "#6ef2ff", description: "The mellow, classic shell-up feel." },
    { id: "green-vein", name: "Green Vein", cue: "Mood + Joy", accent: "#8dffad", description: "Bright botanical energy with an easy smile." },
    { id: "white-vein", name: "White Vein", cue: "Energy + Focus", accent: "#ffe792", description: "Cleaner lift for daytime builds." },
    { id: "red-vein", name: "Red Vein", cue: "Relax + Move", accent: "#ff8893", description: "A smoother, softer glide into the night." },
    { id: "yellow-vein", name: "Yellow Vein", cue: "Strength + Stamina", accent: "#ffd86a", description: "Rounder body with a stronger finish." },
  ],
  drinks: [
    { id: "elixir-tonic", section: "Botanical Cocktails", name: "Elixir Tonic", category: "Tribe Crew Fave", price: 18, feelingId: "calm-social", infusionId: "fiji", description: "choice of elixir + on the rocks", tags: ["Elixir", "On the rocks", "Classic pour"], colors: ["#cff8ff", "#64dbe9", "#2f7db5"], foam: "rgba(237, 252, 255, 0.92)", straw: "#89f7ff", garnish: "#f9f08f" },
    { id: "raspberry-lemonade", section: "Botanical Cocktails", name: "Raspberry Lemonade", category: "Tribe Crew Fave", price: 18, feelingId: "mood-joy", infusionId: "green-vein", description: "KC original + raspberry + lemonade", tags: ["KC original", "Raspberry", "Lemonade"], colors: ["#ffd6eb", "#ff6f95", "#ffcf60"], foam: "rgba(255, 233, 242, 0.94)", straw: "#ffb5d8", garnish: "#fff296" },
    { id: "mango-bango", section: "Botanical Cocktails", name: "Mango Bango", category: "Tribe Crew Fave", price: 18, feelingId: "mood-joy", infusionId: "green-vein", description: "mango nectar puree + agave", tags: ["Mango nectar", "Agave", "Tropical"], colors: ["#fff1a8", "#ffbf54", "#ff8a34"], foam: "rgba(255, 244, 208, 0.92)", straw: "#8cf5ff", garnish: "#ffe079" },
    { id: "fijian-sunset", section: "Botanical Cocktails", name: "Fijian Sunset", category: "Tribe Crew Fave", price: 18, feelingId: "mood-joy", infusionId: "fiji", description: "island fruit blend + raspberry", tags: ["Island fruit blend", "Raspberry", "Sunset glow"], colors: ["#ffd693", "#ff9960", "#ff579f"], foam: "rgba(255, 236, 214, 0.95)", straw: "#7ef5ff", garnish: "#ffd87d" },
    { id: "rappleberry-crush", section: "Botanical Cocktails", name: "Rappleberry Crush", category: "Tribe Crew Fave", price: 18, feelingId: "relax-move", infusionId: "red-vein", description: "apple + raspberry + honey", tags: ["Apple", "Raspberry", "Honey"], colors: ["#ffc3d0", "#ff6693", "#9d2d71"], foam: "rgba(255, 223, 232, 0.92)", straw: "#ffc9ef", garnish: "#ffcc78" },
    { id: "pineapple-express", section: "Botanical Cocktails", name: "Pineapple Express", category: "Tribe Crew Fave", price: 18, feelingId: "energy-focus", infusionId: "green-vein", description: "pineapple + agave + lime juice", tags: ["Pineapple", "Agave", "Lime juice"], colors: ["#fff1a2", "#ffd15b", "#ff8f42"], foam: "rgba(255, 245, 212, 0.92)", straw: "#87f9ff", garnish: "#fff08a" },
    { id: "this-shit-is-bananas", section: "Botanical Cocktails", name: "This Shit Is Bananas", category: "Boosted Cocktail", price: 18, feelingId: "strength-stamina", infusionId: "yellow-vein", description: "chocolate or vanilla + banana", tags: ["Chocolate", "Vanilla", "Banana"], colors: ["#fff0b6", "#f5c76a", "#9f5e31"], foam: "rgba(255, 243, 205, 0.9)", straw: "#8fe8ff", garnish: "#ffe47c" },
    { id: "choco-cherry", section: "Botanical Cocktails", name: "Choco-Cherry", category: "Boosted Cocktail", price: 18, feelingId: "energy-focus", infusionId: "white-vein", description: "cherry + chocolate + almond cream", tags: ["Cherry", "Chocolate", "Almond cream"], colors: ["#ffd8de", "#d04165", "#56253c"], foam: "rgba(255, 227, 232, 0.9)", straw: "#91f1ff", garnish: "#ffdb7c" },
    { id: "cookie-dough", section: "Botanical Cocktails", name: "Cookie Dough", category: "Boosted Cocktail", price: 18, feelingId: "mood-joy", infusionId: "green-vein", description: "chocolate + caramel + almond cream", tags: ["Chocolate", "Caramel", "Almond cream"], colors: ["#ffe1b9", "#c98a54", "#6a3f2e"], foam: "rgba(255, 234, 206, 0.9)", straw: "#8be7ff", garnish: "#ffd47a" },
    { id: "churro-cha-cha", section: "Botanical Cocktails", name: "Churro Cha Cha", category: "Premium Crushed Leaf", price: 18, feelingId: "strength-stamina", infusionId: "yellow-vein", description: "chocolate or vanilla + cinnamon + agave + coconut cream", tags: ["Cinnamon", "Agave", "Coconut cream"], colors: ["#fff0d6", "#dbaf72", "#9c5b3c"], foam: "rgba(255, 242, 220, 0.9)", straw: "#a1f0ff", garnish: "#ffe18b" },
    { id: "nutella-bomb", section: "Botanical Cocktails", name: "Nutella Bomb", category: "Premium Crushed Leaf", price: 18, feelingId: "mood-joy", infusionId: "green-vein", description: "hazelnut + chocolate + coconut cream", tags: ["Hazelnut", "Chocolate", "Coconut cream"], colors: ["#ffe0b2", "#9b5f3b", "#46281f"], foam: "rgba(255, 228, 200, 0.9)", straw: "#9eeeff", garnish: "#f7d37a" },
    { id: "peanut-butter-cup", section: "Botanical Cocktails", name: "Peanut Butter Cup", category: "Premium Crushed Leaf", price: 18, feelingId: "strength-stamina", infusionId: "white-vein", description: "chocolate + PB2 + almond cream", tags: ["Chocolate", "PB2", "Almond cream"], colors: ["#fce0b5", "#b97f42", "#5d311f"], foam: "rgba(255, 231, 198, 0.9)", straw: "#7ed8ff", garnish: "#f3ca73" },
    { id: "twisted-tonic", section: "Premium Plant Boys", name: "Twisted Tonic", category: "Premium Plant Boys", price: 20, feelingId: "calm-social", infusionId: "fiji", description: "kava + elixir + raspberry + coconut cream", tags: ["Kava", "Elixir", "Raspberry"], colors: ["#ffd7f1", "#8d6eff", "#4d2c96"], foam: "rgba(249, 226, 246, 0.9)", straw: "#d2b8ff", garnish: "#ffe38c" },
    { id: "down-by-the-bay", section: "Premium Plant Boys", name: "Down By The Bay", category: "Premium Plant Boys", price: 20, feelingId: "relax-move", infusionId: "red-vein", description: "watermelon + lime + raspberry", tags: ["Watermelon", "Lime", "Raspberry"], colors: ["#ffd7d9", "#ff7d8d", "#7de2b2"], foam: "rgba(255, 227, 230, 0.9)", straw: "#98fbff", garnish: "#fff08f" },
    { id: "kava-supreme", section: "Premium Plant Boys", name: "Kava Supreme", category: "Premium Plant Boys", price: 20, feelingId: "strength-stamina", infusionId: "fiji", description: "Fiji + lift + raspberry + coconut cream", tags: ["Fiji", "Lift", "Raspberry"], colors: ["#ffe7c3", "#d59ef7", "#5d48af"], foam: "rgba(255, 239, 218, 0.9)", straw: "#cde9ff", garnish: "#ffe98c" },
    { id: "kavateers-choice", section: "Premium Plant Boys", name: "Kavateers Choice", category: "Premium Plant Boys", price: 20, feelingId: "mood-joy", infusionId: "green-vein", description: "rotating recipe + premium ingredients hand-crafted with love", tags: ["Rotating recipe", "Premium ingredients", "House special"], colors: ["#f3f7cd", "#7cf0c0", "#35b9d4"], foam: "rgba(244, 252, 226, 0.9)", straw: "#a6ffe9", garnish: "#c1ff88" },
    { id: "cold-brew", section: "Coffee & Espresso", name: "Cold Brew", category: "Coffee & Espresso", price: 7, feelingId: "energy-focus", infusionId: "white-vein", description: "slow steeped + house", tags: ["Cold brew", "House roast", "Cafe"], colors: ["#e4d5c1", "#8c6045", "#3d261e"], foam: "rgba(241, 230, 216, 0.88)", straw: "#bcecff", garnish: "#efd28b" },
    { id: "latte", section: "Coffee & Espresso", name: "Latte", category: "Coffee & Espresso", price: 9, feelingId: "energy-focus", infusionId: "white-vein", description: "choice of flavor + milk, hot or iced", tags: ["Choice of flavor", "Choice of milk", "Hot or iced"], colors: ["#f4e5d2", "#bf8d62", "#7c533f"], foam: "rgba(248, 239, 228, 0.92)", straw: "#b0f0ff", garnish: "#f6d98a" },
    { id: "french-press", section: "Coffee & Espresso", name: "French Press", category: "Coffee & Espresso", price: 6, feelingId: "energy-focus", infusionId: "white-vein", description: "slow steeped + served hot", tags: ["French press", "Served hot", "Slow steeped"], colors: ["#e8d8c7", "#80543d", "#2e1f1a"], foam: "rgba(239, 230, 220, 0.9)", straw: "#d9f7ff", garnish: "#efd792" },
    { id: "bu-latte", section: "Coffee & Espresso", name: "Bu-Latte", category: "Coffee & Espresso", price: 10, feelingId: "mood-joy", infusionId: "green-vein", description: "choice of botanical + choice of flavor + choice of milk, iced only", tags: ["Botanical", "Flavor", "Iced only"], colors: ["#e4f2d0", "#8cd6af", "#5b8fa6"], foam: "rgba(240, 250, 228, 0.92)", straw: "#9ff7ff", garnish: "#d7ff98" },
    { id: "cappuccino", section: "Coffee & Espresso", name: "Cappuccino", category: "Coffee & Espresso", price: 5, feelingId: "energy-focus", infusionId: "white-vein", description: "espresso + foam", tags: ["Espresso", "Foam", "Cafe classic"], colors: ["#f1e0c6", "#af7b57", "#654233"], foam: "rgba(249, 242, 233, 0.96)", straw: "#dff9ff", garnish: "#f0d48a" },
    { id: "americano", section: "Coffee & Espresso", name: "Americano", category: "Coffee & Espresso", price: 7, feelingId: "energy-focus", infusionId: "white-vein", description: "espresso + water", tags: ["Espresso", "Water", "Clean coffee"], colors: ["#e9dbc7", "#86614d", "#3e2d26"], foam: "rgba(245, 236, 226, 0.9)", straw: "#dcf8ff", garnish: "#edd48b" },
    { id: "espresso", section: "Coffee & Espresso", name: "Espresso", category: "Coffee & Espresso", price: 5, feelingId: "energy-focus", infusionId: "white-vein", description: "single or double espresso shot", tags: ["Single", "Double", "Shot"], colors: ["#f0dfcb", "#926a4c", "#33221b"], foam: "rgba(244, 236, 226, 0.9)", straw: "#e5f8ff", garnish: "#f1d690" },
    { id: "loose-leaf-herbal-tea", section: "Tea & Herbal Blends", name: "Loose Leaf Herbal Tea", category: "Tea & Herbal Blends", price: 6, feelingId: "calm-social", infusionId: "fiji", description: "rotating artisan blends, any hot or iced", tags: ["Artisan blend", "Hot or iced", "Tea"], colors: ["#eef5c8", "#b4cc71", "#6d8d53"], foam: "rgba(244, 249, 222, 0.88)", straw: "#b6f8e8", garnish: "#f3ef95" },
    { id: "matcha-latte", section: "Tea & Herbal Blends", name: "Matcha Latte", category: "Tea & Herbal Blends", price: 9, feelingId: "energy-focus", infusionId: "green-vein", description: "matcha (ceremonial green tea), hot or iced + choice of milk", tags: ["Matcha", "Choice of milk", "Hot or iced"], colors: ["#ecf7c0", "#8fd585", "#5d9875"], foam: "rgba(246, 252, 226, 0.92)", straw: "#baf9ff", garnish: "#dbff98" },
    { id: "loose-leaf-new-level-tea", section: "Tea & Herbal Blends", name: "Loose Leaf New Level Tea", category: "Tea & Herbal Blends", price: 7, feelingId: "strength-stamina", infusionId: "yellow-vein", description: "25 mg per serving", tags: ["Loose leaf", "25 mg", "Elevated tea"], colors: ["#f6efc1", "#d8b95d", "#8b6d42"], foam: "rgba(251, 245, 219, 0.9)", straw: "#c5f4ff", garnish: "#ffe98a" },
    { id: "golden-latte", section: "Tea & Herbal Blends", name: "Golden Latte", category: "Tea & Herbal Blends", price: 9, feelingId: "strength-stamina", infusionId: "yellow-vein", description: "turmeric + black pepper, hot or iced + choice of milk", tags: ["Turmeric", "Black pepper", "Choice of milk"], colors: ["#fff0b2", "#f0bb4c", "#b2722e"], foam: "rgba(255, 244, 210, 0.92)", straw: "#a5efff", garnish: "#ffea90" },
  ],
  flavors: [
    { id: "raspberry", name: "Raspberry", price: 0.75, note: "Bright berry lift" },
    { id: "coconut-cream", name: "Coconut cream", price: 1.25, note: "Silky tropical body" },
    { id: "lime", name: "Lime", price: 0.5, note: "Sharper citrus snap" },
    { id: "vanilla", name: "Vanilla", price: 0.75, note: "Soft dessert finish" },
    { id: "agave", name: "Agave", price: 0.5, note: "Round sweetness" },
    { id: "hazelnut", name: "Hazelnut", price: 1, note: "Nutty coffee note" },
    { id: "almond-milk", name: "Almond milk", price: 1, note: "Plant-based creaminess" },
    { id: "espresso-float", name: "Espresso float", price: 1.75, note: "Coffee-forward kick" },
    { id: "cookie-butter", name: "Cookie butter", price: 1.5, note: "Rich sweet spice" },
  ],
  elevateOptions: [
    { id: "house", name: "House build", price: 0, note: "Keep it menu standard." },
    { id: "premium-leaf", name: "Premium crushed leaf", price: 3, note: "Fuller body and stronger house flavor." },
    { id: "new-level", name: "30ml new level shot", price: 4.5, note: "Fast upsell path for regulars." },
    { id: "top-shelf", name: "Top shelf shot", price: 5, note: "Bigger finish without leaving checkout." },
  ],
  paymentMethods: [
    { id: "bank", name: "Direct bank pay", shortName: "Direct bank pay", label: "Lowest fee", note: "Best margin for the bar on a hosted pay link or ACH-style checkout.", feeRate: 0.012, feeFixed: 0.05 },
    { id: "wallet", name: "Phone wallet link", shortName: "Phone wallet", label: "Fast guest UX", note: "Great for QR, Apple Pay, or an SMS payment page.", feeRate: 0.021, feeFixed: 0.08 },
  ],
  tipOptions: [15, 20, 25, 30],
};

const state = {
  selectedLocationId: "orlando",
  hasStartedOrder: false,
  showFullMenu: false,
  selectedFeelingId: "mood-joy",
  selectedInfusionId: "fiji",
  selectedDrinkId: "fijian-sunset",
  selectedFlavorIds: new Set(["raspberry"]),
  selectedElevateId: "house",
  selectedTip: 20,
  selectedPaymentId: "bank",
  guestName: "Tribe Guest",
  quantity: 1,
};

const refs = {
  locationOptions: document.querySelector("#locationOptions"),
  selectedLocationName: document.querySelector("#selectedLocationName"),
  selectedLocationMeta: document.querySelector("#selectedLocationMeta"),
  startOrderButton: document.querySelector("#startOrderButton"),
  heroBadges: document.querySelector("#heroBadges"),
  heroStats: document.querySelector("#heroStats"),
  feelingOptions: document.querySelector("#feelingOptions"),
  infusionOptions: document.querySelector("#infusionOptions"),
  drinkOptions: document.querySelector("#drinkOptions"),
  flavorOptions: document.querySelector("#flavorOptions"),
  elevateOptions: document.querySelector("#elevateOptions"),
  tipOptions: document.querySelector("#tipOptions"),
  paymentOptions: document.querySelector("#paymentOptions"),
  feeBanner: document.querySelector("#feeBanner"),
  providerBadge: document.querySelector("#providerBadge"),
  stageDrinkName: document.querySelector("#stageDrinkName"),
  stageDrinkPrice: document.querySelector("#stageDrinkPrice"),
  stageDrinkDescription: document.querySelector("#stageDrinkDescription"),
  stageIngredients: document.querySelector("#stageIngredients"),
  stageDrinkPoster: document.querySelector("#stageDrinkPoster"),
  stageFeeling: document.querySelector("#stageFeeling"),
  stageInfusion: document.querySelector("#stageInfusion"),
  stagePaymentHint: document.querySelector("#stagePaymentHint"),
  drinkCard: document.querySelector("#drinkCard"),
  feelingPreview: document.querySelector("#feelingPreview"),
  infusionPreview: document.querySelector("#infusionPreview"),
  drinkPreview: document.querySelector("#drinkPreview"),
  paymentPreview: document.querySelector("#paymentPreview"),
  qrCallout: document.querySelector("#qrCallout"),
  quantityValue: document.querySelector("#quantityValue"),
  summaryList: document.querySelector("#summaryList"),
  subtotalValue: document.querySelector("#subtotalValue"),
  tipValue: document.querySelector("#tipValue"),
  totalValue: document.querySelector("#totalValue"),
  checkoutNote: document.querySelector("#checkoutNote"),
  guestName: document.querySelector("#guestName"),
  submitOrder: document.querySelector("#submitOrder"),
  decreaseQuantity: document.querySelector("#decreaseQuantity"),
  increaseQuantity: document.querySelector("#increaseQuantity"),
  builderGrid: document.querySelector("#builder"),
  flowGate: document.querySelector("#flowGate"),
  locationsGrid: document.querySelector("#locationsGrid"),
  systemPoints: document.querySelector("#systemPoints"),
  eventsTitle: document.querySelector("#eventsTitle"),
  eventsCopy: document.querySelector("#eventsCopy"),
  eventsLink: document.querySelector("#eventsLink"),
};

const byId = (items, id) => items.find((item) => item.id === id);
const getSelectedLocation = () => byId(menuData.locations, state.selectedLocationId);
const getSelectedDrink = () => byId(menuData.drinks, state.selectedDrinkId);
const getSelectedFeeling = () => byId(menuData.feelings, state.selectedFeelingId);
const getSelectedInfusion = () => byId(menuData.infusions, state.selectedInfusionId);
const getSelectedElevate = () => byId(menuData.elevateOptions, state.selectedElevateId);
const getSelectedPayment = () => byId(menuData.paymentMethods, state.selectedPaymentId);
const getSelectedFlavors = () => menuData.flavors.filter((flavor) => state.selectedFlavorIds.has(flavor.id));

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildDrinkPoster(drink) {
  const [a, b, c] = drink.colors;
  const tags = drink.tags.slice(0, 3);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768" role="img" aria-label="${escapeText(drink.name)} poster art">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${a}" stop-opacity="0.72" />
          <stop offset="50%" stop-color="${b}" stop-opacity="0.38" />
          <stop offset="100%" stop-color="${c}" stop-opacity="0.68" />
        </linearGradient>
        <linearGradient id="drinkFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${a}" />
          <stop offset="52%" stop-color="${b}" />
          <stop offset="100%" stop-color="${c}" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
      <image href="./assets/kava-drink-poster-bg.png" width="768" height="768" preserveAspectRatio="xMidYMid slice" opacity="0.92" />
      <rect width="768" height="768" fill="url(#bg)" />
      <rect x="28" y="28" width="712" height="712" rx="34" fill="none" stroke="#ffeecc" stroke-opacity="0.55" stroke-width="2" />
      <rect x="48" y="48" width="672" height="672" rx="26" fill="#080812" fill-opacity="0.14" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.5" />
      <ellipse cx="384" cy="388" rx="180" ry="180" fill="${b}" fill-opacity="0.24" filter="url(#glow)" />
      <ellipse cx="384" cy="606" rx="170" ry="34" fill="#000000" fill-opacity="0.28" />
      <g transform="translate(0,18)">
        <path d="M306 172 h156 l-24 352 c-3 41 -20 76 -54 94 c-34 18 -88 18 -122 0 c-34 -18 -51 -53 -54 -94 z" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.52" stroke-width="3.2"/>
        <path d="M326 202 h116 l-16 300 c-2 27 -12 50 -34 63 c-22 13 -58 13 -80 0 c-22 -13 -32 -36 -34 -63 z" fill="url(#drinkFill)" opacity="0.96" />
        <path d="M328 204 h112 l-12 34 h-88 z" fill="${drink.foam}" opacity="0.92" />
        <path d="M452 154 l24 0 l-28 152 l-18 0 z" fill="${drink.straw}" opacity="0.9" />
        <circle cx="454" cy="236" r="22" fill="${drink.garnish}" opacity="0.9" />
      </g>
      <text x="384" y="104" text-anchor="middle" fill="rgba(255,235,172,0.94)" font-family="Orbitron, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="6">DRINK LOVE</text>
      <text x="384" y="146" text-anchor="middle" fill="rgba(255,246,227,0.86)" font-family="Georgia, serif" font-size="38" font-style="italic">Craft Your Experience</text>
      <text x="76" y="516" fill="rgba(255,226,162,0.84)" font-family="Orbitron, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="4">${escapeText(drink.section.toUpperCase())}</text>
      <text x="76" y="560" fill="#fff7ec" font-family="Georgia, serif" font-size="44" font-weight="600">${escapeText(drink.name)}</text>
      <text x="76" y="598" fill="rgba(255,233,197,0.88)" font-family="Arial, sans-serif" font-size="18" font-weight="600">${escapeText(drink.category)} • ${formatCurrency(drink.price)}</text>
      <text x="76" y="632" fill="rgba(240,245,255,0.92)" font-family="Arial, sans-serif" font-size="22">${escapeText(drink.description)}</text>
      <text x="76" y="676" fill="rgba(255,232,179,0.92)" font-family="Arial, sans-serif" font-size="14" font-weight="700">${escapeText(tags.join(" • "))}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getFlavorUnitTotal() {
  return getSelectedFlavors().reduce((sum, item) => sum + item.price, 0);
}

function getUnitSubtotal() {
  return getSelectedDrink().price + getSelectedElevate().price + getFlavorUnitTotal();
}

function getSubtotal() {
  return getUnitSubtotal() * state.quantity;
}

function getTipAmount() {
  return getSubtotal() * (state.selectedTip / 100);
}

function getGuestTotal() {
  return getSubtotal() + getTipAmount();
}

function estimateProcessingCost(methodId = state.selectedPaymentId) {
  const method = byId(menuData.paymentMethods, methodId);
  return getGuestTotal() * method.feeRate + method.feeFixed;
}

function renderFeelings() {
  refs.feelingOptions.innerHTML = menuData.feelings.map((item) => `
    <button class="choice-card" type="button" data-feeling-id="${item.id}" data-active="${item.id === state.selectedFeelingId}">
      <strong>${item.name}</strong>
      <p>${item.description}</p>
    </button>
  `).join("");
}

function renderLocations() {
  refs.locationOptions.innerHTML = menuData.locations.map((location) => `
    <button class="location-pill" type="button" data-location-id="${location.id}" data-active="${location.id === state.selectedLocationId}">
      <strong>${location.name}</strong>
      <small>${location.subtitle}</small>
    </button>
  `).join("");
}

function renderLocationCards() {
  refs.locationsGrid.innerHTML = menuData.locations.map((location, index) => `
    <article class="location-card" data-active="${location.id === state.selectedLocationId}">
      <span class="location-index">${String(index + 1).padStart(2, "0")}</span>
      <strong>${location.name}</strong>
      <p>${location.blurb}</p>
    </article>
  `).join("");
}

function renderHeroContext() {
  const location = getSelectedLocation();
  refs.heroBadges.innerHTML = location.featured.map((item) => `<span>${item}</span>`).join("");
  refs.heroStats.innerHTML = location.stats.map((item) => `
    <article>
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </article>
  `).join("");
}

function renderSystemPoints() {
  const location = getSelectedLocation();
  refs.systemPoints.innerHTML = location.systemPoints.map((item) => `
    <article>
      <strong>${item.title}</strong>
      <p>${item.copy}</p>
    </article>
  `).join("");
}

function renderInfusions() {
  refs.infusionOptions.innerHTML = menuData.infusions.map((item) => `
    <button class="choice-card" type="button" data-infusion-id="${item.id}" data-active="${item.id === state.selectedInfusionId}" style="--accent-swatch:${item.accent};">
      <strong>${item.name}</strong>
      <p>${item.cue} • ${item.description}</p>
    </button>
  `).join("");
}

function renderDrinkCard(drink) {
  return `
    <button class="drink-option" type="button" data-drink-id="${drink.id}" data-active="${drink.id === state.selectedDrinkId}" style="--swatch-a:${drink.colors[0]}; --swatch-b:${drink.colors[2]};">
      <span class="price-tag">${formatCurrency(drink.price)}</span>
      <span class="drink-option-media">
        <img class="drink-illustration" src="${buildDrinkPoster(drink)}" alt="${drink.name} poster art" loading="lazy" />
      </span>
      <span class="drink-option-copy">
        <small>${drink.category}</small>
        <strong>${drink.name}</strong>
        <p>${drink.description}</p>
      </span>
    </button>
  `;
}

function renderDrinks() {
  const location = getSelectedLocation();
  const featuredDrinks = location.featuredDrinkIds
    .map((drinkId) => byId(menuData.drinks, drinkId))
    .filter(Boolean);
  const grouped = menuData.drinks.reduce((map, drink) => {
    const key = drink.section;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(drink);
    return map;
  }, new Map());

  const featuredMarkup = `
    <div class="drink-collection-head">
      <div>
        <div class="drink-group-title">Featured at ${location.name}</div>
        <p class="drink-collection-copy">Start with the strongest drinks for this store, then open the full board only if the guest wants to keep browsing.</p>
      </div>
      <button class="ghost-button menu-toggle-button" type="button" data-action="toggle-full-menu" aria-expanded="${state.showFullMenu}">
        ${state.showFullMenu ? "Hide full menu" : "View full menu"}
      </button>
    </div>
    ${featuredDrinks.map(renderDrinkCard).join("")}
  `;

  const fullMenuMarkup = state.showFullMenu ? [...grouped.entries()].map(([section, drinks]) => `
    <div class="drink-group-title drink-group-title-secondary">${section}</div>
    ${drinks.map(renderDrinkCard).join("")}
  `).join("") : "";

  refs.drinkOptions.innerHTML = `
    ${featuredMarkup}
    ${state.showFullMenu ? `<div class="drink-collection-note">Full menu open for guests who want coffee, tea, premium builds, and the full signature cocktail lineup.</div>` : ""}
    ${fullMenuMarkup}
  `;
}

function renderFlavors() {
  refs.flavorOptions.innerHTML = menuData.flavors.map((item) => `
    <button class="choice-card" type="button" data-flavor-id="${item.id}" data-active="${state.selectedFlavorIds.has(item.id)}">
      <strong>${item.name}</strong>
      <p>${item.note} • ${formatCurrency(item.price)}</p>
    </button>
  `).join("");
}

function renderElevateOptions() {
  refs.elevateOptions.innerHTML = menuData.elevateOptions.map((item) => `
    <button class="choice-card" type="button" data-elevate-id="${item.id}" data-active="${item.id === state.selectedElevateId}">
      <strong>${item.name}</strong>
      <p>${item.note} • ${item.price ? formatCurrency(item.price) : "Included"}</p>
    </button>
  `).join("");
}

function renderTipOptions() {
  refs.tipOptions.innerHTML = menuData.tipOptions.map((tip) => `
    <button class="tip-card" type="button" data-tip="${tip}" data-active="${tip === state.selectedTip}">
      <strong>${tip}%</strong>
      <p>${formatCurrency(getSubtotal() * (tip / 100))}</p>
    </button>
  `).join("");
}

function renderPaymentOptions() {
  refs.paymentOptions.innerHTML = menuData.paymentMethods.map((item) => {
    const detail = item.id === "bank" ? "Best for a simple direct checkout flow" : "Fastest option for a quick phone payment";
    return `
      <button class="payment-card" type="button" data-payment-id="${item.id}" data-active="${item.id === state.selectedPaymentId}">
        <span class="price-tag">${item.label}</span>
        <strong>${item.name}</strong>
        <p>${item.note}</p>
        <small>${detail}</small>
      </button>
    `;
  }).join("");
}

function updateStage() {
  const drink = getSelectedDrink();
  const location = getSelectedLocation();
  const feeling = getSelectedFeeling();
  const infusion = getSelectedInfusion();
  const tags = [...new Set([...drink.tags, ...getSelectedFlavors().map((item) => item.name)])].slice(0, 6);

  refs.stageDrinkName.textContent = drink.name;
  refs.stageDrinkPrice.textContent = formatCurrency(getUnitSubtotal());
  refs.stageDrinkDescription.textContent = drink.description;
  refs.stageDrinkPoster.src = buildDrinkPoster(drink);
  refs.stageDrinkPoster.alt = `${drink.name} poster artwork`;
  refs.stageFeeling.textContent = feeling.name;
  refs.stageInfusion.textContent = `${infusion.name} • ${location.name}`;
  refs.stagePaymentHint.textContent = state.selectedPaymentId === "bank" ? "Secure low-friction checkout" : "Fast digital wallet checkout";
  refs.stageIngredients.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");

  document.documentElement.style.setProperty("--accent-one", drink.colors[0]);
  document.documentElement.style.setProperty("--accent-two", infusion.accent);
  document.documentElement.style.setProperty("--accent-three", drink.colors[1]);
  document.documentElement.style.setProperty("--accent-four", drink.colors[2]);
  document.documentElement.style.setProperty("--drink-top", drink.colors[0]);
  document.documentElement.style.setProperty("--drink-mid", drink.colors[1]);
  document.documentElement.style.setProperty("--drink-bottom", drink.colors[2]);
  document.documentElement.style.setProperty("--foam-color", drink.foam);
  document.documentElement.style.setProperty("--straw-color", drink.straw);
  document.documentElement.style.setProperty("--garnish-color", drink.garnish);
}

function updateProgress() {
  const location = getSelectedLocation();
  refs.feelingPreview.textContent = getSelectedFeeling().name;
  refs.infusionPreview.textContent = getSelectedInfusion().name;
  refs.drinkPreview.textContent = getSelectedDrink().name;
  refs.paymentPreview.textContent = `${getSelectedPayment().shortName} • ${location.name}`;
}

function updateLocationState() {
  const location = getSelectedLocation();
  refs.selectedLocationName.textContent = location.name;
  refs.selectedLocationMeta.textContent = `${location.blurb} ${location.wait}`;
  refs.builderGrid.classList.toggle("is-gated", !state.hasStartedOrder);
  refs.flowGate.hidden = state.hasStartedOrder;
  refs.eventsTitle.textContent = location.eventTitle;
  refs.eventsCopy.textContent = location.eventCopy;
  refs.eventsLink.href = location.eventLink;
  if (!state.hasStartedOrder) {
    state.selectedDrinkId = location.defaults.drinkId;
    state.selectedFeelingId = location.defaults.feelingId;
    state.selectedInfusionId = location.defaults.infusionId;
  }
}

function updateCheckout() {
  const payment = getSelectedPayment();
  const location = getSelectedLocation();
  const subtotal = getSubtotal();
  const tip = getTipAmount();
  const total = getGuestTotal();

  refs.guestName.value = state.guestName;
  refs.quantityValue.textContent = String(state.quantity);

  refs.summaryList.innerHTML = [
    `<li><div><strong>${getSelectedDrink().name}</strong><small>${getSelectedDrink().category}</small></div><span>${formatCurrency(getSelectedDrink().price * state.quantity)}</span></li>`,
    getSelectedFlavors().length ? `<li><div><strong>Flavor add-ons</strong><small>${getSelectedFlavors().map((item) => item.name).join(", ")}</small></div><span>${formatCurrency(getFlavorUnitTotal() * state.quantity)}</span></li>` : "",
    `<li><div><strong>${getSelectedElevate().name}</strong><small>${getSelectedElevate().note}</small></div><span>${formatCurrency(getSelectedElevate().price * state.quantity)}</span></li>`
  ].join("");

  refs.subtotalValue.textContent = formatCurrency(subtotal);
  refs.tipValue.textContent = formatCurrency(tip);
  refs.totalValue.textContent = formatCurrency(total);
  refs.providerBadge.textContent = payment.id === "bank" ? "Secure bank checkout" : "Fast wallet checkout";
  refs.feeBanner.textContent = `${location.name} keeps ${payment.name.toLowerCase()} available inside the same phone-first flow.`;
  refs.qrCallout.textContent = payment.id === "bank"
    ? `${location.name} is ready for direct bank pay on this order.`
    : `${location.name} is ready for phone wallet checkout on this order.`;

  const orderSummary = `${getSelectedDrink().name} at ${location.name} for ${state.guestName || "Tribe Guest"} at ${formatCurrency(total)} with ${state.selectedTip}% gratuity`;
  refs.submitOrder.textContent = "Continue to checkout";
  refs.submitOrder.href = `mailto:hello@kavaculture.xyz?subject=${encodeURIComponent("Kava Culture Phone Order")}&body=${encodeURIComponent(orderSummary)}`;
  refs.checkoutNote.textContent = `${location.name} guests can choose their drink, tip on their phone, and move straight into checkout.`;
}

function renderAll() {
  updateLocationState();
  renderLocations();
  renderLocationCards();
  renderHeroContext();
  renderSystemPoints();
  renderFeelings();
  renderInfusions();
  renderDrinks();
  renderFlavors();
  renderElevateOptions();
  renderTipOptions();
  renderPaymentOptions();
  updateStage();
  updateProgress();
  updateCheckout();
}

function handleSelectionClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.action === "toggle-full-menu") {
    state.showFullMenu = !state.showFullMenu;
    renderAll();
    return;
  }

  if (button.dataset.locationId && button.dataset.locationId !== state.selectedLocationId) {
    state.selectedLocationId = button.dataset.locationId;
    state.showFullMenu = false;
  }
  if (button.dataset.feelingId) state.selectedFeelingId = button.dataset.feelingId;
  if (button.dataset.infusionId) state.selectedInfusionId = button.dataset.infusionId;
  if (button.dataset.drinkId) state.selectedDrinkId = button.dataset.drinkId;
  if (button.dataset.elevateId) state.selectedElevateId = button.dataset.elevateId;
  if (button.dataset.paymentId) state.selectedPaymentId = button.dataset.paymentId;
  if (button.dataset.tip) state.selectedTip = Number(button.dataset.tip);

  if (button.dataset.flavorId) {
    if (state.selectedFlavorIds.has(button.dataset.flavorId)) state.selectedFlavorIds.delete(button.dataset.flavorId);
    else state.selectedFlavorIds.add(button.dataset.flavorId);
  }

  renderAll();
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindDrinkTilt() {
  const card = refs.drinkCard;
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 24;
    const rotateX = (0.5 - offsetY / rect.height) * 20;
    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "-8deg");
    card.style.setProperty("--tilt-y", "10deg");
  });
}

function bindInputs() {
  document.addEventListener("click", handleSelectionClick);
  refs.startOrderButton.addEventListener("click", () => {
    state.hasStartedOrder = true;
    renderAll();
  });
  refs.decreaseQuantity.addEventListener("click", () => {
    state.quantity = Math.max(1, state.quantity - 1);
    renderAll();
  });
  refs.increaseQuantity.addEventListener("click", () => {
    state.quantity += 1;
    renderAll();
  });
  refs.guestName.addEventListener("input", (event) => {
    state.guestName = event.target.value;
    updateCheckout();
  });
  bindScrollButtons();
  bindDrinkTilt();
}

bindInputs();
renderAll();
