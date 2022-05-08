import React from 'react';

interface SquareDivProps {
    children: JSX.Element;
    className?: string;
}

const SquareDiv = ({ children, className = '' }: SquareDivProps): JSX.Element => (
    <>
        <style jsx>
            {`
                .square {
                    position: relative;
                    width: 100%;
                }

                .square::before {
                    content: '';
                    display: block;
                    padding-top: 100%;
                }
            `}
        </style>
        <div className={`square ${className || ''}`}>
            <div className="absolute inset-0">{children}</div>
        </div>
    </>
);

export default SquareDiv;
