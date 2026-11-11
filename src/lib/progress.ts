import type { CardItem } from "../types";

const KEY = "ulang-tahun:dibaca";
// Cadangan bila penyimpanan browser tidak tersedia (misalnya mode privat).
const memory = new Set<string>();

function readStorage(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const value: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

/** Daftar slug halaman yang sudah selesai dibaca. */
export function getRead(): string[] {
  return [...new Set([...readStorage(), ...memory])];
}

export function markRead(slug: string) {
  memory.add(slug);
  try {
    window.localStorage.setItem(KEY, JSON.stringify(getRead()));
  } catch {
    // Tidak apa-apa: progres tetap tersimpan selama halaman terbuka.
  }
}

export function isUnlocked(card: CardItem | undefined, read: string[]): boolean {
  return (card?.requires ?? []).every((slug) => read.includes(slug));
}
