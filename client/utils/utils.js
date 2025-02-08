export function getInitials(name) {
  if (!name || typeof name !== 'string') {
    return ''
  }

  const nameParts = name.trim().split(' ')

  if (nameParts.length === 1) {
    return nameParts[0][0]?.toUpperCase() || ''
  }

  const initial =
    (nameParts[0][0]?.toUpperCase() || '') +
    (nameParts[1][0]?.toUpperCase() || '')

  return initial || ''
}
