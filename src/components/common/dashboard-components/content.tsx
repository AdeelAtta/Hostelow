import React, { ReactElement } from 'react';

interface ContentProps {
    displayComponent: ReactElement
}

const Content: React.FC<ContentProps> = ({ displayComponent }) => {

    return (
        <div className="px-6 pt-6 2xl:container">
            <div className="flex min-h-[90vh] justify-center rounded-xl overflow-hidden oveflow-y-scroll">
                {displayComponent}
            </div>
        </div>
    )

}

export default Content;