const Autocomplete = (props) => React.createElement(MuiMaterial.Autocomplete, props);

function stripDiacritics(string) {
    return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

Autocomplete.createFilterOptions = function createFilterOptions(config = {}) {
    const {
        ignoreAccents = true,
        ignoreCase = true,
        limit,
        matchFrom = 'any',
        stringify,
        trim = false
    } = config;
    return (options, {
        inputValue,
        getOptionLabel
    }) => {
        let input = trim ? inputValue.trim() : inputValue;

        if (ignoreCase) {
            input = input.toLowerCase();
        }

        if (ignoreAccents) {
            input = stripDiacritics(input);
        }

        const filteredOptions = options.filter(option => {
            let candidate = (stringify || getOptionLabel)(option);

            if (ignoreCase) {
                candidate = candidate.toLowerCase();
            }

            if (ignoreAccents) {
                candidate = stripDiacritics(candidate);
            }

            return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
        });
        return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
    };
};

module.exports = Autocomplete;
