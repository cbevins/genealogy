export const Countries = new Map([
    ['Belgium', {abbr: 'Bel', flag: 'BEL', label: 'Belgium', legend: true}],
    ['Canada', {abbr: 'Can', flag: 'CAN', label: 'Canada', legend: true}],
    ['England', {abbr: 'Eng', flag: 'ENG', label: 'England', legend: true}],
    ['France', {abbr: 'FRA', flag: 'FRA', label: 'France', legend: true}],
    ['Germany',  {abbr: 'GER', flag: 'GER', label: 'Germany', legend: true}],
    ['Ireland',  {abbr: 'IRE', flag: 'IRE', label: 'Ireland', legend: true}],
    ['Netherlands',  {abbr: 'NET', flag: 'NET', label: 'Netherlands', legend: true}],
    ['Norway',  {abbr: 'NOR', flag: 'NOR', label: 'Norway', legend: true}],
    ['Scotland',  {abbr: 'SCO', flag: 'SCO', label: 'Scotland', legend: true}],
    ['Sweden',  {abbr: 'SWE', flag: 'SWE', label: 'Sweden', legend: true}],
    ['USA',  {abbr: 'USA', flag: 'USA', label: 'United States', legend: true}],
    ['Wales',  {abbr: 'WAL', flag: 'WAL', label: 'Wales', legend: true}],
    ['',  {abbr: 'Unk', flag: 'UNK', label: 'Unknown'}],
    ['Unknown',  {abbr: 'Unk', flag: 'UNK', label: 'Unknown', legend: true}],
    ['unknown country',  {abbr: 'Unk', flag: 'UNK', label: 'Unknown'}],
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
