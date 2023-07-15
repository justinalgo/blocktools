export function truncateAddress(addr: string) {
  return `${addr.substring(0, 10)}...${addr.substring(addr.length - 4)}`
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}