import React, { ReactElement } from "react";

export const MessageCircle = ({
    className,
    active,
    onClick,
}: {
    className?: string;
    active?: boolean;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
}): ReactElement => (
    <svg
        className={className}
        onClick={onClick}
        width='94'
        height='94'
        viewBox='0 0 94 94'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g filter='url(#filter0_b_17387_74964)'>
            <path
                d='M78 43C78 60.1208 64.1208 74 47 74C29.8792 74 16 60.1208 16 43C16 25.8792 29.8792 12 47 12C64.1208 12 78 25.8792 78 43Z'
                fill='#F9FAFF'
                fillOpacity='0.12'
            />
            <path
                d='M77.5 43C77.5 59.8447 63.8447 73.5 47 73.5C30.1553 73.5 16.5 59.8447 16.5 43C16.5 26.1553 30.1553 12.5 47 12.5C63.8447 12.5 77.5 26.1553 77.5 43Z'
                stroke='#EAF2FF'
            />
        </g>
        <g filter='url(#filter1_d_17387_74964)'>
            <path
                d='M73.2311 43.0003C73.2311 57.4872 61.4872 69.2311 47.0003 69.2311C32.5134 69.2311 20.7695 57.4872 20.7695 43.0003C20.7695 28.5134 32.5134 16.7695 47.0003 16.7695C61.4872 16.7695 73.2311 28.5134 73.2311 43.0003Z'
                fill='url(#paint0_linear_17387_74964)'
            />
        </g>
        <g filter='url(#filter2_d_17387_74964)'>
            <path
                d='M47 30C39.8367 30 34 35.8367 34 43C34 44.9898 34.398 46.9796 35.3265 48.7041V53.6122C35.3265 54.1429 35.7245 54.6735 36.3878 54.6735H41.2959C43.0204 55.602 45.0102 56 47 56C54.1633 56 60 50.1633 60 43C60 35.8367 54.1633 30 47 30ZM43.0204 44.3265C42.3571 44.3265 41.6939 43.6633 41.6939 43C41.6939 42.3367 42.3571 41.6735 43.0204 41.6735C43.6837 41.6735 44.3469 42.3367 44.3469 43C44.3469 43.6633 43.6837 44.3265 43.0204 44.3265ZM47 44.3265C46.3367 44.3265 45.6735 43.6633 45.6735 43C45.6735 42.3367 46.3367 41.6735 47 41.6735C47.6633 41.6735 48.3265 42.3367 48.3265 43C48.3265 43.6633 47.6633 44.3265 47 44.3265ZM50.9796 44.3265C50.3163 44.3265 49.6531 43.6633 49.6531 43C49.6531 42.3367 50.3163 41.6735 50.9796 41.6735C51.6429 41.6735 52.3061 42.3367 52.3061 43C52.3061 43.6633 51.6429 44.3265 50.9796 44.3265Z'
                fill='url(#paint1_linear_17387_74964)'
            />
        </g>
        {active ? (
            <path
                className='active-path'
                d='M29.5259 67.8456C29.2908 68.1666 29.3585 68.618 29.6836 68.8474C33.1356 71.284 37.0509 72.9839 41.1901 73.8397C45.5641 74.7442 50.085 74.6848 54.4431 73.6658C58.8013 72.6469 62.8939 70.6923 66.4408 67.9358C69.9877 65.1794 72.9051 61.6863 74.9933 57.6956C77.0814 53.7049 78.2911 49.3108 78.5394 44.8142C78.7878 40.3176 78.0689 35.8247 76.4321 31.6429C74.7953 27.4612 72.2791 23.6894 69.0559 20.5858C66.0071 17.6502 62.3937 15.3779 58.4392 13.9058C58.0642 13.7662 57.6513 13.9679 57.5209 14.3461C57.3907 14.724 57.5916 15.1351 57.966 15.2749C61.7256 16.6791 65.1609 18.842 68.0607 21.6342C71.1347 24.5941 73.5343 28.1912 75.0953 32.1793C76.6564 36.1674 77.3419 40.4523 77.1051 44.7407C76.8683 49.0291 75.7146 53.2196 73.7231 57.0255C71.7316 60.8314 68.9494 64.1628 65.5667 66.7916C62.1841 69.4203 58.281 71.2844 54.1246 72.2562C49.9683 73.228 45.6568 73.2846 41.4854 72.4221C37.5513 71.6086 33.8294 69.9958 30.5455 67.6848C30.2175 67.454 29.763 67.5221 29.5259 67.8456Z'
                fill='#2A7BF7'
            />
        ) : null}
        <defs>
            <filter
                id='filter0_b_17387_74964'
                x='12'
                y='8'
                width='70'
                height='70'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feGaussianBlur in='BackgroundImage' stdDeviation='2' />
                <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_17387_74964' />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_backgroundBlur_17387_74964'
                    result='shape'
                />
            </filter>
            <filter
                id='filter1_d_17387_74964'
                x='0.769531'
                y='0.769531'
                width='92.4609'
                height='92.4609'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='10' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0335174 0 0 0 0 0.0608213 0 0 0 0 0.204167 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_17387_74964' />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_17387_74964'
                    result='shape'
                />
            </filter>
            <filter
                id='filter2_d_17387_74964'
                x='24'
                y='24'
                width='46'
                height='46'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0.0266667 0 0 0 0 0.266667 0 0 0 0.14 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_17387_74964' />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_17387_74964'
                    result='shape'
                />
            </filter>
            <linearGradient
                id='paint0_linear_17387_74964'
                x1='38.6541'
                y1='18.558'
                x2='53.558'
                y2='66.8465'
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#2C7DFA' />
                <stop offset='1' stopColor='#1563DB' />
            </linearGradient>
            <linearGradient
                id='paint1_linear_17387_74964'
                x1='47'
                y1='30'
                x2='47'
                y2='56'
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='white' />
                <stop offset='1' stopColor='#F1F6FF' />
            </linearGradient>
        </defs>
    </svg>
);
