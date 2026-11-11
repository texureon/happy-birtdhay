export interface Author {
  name: string;
  avatar: string;
  intro: string;
}

export interface CardItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  /** Slug halaman yang harus dibaca dulu sebelum kartu ini bisa dibuka. */
  requires?: string[];
}

export interface Page {
  slug: string;
  title: string;
  paragraphs: string[];
}
