import React, { ReactElement } from 'react';

interface ContentProps {
    displayComponent: ReactElement
}

const Content: React.FC<ContentProps> = ({ displayComponent }) => {

    return (
        <div className="px-6 pt-6 2xl:container">
            <div className="flex flex-col min-h-[90vh] items-start justify-start rounded-xl w-full overflow-hidden oveflow-y-scroll">
                {displayComponent}
            </div>
        </div>
    )

}

export default Content;