export const Countries = new Map([
    ['Belgium', {abbr: 'Bel', flag: 'BEL', label: 'Belgium', id: 'belgium', legend: true}],
    ['Canada', {abbr: 'Can', flag: 'CAN', label: 'Canada', id: 'canada', legend: true}],
    ['England', {abbr: 'Eng', flag: 'ENG', label: 'England', id: 'england', legend: true}],
    ['France', {abbr: 'FRA', flag: 'FRA', label: 'France', id: 'france', legend: true}],
    ['Germany',  {abbr: 'GER', flag: 'GER', label: 'Germany', id: 'germany', legend: true}],
    ['Ireland',  {abbr: 'IRE', flag: 'IRE', label: 'Ireland', id: 'ireland', legend: true}],
    ['Netherlands',  {abbr: 'NET', flag: 'NET', label: 'Netherlands', id: 'netherlands', legend: true}],
    ['Norway',  {abbr: 'NOR', flag: 'NOR', label: 'Norway', id: 'norway', legend: true}],
    ['Scotland',  {abbr: 'SCO', flag: 'SCO', label: 'Scotland', id: 'scotland', legend: true}],
    ['Sweden',  {abbr: 'SWE', flag: 'SWE', label: 'Sweden', id: 'sweden', legend: true}],
    ['USA',  {abbr: 'USA', flag: 'USA', label: 'United States', id: 'usa', legend: true}],
    ['Wales',  {abbr: 'WAL', flag: 'WAL', label: 'Wales', id: 'wales', legend: true}],
    ['',  {abbr: 'Unk', flag: 'UNK', id: 'unknown', label: 'Unknown', legend: false}],
    ['Unknown',  {abbr: 'Unk', flag: 'UNK', id: 'unknown', label: 'Unknown', legend: true}],
    ['unknown country',  {abbr: 'Unk', flag: 'UNK', id: 'unknown', label: 'Unknown', legen: false}],
])

/**
 * @param {string} country
 */
export function countryAbbr(country) {
    const obj = Countries.get(country)
    return obj ? obj.abbr : '???' + country
}

/**
 * @param {string} country
 */
export function countryFlag(country) {
    const obj = Countries.get(country)
    return obj ? obj.flag : 'UNK'
}

/**
 * @param {string} country
 */
export function countryFlagHref(country) {
    return '#' + countryFlag(country)
}

/**
 * @param {string} country
 */
export function countryLabel(country) {
    const obj = Countries.get(country)
    return obj ? obj.label : 'No Label for ' + country
}
