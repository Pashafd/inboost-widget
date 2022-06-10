import React, { ReactElement } from "react";
export const Web = ({
    changeOpenModal,
    className,
}: {
    changeOpenModal?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    className?: string;
}): ReactElement => {
    return (
        <svg
            className={className ?? ""}
            onClick={changeOpenModal}
            width='33'
            height='38'
            viewBox='0 0 33 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='16' cy='15' r='14' fill='#9EC5FE' />
            <g filter='url(#filter0_d_17387_75029)'>
                <path
                    d='M16.5827 14.8339C18.7635 14.8339 20.5314 13.0431 20.5314 10.834C20.5314 8.62484 18.7635 6.83398 16.5827 6.83398C14.4019 6.83398 12.634 8.62484 12.634 10.834C12.634 13.0431 14.4019 14.8339 16.5827 14.8339Z'
                    fill='white'
                />
                <path
                    d='M18.6393 16.5007H14.5261C12.1404 16.5007 10.166 18.5007 10.166 20.9173C10.166 21.5007 10.4128 22.0007 10.9064 22.2507C11.6468 22.6673 13.2921 23.1673 16.5827 23.1673C19.8733 23.1673 21.5186 22.6673 22.259 22.2507C22.6703 22.0007 22.9993 21.5007 22.9993 20.9173C22.9993 18.4173 21.025 16.5007 18.6393 16.5007Z'
                    fill='white'
                />
            </g>
            <defs>
                <filter
                    id='filter0_d_17387_75029'
                    x='0.166016'
                    y='0.833984'
                    width='32.834'
                    height='36.334'
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
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_17387_75029' />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_17387_75029'
                        result='shape'
                    />
                </filter>
            </defs>
        </svg>
    );
};
