import React from 'react'

export default function ArrowButton({className, onClick, disabled}) {
    return (
        <button
            className={`${className} ${disabled? className + '--disabled': null}`}
            disabled={disabled}
            onClick={onClick}>
            <svg
                width="26"
                height="24"
                xmlns="http://www.w3.org/2000/svg">
                    <g
                        stroke={
                            disabled
                            ? '#E5E5E5'
                            : '#000000'
                        }
                        fill="none"
                        fill-rule="evenodd">
                            <path
                                d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                                stroke-width="2"/>
                            <path
                                fill="#D8D8D8"
                                d="M24.708.5h1v22.775h-1z"/>
                    </g>
            </svg>
        </button>
    )
}
