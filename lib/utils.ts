import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const previewAddress = (address: string) => {
  return address.slice(0, 4) + '..' + address.slice(-4)
}
