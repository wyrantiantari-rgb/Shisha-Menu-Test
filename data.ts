import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    title: "ULTRA LIGHT",
    singleFlavors: [
      { name: "Whiteline Vanilla", price: "280K" },
      { name: "Whiteline Oolong Tea", price: "280K" },
      { name: "Herbaline Watermelon", price: "280K" }
    ],
    signatureMixes: [
      { name: "Vanilla Breeze", price: "320K", description: "Whiteline Vanilla & Whiteline Ice" },
      { name: "Watermelon Wave", price: "320K", description: "Herbaline Watermelon & Whiteline Oloong Tea" }
    ]
  },
  {
    title: "LIGHT",
    singleFlavors: [
      { name: "Whiteline Mint", price: "295K" },
      { name: "Al Fakher Two Apple", price: "295K" }
    ],
    signatureMixes: [
      { name: "Minty Grapes", price: "335K", description: "Sweet grape & cooling mint" },
      { name: "Minty Gum", price: "335K", description: "Sweet Minty Aroma & Soft Flavor" }
    ]
  },
  {
    title: "MEDIUM",
    singleFlavors: [
      { name: "Blackline African Queen", price: "325K" },
      { name: "Blackline Spicey Lime", price: "325K" },
      { name: "Blackline Booster", price: "325K" },
      { name: "Adalya Moscow Evening", price: "325K" }
    ],
    signatureMixes: [
      { name: "Tipsy Lime", price: "405K", description: "Blackline African Queen & Blackline Spicey Lime" },
      { name: "Evening Moscow", price: "405K", description: "Adalya Moscow Evening & Blackline Booster" }
    ]
  },
  {
    title: "BOLD STRONG",
    singleFlavors: [
      { name: "Tangiers Cooling", price: "380K" },
      { name: "Tangiers Schnozzberry", price: "380K" },
      { name: "Darkside Polar Cream", price: "345K" },
      { name: "Darkside Supernova", price: "345K" }
    ],
    signatureMixes: [
      { name: "Berry Kiss", price: "485K", description: "Darkside Polar Cream & Tangiers Schnozzberry" },
      { name: "Wild Heart", price: "485K", description: "Tangiers Cooling & Darkside Supernova" }
    ]
  }
];