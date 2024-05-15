# International Days (cs)

[![NPM Downloads](https://img.shields.io/npm/dm/international-days-cs?style=for-the-badge)](https://www.npmjs.com/package/international-days-cs)
[![NPM Version](https://img.shields.io/npm/v/international-days-cs?style=for-the-badge)](https://www.npmjs.com/package/international-days-cs)
[![NPM License](https://img.shields.io/npm/l/international-days-cs?style=for-the-badge)](https://github.com/OzzyCzech/international-days-cs/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/international-days-cs?style=for-the-badge)](https://github.com/OzzyCzech/international-days-cs/commits/main)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/OzzyCzech/international-days-cs/main.yml?style=for-the-badge)](https://github.com/OzzyCzech/international-days-cs/actions)

## Functions

All functions are available in the main module. You can import them like this:

```javascript
import { getInternationalDays } from 'international-days-cs';

// get all international days for 01-01-2024
const days = getInternationalDays(new Date(2024, 0, 1));

console.log(days);

// or you can get all days as string

console.log(
  days.map(day => `${day.icon} ${day.name}`).join('\n')
);
```

## Credits

- [Mezinárodní dny a roky](https://cs.wikipedia.org/wiki/Mezinárodní_dny_a_roky)

## License

MIT