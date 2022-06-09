import { ReactElement } from "react";

export const Close = (): ReactElement => (
    <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <mask
            id='mask0_17369_75102'
            style={{ maskType: "alpha" }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='50'
            height='50'
        >
            <circle cx='25' cy='25' r='25' fill='white' />
        </mask>
        <g mask='url(#mask0_17369_75102)'>
            <rect x='-6' y='-5' width='62' height='62' fill='url(#pattern0)' />
        </g>
        <defs>
            <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use xlinkHref='#image0_17369_75102' transform='scale(0.0108696)' />
            </pattern>
            <image
                id='image0_17369_75102'
                width='92'
                height='92'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAoBSURBVHhe5Z1tbxV1Gof7iWS/gC7Zz6VQCm2BxZAQV6LREMHwIFAEBNZHREEjRlpYV+MLqUbqaiHZXUyUfbH7X68zuTv3/Oc3c2bOmTkzp+fFVdKemfvhmrv3mZ4eYO7gwefDJDhw4FBvUfW2RevCVYN9RdXfNK0JVw1VZf/+P4+NilsV1U9TNC5cNTAMJaxpVN5hqP7GpTHhquAylJQylpcPFqKOL0PVU4bqd1QaEa6KVKjmPUrmuKg8HlWnQvU9CmMJV4UpVKOGkmQsLR2ojYpjqPyGqluhPNRhZOGqmBjVGCgZXtrRoy+H8+cvhQ8//CTcu/d1+O67jbC5+e/wyy//Cb/99r/w5EkY/MnnfJ3HOY7jOY/zfTyVT9UFqo8Y5aMqIwlXRXhUIxA3bUIOHTocVlYuh9XVL8OjR48HQseFOMQjLvGL5Ks6QfXlUV6qUEu4SuxRhYNv0BqH06fPhbt3v5bCmoY85PP5fV2qblB9epSnMioLV8k8qljfkG/06tV3w48/PpJi2oa85Pf1+DpVH6pfj/JVRCXhKoknLtA34Bt76623BztXiZg01EE9vj5fd9yT6tujvCmGClfBjbgo8EVbIydOnA7r6xuy8a6hLuqrIh2UB0P5iykVroIacSG+UCsebt26LRvtG9Tp6/b9xL0qH4by6CkUroIZcQG+OCv4lVeOhe+//4dsrq9QL3W3KV0KV0GMOHEsGlZWLoVff/2vbKrvUDf1+36alF5LeJxQyX7nneuykWmDPnxfdaUrr5ATrk6GOFEse3Fx/+8/6d2SxU8r9ENfTUrPCFcnQZxgFmQbTUvfEq4Ohjiwkr1d1kgR9NeU9FrClWyeYFSR2w36HCZd+YOccHUQ+GBKNrdQ03o3Uhf6pN9xpc+pB8EHUbIXF5en7j57XOiXvseRLoX7kyEvfDncvDkdP0E2DX3Tf5lwUF4rCc/L3h+OHz8li5kV6H/UKc8J9ycp2fv2LYf79/v5QtSkoH88jCK9snCC8610+fJfZRGzBh78Ph9JuD/Yy06ELw+ual9ez+4aPCRTXr7PvV8oFZ7KTqb7ypW3ZfJZBR9+yk269+j9wpZwf5BdqVR4Mt0bG938Wqyv4KPulBcKT2UnT5SnTp2VSWcdvCTSq035QLh/0K5QKjyZ7rW1r2TCWQcvdaZcCk9lJ9PNDbtK1hSffbYannlmZ/jpp3/Kx0eFeMS9fXtNPt4U+Kk65RnhdmVS4cl0nzt3USZqiqef/mOYm5sLO3b8oTHpxCEecXfu/JM8pinwM2zKt4TbF2LhXK1E+FK4c+dvMlFTIOepp3Y0Jt3LJm5TF7EI/OAJXzblsXCQwu0K2TrZu3cpPHzY/r13U9InLRvwg6cqa2VLuF2RVHgy3S+8cFQmaYNxpXch28CTTbkX7qUXCrfpJsDZsxdkgrYYVXqXsgFP+PJTHguHjHC7Mn6dXL9+UyZok7rSu5YNeKqyVgbC7UqkwpO7EwLcvdvN/XdV6X2QDXhKhRevlZxwro7t74WFxU7fEzhMel9kA57wZXu8aK1I4VwlE765+S+ZYFIUSe+TbMCTCfdrpbJwvj0I8PjxE5lgksTSv/lmvVeyAU/4ivd4oXAeVMLt79R0jZdu9EU24EkJN+klwtMnTAKo4F3BZHvhfK6O64qs8OwT5xDhS72ccFsjht/pXZOd8PwPQFvC+UQJ52Toyw73O5vJ9ju9D9Jth4MSbtKHCu/DXYp6guTPPkm3u5Sxha+vP5AJJkGRbP94X6TjqRHha2t/lwnaZphsf1wfpOOpEeEffPCxTNAmVWUbfZCOp0aEnzmzIhO0RV3ZRtfS8dSI8CNH/iITtMGoso0upeOpknA+KOF2H75nz76J/cZnHNlGF9Lxgyd8Db0P18LTnzQJ9MUX92SipmhKtjFp6fjJCq/1k2b2tRQCvfFGu7/1sd/aNyHb8NLb/q09fvLCh7yWYtKV8OXlAzJRU/C+EaQ0PYnEI27b70vBT5FwcztUuD1xEmh+fm9YXe3mfrzv4AU/JhxvtYXbEycBTPrrr5+WCWcdvJhsE46/ysIT6fknzvn5hbCx8VAmnVXwgRcTnq4TfUu4Jdykp8Lze5xvm0uXrsnEswo+/DqJ97cJN8c54SbdhMd7fPfuhfDzz+3f104DeMBHnf1dKDyRngiP18qbb16RBcwaeMivk+KfMKHyewvjKf/22+5esu0D9B9Pd5V1UvndswT0U37s2AlZyKxA/366waa7bJ0MhPNBCU+kq7uVZMo/+uhTWcx2h76Lp7t8neSEm/RUePbJM5W+8HvSPZ2+K6sL6Je+1XRXWSeFwrPSi6f8xRdfmql/TYJ+R5luyAhX0lPh5VM+6V9QdAV9jjvdpcKz0ounnCKuXXtXFrldoD/6HHe6M8LBH5QVXnTHkkjftWtPeP/9G7LYaYe+6C+WDfjAS9XphlLhWenJlOvVsj2lZ2UXrZLq0w0Z4eAP9tLTKc+vFtvnFMe/XKyKnzboI5Gd7O2iVWLTXUU2VBZu0m3Ki/Y5RZ45c35q716om/pNdrxKEtn6iXIk4eBPKpNOAUXSuYWatvt06qXuItkwjmwYKhzy0ov2eVb6rl3z4caNT2RzfYM6qbea7PK9Dcrr2P+qG8lttZRJf/XV13r7ghd1Ud8w2WpvFwlXPmEgnA/qQfBB6kr3dy8089xz8+HChcu9eT2dOqiHulLZiG5P9pbwtqX7aafBixevhgcPNqWItiEv+bOiJyO7tnAokx7vdBOvpD/77O5w/PjJcOfOl1JM05CHfOTVshPRXrbf2cNkg/IHUjiogyEOPEx6nWkHjue/fPn887XG3lZHHOIRl/iWq/pUNy8bMsJBnQRxgrrSy8T7qYfDh4+EkyfPhvfeuzH4z4/u3/9hsHP5ax32d474k8/5Oo9zHMdzHudbrFRysehJyYaccFAnQ5wolm7iE+mJeGukTLyS7y9AHezcvORy0WCiE9mpaGhCNtQSDnHCIulF0w5afCw/vQAeE5qV6knO9ZKHiS6baqgrG5RXkMJBBTHixFaQF2/Sq4tP5KsLYKQXIiU+Jis4kVxddFa27yvuWXkxlE+jUDioYEZcgC/OCvbiE+nl4o34AmQvQh5/XCzY8Pm86FS2nmqIe1U+DOXRUyocVFAjLgR8ob6BIvGxfIhlGemFSFHHQRzTco0jGpQHQ/mLGSocVHBPXJQv2jcDJj6Vn0gokj8OWcmJaMsdiwZfd9yT6tujvCkqCQeVxBMXCL6BuLlEfDz1+QtgKKFGfKwXbJjkuqJB9etRvoqoLBxUMo8qFnxDcbPg5ecvAHiJRWTPsVhFksHXpeoG1adHeSqjlnBDJfaowsE3CEpCKj97EaqRPVfFj2tQdYLqy6O8VGEk4aCKiFGNQNw0KDlNofKpukD1EaN8VOP58H/9qD7x4KSMggAAAABJRU5ErkJggg=='
            />
        </defs>
    </svg>
);
