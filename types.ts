export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  singleFlavors: MenuItem[];
  signatureMixes: MenuItem[];
}