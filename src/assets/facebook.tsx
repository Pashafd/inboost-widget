import React, { ReactElement } from "react";

export const Facebook = ({
    changeOpenModal,
    className,
}: {
    changeOpenModal?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    className?: string;
}): ReactElement => {
    return (
        <svg
            onClick={changeOpenModal}
            width='24'
            height='24'
            className={className ?? ""}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='12' cy='12' r='12' fill='#006AFF' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.0835 4C7.52941 4 4 7.33586 4 11.8411C4 14.1979 4.96611 16.2342 6.53889 17.6411C6.67064 17.7598 6.75033 17.9241 6.75684 18.1014L6.80075 19.5391C6.81539 19.9978 7.28869 20.2954 7.70832 20.1117L9.312 19.4041C9.44862 19.344 9.59988 19.3326 9.74301 19.3716C10.4798 19.5749 11.2654 19.6823 12.0835 19.6823C16.6375 19.6823 20.167 16.3464 20.167 11.8411C20.167 7.33586 16.6375 4 12.0835 4Z'
                fill='white'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.22997 14.1344L9.60459 10.3676C9.98193 9.76902 10.7919 9.61939 11.3579 10.0439L13.2462 11.4605C13.4203 11.5907 13.6577 11.589 13.8301 11.4589L16.3804 9.52343C16.7203 9.26482 17.166 9.67306 16.9366 10.0341L14.5636 13.7994C14.1863 14.3979 13.3763 14.5475 12.8103 14.123L10.922 12.7064C10.748 12.5763 10.5105 12.5779 10.3381 12.708L7.78621 14.6451C7.44628 14.9037 7.00064 14.4955 7.22997 14.1344Z'
                fill='#006AFF'
            />
        </svg>
    );
};
