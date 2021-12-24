export const flattenStyles = (el) => el.props.style.reduce((acc, memo) => {
    acc = {
        ...acc,
        ...(memo
            ? Object.entries(memo).reduce((accX, [key, val]) => {
                accX[key] = val;
                return accX;
            }, {})
            : {}),
    };
    return acc;
}, {});
//# sourceMappingURL=styles.js.map