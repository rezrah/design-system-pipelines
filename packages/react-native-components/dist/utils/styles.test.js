import { flattenStyles } from './styles';
describe('flattenStyles', () => {
    it('flattens multiple style arrays into one object', () => {
        const el = {
            props: {
                style: [
                    {
                        borderColor: '#dfdfdf',
                        height: 20,
                        width: 100,
                    },
                    {
                        height: 100,
                        width: 200,
                    },
                    {
                        color: 'red',
                        width: 30,
                    },
                ],
            },
        };
        const flat = flattenStyles(el);
        const expected = {
            borderColor: '#dfdfdf',
            color: 'red',
            height: 100,
            width: 30,
        };
        expect(flat).toEqual(expected);
    });
});
//# sourceMappingURL=styles.test.js.map