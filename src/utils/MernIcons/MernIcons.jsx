import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiReact } from "react-icons/si";

const MernIcon = ({ dataTooltipId, dataTooltipContent }) => {
    return (
        <SiMongodb
            data-tooltip-id={dataTooltipId}
            data-tooltip-content={dataTooltipContent}
            className='w-6 h-6 p-1 md:w-11 md:h-11 bg-white md:p-3 rounded-full text-black cursor-pointer hover:bg-gray-200 transition-colors'
        />
    );
};

const ExpressIcon = ({ dataTooltipId, dataTooltipContent }) => {
    return (
        <SiExpress
            data-tooltip-id={dataTooltipId}
            data-tooltip-content={dataTooltipContent}
            className='w-6 h-6 p-1 md:w-11 md:h-11 bg-white md:p-3 rounded-full text-black cursor-pointer hover:bg-gray-200 transition-colors'
        />
    )
};

const ReactIcon = ({ dataTooltipId, dataTooltipContent }) => {
    return (
        <SiReact
            data-tooltip-id={dataTooltipId}
            data-tooltip-content={dataTooltipContent}
            className='w-6 h-6 p-1 md:w-11 md:h-11 bg-white md:p-3 rounded-full text-black cursor-pointer hover:bg-gray-200 transition-colors'
        />
    )
};

const NodeIcon = ({ dataTooltipId, dataTooltipContent }) => {
    return (
        <DiNodejs
            data-tooltip-id={dataTooltipId}
            data-tooltip-content={dataTooltipContent}
            className='w-6 h-6 p-1 md:w-11 md:h-11 bg-white md:p-3 rounded-full text-black cursor-pointer hover:bg-gray-200 transition-colors'
        />
    )
}

export { MernIcon, ExpressIcon, ReactIcon, NodeIcon };
